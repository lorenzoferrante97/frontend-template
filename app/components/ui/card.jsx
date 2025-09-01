import { cn } from "@/lib/utils";

const cardStyle = {
	default:
		"bg-base-100 text-base-soft-content border border-base-300 rounded-lg not-dark:shadow-sm not-dark:shadow-base-content/5",
	title: "font-body-m-big text-base-content",
	description: "font-body-s-normal text-base-soft-content",
	header: "",
	footer: "",
};

// - CARD ROOT -------------------------------------------------------------------
function Card({ className, ...props }) {
	return (
		<div
			data-slot="card"
			className={cn(
				`flex flex-col p-2 items-stretch ${cardStyle.default}`,
				className,
			)}
			{...props}
		/>
	);
}

// - CARD HEADER -------------------------------------------------------------------
function CardHeader({ className, ...props }) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				`@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] px-2 py-4 ${cardStyle.header}`,
				className,
			)}
			{...props}
		/>
	);
}

// - CARD TITLE -------------------------------------------------------------------
function CardTitle({ className, ...props }) {
	return (
		<div
			data-slot="card-title"
			className={cn(`${cardStyle.title}`, className)}
			{...props}
		/>
	);
}

// - CARD DESCRIPTION -------------------------------------------------------------------
function CardDescription({ className, ...props }) {
	return (
		<div
			data-slot="card-description"
			className={cn(`${cardStyle.description}`, className)}
			{...props}
		/>
	);
}

// - CARD ACTION -------------------------------------------------------------------
function CardAction({ className, ...props }) {
	return (
		<div
			data-slot="card-action"
			className={cn(
				"col-start-2 row-span-2 row-start-1 self-start justify-self-end",
				className,
			)}
			{...props}
		/>
	);
}

// - CARD CONTENT -------------------------------------------------------------------
function CardContent({ className, ...props }) {
	return (
		<div data-slot="card-content" className={cn("", className)} {...props} />
	);
}

// - CARD FOOTER -------------------------------------------------------------------
function CardFooter({ className, ...props }) {
	return (
		<div
			data-slot="card-footer"
			className={cn(
				`flex flex-row-reverse items-center p-2 ${cardStyle.footer}`,
				className,
			)}
			{...props}
		/>
	);
}

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardAction,
	CardDescription,
	CardContent,
};
