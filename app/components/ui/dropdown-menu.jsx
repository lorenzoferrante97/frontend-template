"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

// - styles -----------------
const dropdownStyle = {
	label: "font-body-s-big text-base-content-soft bg-base-300 rounded-sm mb-2",
	content:
		"bg-base-200 text-base-content-soft border-base-300 not-dark:shadow-base-content/10",
	item: "transition-colors rounded-sm focus:bg-custom-primary-soft focus:font-body-s-big focus:text-custom-primary-content-soft font-body-s-normal",
};

// - component --------------

// - DROPDOWN ROOT --------------------------------------------------------------------
function DropdownMenu({ ...props }) {
	return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

// - DROPDOWN PORTAL --------------------------------------------------------------------
function DropdownMenuPortal({ ...props }) {
	return (
		<DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
	);
}

// - DROPDOWN TRIGGER --------------------------------------------------------------------
function DropdownMenuTrigger({ ...props }) {
	return (
		<DropdownMenuPrimitive.Trigger
			data-slot="dropdown-menu-trigger"
			{...props}
		/>
	);
}

// - DROPDOWN CONTENT --------------------------------------------------------------------
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
	return (
		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.Content
				data-slot="dropdown-menu-content"
				sideOffset={sideOffset}
				className={cn(
					`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-52 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 not-dark:shadow-md ${dropdownStyle.content}`,
					className,
				)}
				{...props}
			/>
		</DropdownMenuPrimitive.Portal>
	);
}

// - DROPDOWN MENU GROUP --------------------------------------------------------------------
function DropdownMenuGroup({ ...props }) {
	return (
		<DropdownMenuPrimitive.Group
			className="mb-1"
			data-slot="dropdown-menu-group"
			{...props}
		/>
	);
}

// - DROPDOWN MENU ITEM --------------------------------------------------------------------
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return (
		<DropdownMenuPrimitive.Item
			data-slot="dropdown-menu-item"
			data-inset={inset}
			data-variant={variant}
			className={cn(
				`data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 px-2 py-1 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 max-lg:min-h-12 ${dropdownStyle.item}`,
				className,
			)}
			{...props}
		/>
	);
}

// - DROPDOWN LABEL --------------------------------------------------------------------
function DropdownMenuLabel({ className, inset, ...props }) {
	return (
		<DropdownMenuPrimitive.Label
			data-slot="dropdown-menu-label"
			data-inset={inset}
			className={cn(`p-2 ${dropdownStyle.label} data-[inset]:pl-8`, className)}
			{...props}
		/>
	);
}

// - DROPDOWN SEPARATOR --------------------------------------------------------------------
function DropdownMenuSeparator({ className, ...props }) {
	return (
		<DropdownMenuPrimitive.Separator
			data-slot="dropdown-menu-separator"
			className={cn("bg-border h-px", className)}
			{...props}
		/>
	);
}

export {
	DropdownMenu,
	DropdownMenuPortal,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuSeparator,
};
