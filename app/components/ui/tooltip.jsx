"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip"
// import * as React from "react"

import { cn } from "@/lib/utils"

const tooltipStyle = {
  content: "bg-base-300 text-base-soft-content rounded-md px-2 py-1 tfont-body-s-normal",
  arrow: "bg-base-300 fill-base-300 size-3 rounded-sm",
}

function TooltipProvider({ delayDuration = 0, ...props }) {
  return (
    <TooltipPrimitive.Provider
      data-slot='tooltip-provider'
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({ ...props }) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot='tooltip' {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({ ...props }) {
  return <TooltipPrimitive.Trigger data-slot='tooltip-trigger' {...props} />
}

function TooltipContent({ className, sideOffset = 0, children, ...props }) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={cn(
          "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) text-balance",
          tooltipStyle.content,
          className
        )}
        data-slot='tooltip-content'
        sideOffset={sideOffset}
        {...props}>
        {children}
        <TooltipPrimitive.Arrow
          className={`z-50 translate-y-[calc(-50%_-_2px)] rotate-45 ${tooltipStyle.arrow}`}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
