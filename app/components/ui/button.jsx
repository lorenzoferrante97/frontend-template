"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// button styles
const buttonStyle = {
	default: "rounded-full font-body-base-big lg:hover:cursor-pointer",
	neutral: {
		default:
			"bg-custom-neutral text-custom-neutral-content lg:hover:bg-custom-neutral/75 lg:hover:text-white lg:hover:dark:text-black",
		secondary:
			"bg-custom-neutral-soft text-custom-neutral-soft-content lg:hover:bg-custom-neutral-soft/75 lg:hover:text-black lg:hover:dark:text-white",
		ghost: "text-custom-neutral lg:hover:text-black lg:hover:dark:text-white",
		link: "text-custom-neutral lg:hover:text-black lg:hover:dark:text-white",
	},
	primary: {
		default:
			"bg-custom-primary text-custom-primary-content lg:hover:bg-custom-primary/75 lg:hover:text-white lg:hover:dark:text-black",
		secondary:
			"bg-custom-primary-soft text-custom-primary-soft-content lg:hover:bg-custom-primary-soft/75 lg:hover:text-black lg:hover:dark:text-white",
		ghost: "text-custom-primary lg:hover:text-black lg:hover:dark:text-white",
		link: "text-custom-primary lg:hover:text-black lg:hover:dark:text-white",
	},
	secondary: {
		default:
			"bg-custom-secondary text-custom-secondary-content lg:hover:bg-custom-secondary/75 lg:hover:text-white lg:hover:dark:text-black",
		secondary:
			"bg-custom-secondary-soft text-custom-secondary-soft-content lg:hover:bg-custom-secondary-soft/75 lg:hover:text-black lg:hover:dark:text-white",
		ghost: "text-custom-secondary lg:hover:text-black lg:hover:dark:text-white",
		link: "text-custom-secondary lg:hover:text-black lg:hover:dark:text-white",
	},
	accent: {
		default:
			"bg-custom-accent text-custom-accent-content lg:hover:bg-custom-accent/75 lg:hover:text-white lg:hover:dark:text-black",
		secondary:
			"bg-custom-accent-soft text-custom-accent-soft-content lg:hover:bg-custom-accent-soft/75 lg:hover:text-black lg:hover:dark:text-white",
		ghost: "text-custom-accent lg:hover:text-black lg:hover:dark:text-white",
		link: "text-custom-accent lg:hover:text-black lg:hover:dark:text-white",
	},
	error: {
		default:
			"bg-custom-error text-custom-error-content lg:hover:bg-custom-error/75 lg:hover:text-white lg:hover:dark:text-black",
		secondary:
			"bg-custom-error-soft text-custom-error-soft-content lg:hover:bg-custom-error-soft/75 lg:hover:text-black lg:hover:dark:text-white",
		ghost: "text-custom-error lg:hover:text-black lg:hover:dark:text-white",
		link: "text-custom-error lg:hover:text-black lg:hover:dark:text-white",
	},
};

const buttonVariants = cva(
	`max-sm:w-full inline-flex perfect-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-state aria-invalid:ring-custom-error aria-invalid:border-custom-error-soft ${buttonStyle.default}`,
	{
		variants: {
			variant: {
				default: "not-dark:shadow-lg",
				secondary: "",
				ghost: "lg:hover:underline lg:hover:underline-offset-4",
				link: "underline-offset-4 underline hover:underline-offset-1",
			},
			size: {
				default: "max-lg:min-h-12 px-4 py-2",
				sm: "max-lg:min-h-10 px-2 max-lg:py-0 py-1 font-body-s-big",
				lg: "max-lg:min-h-12 px-6 py-3",
				icon: "w-fit aspect-square p-2 max-lg:min-w-12 max-sm:w-fit",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant,
	size,
	color,
	asChild = false,
	...props
}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={`${cn(buttonVariants({ variant, size, className }))} ${buttonStyle[color][variant]}`}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
