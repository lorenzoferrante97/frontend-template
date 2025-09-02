"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const hoverCardStyle = {
	content:
		"bg-base-200 text-base-soft-content font-body-s-normal border border-base-300 shadow-sm shadow-base-content/5 w-64 rounded-md p-2",
};

// - HOVER CARD ROOT -------------------------------------------------------------
function HoverCard({ ...props }) {
	return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

// - HOVER CARD TRIGGER -------------------------------------------------------------
function HoverCardTrigger({ ...props }) {
	return (
		<HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
	);
}

// - HOVER CARD CONTENT -------------------------------------------------------------
function HoverCardContent({
	className,
	align = "center",
	sideOffset = 4,
	...props
}) {
	return (
		<HoverCardPrimitive.Portal data-slot="hover-card-portal">
			<HoverCardPrimitive.Content
				data-slot="hover-card-content"
				align={align}
				sideOffset={sideOffset}
				className={cn(
					`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 origin-(--radix-hover-card-content-transform-origin) outline-hidden ${hoverCardStyle.content}`,
					className,
				)}
				{...props}
			/>
		</HoverCardPrimitive.Portal>
	);
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
