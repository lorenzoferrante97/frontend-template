"use client"

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
// import * as React from "react"

import { cn } from "@/lib/utils"

const scrollAreaStyle = {
  scrollArea: "rounded-lg border border-base-300 p-4 overflow-hidden",
  viewport: "rounded-md",
  thumb: "bg-base-300",
}

function ScrollArea({ className, children, direction = "vertical", ...props }) {
  return (
    <ScrollAreaPrimitive.Root
      className={cn("relative", scrollAreaStyle.scrollArea, className)}
      data-slot='scroll-area'
      {...props}>
      <ScrollAreaPrimitive.Viewport
        className={cn(
          "focus-state *:h-full size-full transition-colors outline-none",
          scrollAreaStyle.viewport
        )}
        data-slot='scroll-area-viewport'>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation={direction} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({ className, orientation, ...props }) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2 border-l border-l-transparent",
        orientation === "horizontal" && "h-2 w-full flex-col border-t border-t-transparent",
        className
      )}
      data-slot='scroll-area-scrollbar'
      orientation={orientation}
      {...props}>
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cn("relative flex-1 rounded-full", scrollAreaStyle.thumb)}
        data-slot='scroll-area-thumb'
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
