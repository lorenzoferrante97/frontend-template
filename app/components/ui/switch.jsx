"use client"

import * as SwitchPrimitive from "@radix-ui/react-switch"
// import * as React from "react"

import { cn } from "@/lib/utils"

const switchStyle = {
  root: "h-7 w-12 lg:h-6 lg:w-10 data-[state=checked]:bg-custom-primary-soft data-[state=unchecked]:bg-base-200 data-[state=unchecked]:border-base-300 border data-[state=checked]:border-transparent rounded-full",
  thumb:
    "bg-base-100 data-[state=checked]:bg-custom-primary-soft-content size-5 lg:size-4 rounded-full data-[state=unchecked]:shadow-xs data-[state=unchecked]:shadow-base-content/15",
}

function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer focus-state inline-flex shrink-0 items-center transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
        switchStyle.root,
        className
      )}
      data-slot='switch'
      {...props}>
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block transition-transform data-[state=checked]:translate-x-[calc(100%+2px)] data-[state=unchecked]:translate-x-[4px]",
          switchStyle.thumb
        )}
        data-slot='switch-thumb'
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
