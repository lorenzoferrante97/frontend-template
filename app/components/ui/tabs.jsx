"use client"

// import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const tabsStyle = {
  list: "bg-base-200 border border-base-300 rounded-full p-1 max-md:flex-col max-md:w-full max-md:*:w-full max-md:rounded-lg max-md:*:rounded-md max-md:p-2",
  trigger:
    "data-[state=active]:bg-base-100 rounded-full px-3 py-2 max-lg:min-h-12 font-body-base-normal text-base-content data-[state=active]:shadow-sm data-[state=active]:shadow-base-content/10",
  content: "bg-base-200 border border-base-300 py-2 px-4 rounded-lg",
}

function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      className={cn("flex flex-col gap-2", className)}
      data-slot='tabs'
      {...props}
    />
  )
}

function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      className={cn("perfect-center w-fit", tabsStyle.list, className)}
      data-slot='tabs-list'
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "perfect-center flex-1 gap-1 whitespace-nowrap transition-colors focus-state disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        tabsStyle.trigger,
        className
      )}
      data-slot='tabs-trigger'
      {...props}
    />
  )
}

function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      className={cn("flex-1 outline-none", tabsStyle.content, className)}
      data-slot='tabs-content'
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
