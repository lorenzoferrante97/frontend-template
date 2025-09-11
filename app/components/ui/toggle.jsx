"use client"

// import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleStyle =
  "gap-2 rounded-md font-body-s-normal data-[state=on]:bg-custom-primary-soft data-[state=on]:text-custom-primary-soft-content hover:font-body-s-big data-[state=on]:font-body-s-big"

const toggleVariants = cva(
  `perfect-center disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus-state outline-none transition-colors aria-invalid:ring-custom-error aria-invalid:border-custom-error-soft whitespace-nowrap ${toggleStyle}`,
  {
    variants: {
      variant: {
        default: "bg-base-100 text-base-content-soft hover:bg-base-300 hover:text-base-content",
        outline:
          "border border-base-300 hover:border-transparent bg-base-100 hover:bg-base-300 text-base-content-soft hover:text-base-content",
        filled: "bg-base-200 hover:bg-base-300 border border-base-300 hover:text-base-content",
      },
      size: {
        default: "h-fit min-w-10 px-3 py-2",
        sm: "h-fit min-w-8 p-1",
        lg: "h-fit min-w-12 px-4 py-2",
        square: "aspect-square min-w-10 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({ className, variant, size, ...props }) {
  return (
    <TogglePrimitive.Root
      className={cn(toggleVariants({ variant, size, className }))}
      data-slot='toggle'
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
