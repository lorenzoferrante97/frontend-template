import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg px-4 py-3 grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-custom-neutral-soft text-custom-neutral-soft-content",
        error:
          "text-black dark:text-white bg-custom-error-soft *:data-[slot=alert-description]:text-custom-error-soft-content",
        warning:
          "text-black dark:text-white bg-custom-warning-soft *:data-[slot=alert-description]:text-custom-warning-soft-content",
        success:
          "text-black dark:text-white bg-custom-success-soft *:data-[slot=alert-description]:text-custom-success-soft-content",
        info: "text-black dark:text-white bg-custom-info-soft *:data-[slot=alert-description]:text-custom-info-soft-content",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// - ALERT ROOT --------------------------------------------------------------------
function Alert({ className, variant, ...props }) {
  return (
    <div
      className={cn(alertVariants({ variant }), className)}
      data-slot='alert'
      role='alert'
      {...props}
    />
  )
}

// - ALERT TITLE --------------------------------------------------------------------
function AlertTitle({ className, ...props }) {
  return (
    <div
      className={cn("col-start-2 line-clamp-1 min-h-4 font-body-base-big", className)}
      data-slot='alert-title'
      {...props}
    />
  )
}

// - ALERT DESCRIPTION --------------------------------------------------------------------
function AlertDescription({ className, ...props }) {
  return (
    <div
      className={cn("col-start-2 grid justify-items-start gap-1 font-body-s-normal", className)}
      data-slot='alert-description'
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
