/** biome-ignore-all lint/a11y/useSemanticElements: CAROUSEL DIV */
"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";

const carouselStyle = {
	content: "min-w-64 aspect-[2/1]",
	item: "basis-full", // basis-full -> 1 slide visibile --- basis-1/2 -> 2 slide visibili
};

const CarouselContext = createContext(null);

function useCarousel() {
	const context = useContext(CarouselContext);

	if (!context) {
		throw new Error("useCarousel must be used within a <Carousel />");
	}

	return context;
}

// - CAROUSEL ROOT -------------------------------------------------------------------
function Carousel({
	orientation = "horizontal",
	ar,
	opts,
	setApi,
	plugins,
	className,
	children,
	...props
}) {
	const [carouselRef, api] = useEmblaCarousel(
		{
			...opts,
			axis: orientation === "horizontal" ? "x" : "y",
		},
		plugins,
	);
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	const onSelect = useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);

	const scrollPrev = useCallback(() => {
		api?.scrollPrev();
	}, [api]);

	const scrollNext = useCallback(() => {
		api?.scrollNext();
	}, [api]);

	const handleKeyDown = useCallback(
		(event) => {
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				scrollPrev();
			} else if (event.key === "ArrowRight") {
				event.preventDefault();
				scrollNext();
			}
		},
		[scrollPrev, scrollNext],
	);

	useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);

	useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);

		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);

	return (
		<CarouselContext.Provider
			value={{
				carouselRef,
				ar,
				api: api,
				opts,
				orientation:
					orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
				scrollPrev,
				scrollNext,
				canScrollPrev,
				canScrollNext,
			}}
		>
			<div
				onKeyDownCapture={handleKeyDown}
				className={cn("relative flex flex-col gap-2", className)}
				role="region"
				aria-roledescription="carousel"
				data-slot="carousel"
				{...props}
			>
				{children}
			</div>
		</CarouselContext.Provider>
	);
}

// - CAROUSEL CONTENT -------------------------------------------------------------------
function CarouselContent({ className, ...props }) {
	const { carouselRef, orientation } = useCarousel();

	return (
		<div
			ref={carouselRef}
			className="overflow-hidden"
			data-slot="carousel-content"
		>
			<div
				className={cn(
					`flex ${carouselStyle.content}`,
					orientation === "horizontal"
						? "-px-4 w-full"
						: "-py-4 flex-col h-full",
					className,
				)}
				{...props}
			/>
		</div>
	);
}

// - CAROUSEL ITEM -------------------------------------------------------------------
function CarouselItem({ className, ...props }) {
	const { orientation } = useCarousel();

	return (
		<div
			role="group"
			aria-roledescription="slide"
			data-slot="carousel-item"
			className={cn(
				`overflow-hidden shrink-0 grow-0 ${carouselStyle.item} perfect-center`,
				orientation === "horizontal" ? "px-2" : "py-2",
				className,
			)}
			{...props}
		/>
	);
}

function CarouselPrevious({
	className,
	variant = "ghost",
	size = "icon",
	...props
}) {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();

	return (
		<Button
			data-slot="carousel-previous"
			color="neutral"
			variant={variant}
			size={size}
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			{...props}
			className={cn(
				"",
				orientation === "vertical" && "rotate-90",

				className,
			)}
		>
			<ArrowLeft size={20} strokeWidth={2} />
			<span className="sr-only">Previous slide</span>
		</Button>
	);
}

function CarouselNext({
	className,
	variant = "ghost",
	size = "icon",
	...props
}) {
	const { orientation, scrollNext, canScrollNext } = useCarousel();

	return (
		<Button
			data-slot="carousel-previous"
			color="neutral"
			variant={variant}
			size={size}
			disabled={!canScrollNext}
			onClick={scrollNext}
			{...props}
			className={cn("", orientation === "vertical" && "rotate-90", className)}
		>
			<ArrowRight size={20} strokeWidth={2} />
			<span className="sr-only">Next slide</span>
		</Button>
	);
}

export {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
};
