/** biome-ignore-all lint/a11y/useSemanticElements: current page */

import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

function Breadcrumb({ ...props }) {
	return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }) {
	return (
		<ol
			data-slot="breadcrumb-list"
			className={cn(
				"text-base-soft-content/80 flex flex-wrap items-center gap-1 font-body-s-normal break-words md:gap-2",
				className,
			)}
			{...props}
		/>
	);
}

function BreadcrumbItem({ className, ...props }) {
	return (
		<li
			data-slot="breadcrumb-item"
			className={cn("inline-flex items-center gap-1", className)}
			{...props}
		/>
	);
}

function BreadcrumbLink({ asChild, className, ...props }) {
	const Comp = asChild ? Slot : "a";

	return (
		<Comp
			data-slot="breadcrumb-link"
			className={cn(
				"lg:hover:text-base-content lg:hover:underline lg:hover:underline-offset-4 transition-colors",
				className,
			)}
			{...props}
		/>
	);
}

function BreadcrumbPage({ className, ...props }) {
	return (
		<a
			data-slot="breadcrumb-page"
			role="link"
			aria-disabled="true"
			aria-current="page"
			className={cn("text-base-content font-body-s-big", className)}
			{...props}
		/>
	);
}

function BreadcrumbSeparator({ children, className, ...props }) {
	return (
		<li
			data-slot="breadcrumb-separator"
			role="presentation"
			aria-hidden="true"
			className={cn("", className)}
			{...props}
		>
			{children ?? <ChevronRight size={12} strokeWidth={2} />}
		</li>
	);
}

function BreadcrumbMore({ className, ...props }) {
	return (
		<span
			data-slot="breadcrumb-ellipsis"
			role="presentation"
			aria-hidden="true"
			className={cn("perfect-center", className)}
			{...props}
		>
			<MoreHorizontal size={12} strokeWidth={2} />
			<span className="sr-only">More</span>
		</span>
	);
}

export {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
	BreadcrumbMore,
};
