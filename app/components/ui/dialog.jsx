"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const dialogStyle = {
	overlay: "bg-base-200/50 backdrop-blur-sm",
	content:
		"bg-base-100 border border-base-300 rounded-md md:rounded-lg p-2 md:p-4 not-dark:shadow-lg sm:max-w-[80%] md:max-w-[68%] lg:max-w-[50%]",
	close:
		"text-base-soft-content focus-state rounded-full hover:bg-base-200 p-2 hover:text-base-content transition-colors",
	title: "font-body-m-big text-base-content",
	description: "font-body-s-normal text-base-soft-content",
};

// - DIALOG ROOT --------------------------------------------------------------------------
function Dialog({ ...props }) {
	return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

// - DIALOG TRIGGER --------------------------------------------------------------------------
function DialogTrigger({ ...props }) {
	return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

// - DIALOG PORTAL --------------------------------------------------------------------------
function DialogPortal({ ...props }) {
	return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

// - DIALOG CLOSE --------------------------------------------------------------------------
function DialogClose({ ...props }) {
	return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

// - DIALOG OVERLAY --------------------------------------------------------------------------
function DialogOverlay({ className, ...props }) {
	return (
		<DialogPrimitive.Overlay
			data-slot="dialog-overlay"
			className={cn(
				`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 ${dialogStyle.overlay}`,
				className,
			)}
			{...props}
		/>
	);
}

// - DIALOG CONTENT --------------------------------------------------------------------------
function DialogContent({
	className,
	children,
	showCloseButton = true,
	...props
}) {
	return (
		<DialogPortal data-slot="dialog-portal">
			<DialogOverlay />
			<DialogPrimitive.Content
				data-slot="dialog-content"
				className={cn(
					`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 duration-200 ${dialogStyle.content}`,
					className,
				)}
				{...props}
			>
				{children}
				{showCloseButton && (
					<DialogPrimitive.Close
						data-slot="dialog-close"
						className={`absolute top-2 right-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 ${dialogStyle.close}`}
					>
						<XIcon size={16} strokeWidth={2} />
						<span className="sr-only">Close</span>
					</DialogPrimitive.Close>
				)}
			</DialogPrimitive.Content>
		</DialogPortal>
	);
}

// - DIALOG HEADER --------------------------------------------------------------------------
function DialogHeader({ className, ...props }) {
	return (
		<div
			data-slot="dialog-header"
			className={cn("flex flex-col gap-1", className)}
			{...props}
		/>
	);
}

// - DIALOG FOOTER --------------------------------------------------------------------------
function DialogFooter({ className, ...props }) {
	return (
		<div
			data-slot="dialog-footer"
			className={cn("flex flex-row-reverse gap-2", className)}
			{...props}
		/>
	);
}

// - DIALOG TITLE --------------------------------------------------------------------------
function DialogTitle({ className, ...props }) {
	return (
		<DialogPrimitive.Title
			data-slot="dialog-title"
			className={cn(`${dialogStyle.title}`, className)}
			{...props}
		/>
	);
}

// - DIALOG DESCRIPTION --------------------------------------------------------------------------
function DialogDescription({ className, ...props }) {
	return (
		<DialogPrimitive.Description
			data-slot="dialog-description"
			className={cn(`${dialogStyle.description}`, className)}
			{...props}
		/>
	);
}

export {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
};
