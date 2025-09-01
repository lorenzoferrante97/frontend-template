import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center justify-center rounded-md border px-2 py-1 font-body-s-normal w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-state aria-invalid:ring-custom-error transition-colors overflow-hidden",
	{
		variants: {
			variant: {
				default:
					"border border-custom-neutral-soft text-base-soft-content [a&]:hover:border-custom-neutral [a&]:hover:underline",
				neutral:
					"border-transparent bg-custom-neutral-soft text-custom-neutral-soft-content [a&]:hover:bg-custom-neutral/75",
				primary:
					"border-transparent bg-custom-primary-soft text-custom-primary-soft-content [a&]:hover:bg-custom-primary/75",
				secondary:
					"border-transparent bg-custom-secondary-soft text-custom-secondary-soft-content [a&]:hover:bg-custom-secondary/75",
				accent:
					"border-transparent bg-custom-accent-soft text-custom-accent-soft-content [a&]:hover:bg-custom-accent/75",
				error:
					"border-transparent bg-custom-error-soft text-custom-error-soft-content [a&]:hover:bg-custom-error [a&]:hover:text-custom-error-content",
				warning:
					"border-transparent bg-custom-warning-soft text-custom-warning-soft-content [a&]:hover:bg-custom-warning [a&]:hover:text-custom-warning-content",
				success:
					"border-transparent bg-custom-success-soft text-custom-success-soft-content [a&]:hover:bg-custom-success [a&]:hover:text-custom-success-content",
				info: "border-transparent bg-custom-info-soft text-custom-info-soft-content [a&]:hover:bg-custom-info [a&]:hover:text-custom-info-content",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

function Badge({ className, variant, asChild = false, ...props }) {
	const Comp = asChild ? Slot : "span";

	return (
		<Comp
			data-slot="badge"
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
