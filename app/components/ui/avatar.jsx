"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

function Avatar({ className, ...props }) {
	return (
		<AvatarPrimitive.Root
			data-slot="avatar"
			className={cn(
				"relative perfect-center size-8 shrink-0 overflow-hidden rounded-full border-2 border-base-100",
				className,
			)}
			{...props}
		/>
	);
}

function AvatarImage({ className, ...props }) {
	return (
		<AvatarPrimitive.Image
			data-slot="avatar-image"
			className={cn("image-responsive", className)}
			{...props}
		/>
	);
}

function AvatarFallback({ className, ...props }) {
	return (
		<AvatarPrimitive.Fallback
			data-slot="avatar-fallback"
			className={cn(
				"bg-custom-neutral text-custom-neutral-content flex size-full perfect-center rounded-full",
				className,
			)}
			{...props}
		/>
	);
}

export { Avatar, AvatarImage, AvatarFallback };
