// import * as React from "react"

import { cn } from "@/lib/utils"

const textareaStyle =
  "bg-base-100 border border-base-300 placeholder:bg-base-soft-content/75 min-h-16 w-full rounded-md px-3 py-2 font-body-base-normal text-base-soft-content selection:bg-custom-secondary-soft selection:text-custom-secondary-soft-content"

function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "focus-state aria-invalid:ring-custom-error aria-invalid:border-custom-error-soft flex field-sizing-content transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50",
        textareaStyle,
        className
      )}
      data-slot='textarea'
      {...props}
    />
  )
}

export { Textarea }
