"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const checkboxStyle = {
	root: "border-custom-neutral-soft data-[state=checked]:bg-custom-primary data-[state=checked]:text-custom-primary-content data-[state=checked]:border-custom-primary size-4 rounded-sm not-dark:shadow-xs",
};

function Checkbox({ className, ...props }) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				`peer focus-state aria-invalid:ring-custom-error aria-invalid:border-custom-error shrink-0 border transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50 ${checkboxStyle.root}`,
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				data-slot="checkbox-indicator"
				className="perfect-center text-current transition-none"
			>
				<CheckIcon className="size-3.5" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}

export { Checkbox };
