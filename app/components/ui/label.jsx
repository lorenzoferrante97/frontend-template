"use client";

import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

const labelStyle = {
	default: "font-body-base-normal text-base-content",
};

function Label({ className, ...props }) {
	return (
		<LabelPrimitive.Root
			data-slot="label"
			className={cn(
				`flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 ${labelStyle.default}`,
				className,
			)}
			{...props}
		/>
	);
}

export { Label };
