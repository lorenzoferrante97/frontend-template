"use client"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
// import * as React from "react"
import { createContext, useContext } from "react"
import { toggleVariants } from "@/app/components/ui/toggle"
import { cn } from "@/lib/utils"

const ToggleGroupContext = createContext({
  size: "default",
  variant: "default",
})

const toggleGroupStyle = {
  group: "overflow-hidden",
  item: "rounded-none shadow-none first:rounded-l-md last:rounded-r-md first:border-r-0 last:border-l-0",
  customFilledGroup: "bg-base-200 p-1 border border-base-300 rounded-md gap-px",
  customFilledItem:
    "bg-transparent border-0 data-[state=on]:bg-base-100 rounded-sm data-[state=on]:rounded-sm data-[state=on]:shadow-xs data-[state=on]:shadow-base-content/15",
}

function ToggleGroup({ className, variant, size, children, ...props }) {
  return (
    <ToggleGroupPrimitive.Root
      className={cn(
        "group/toggle-group flex w-fit items-center",
        toggleGroupStyle.group,
        `${variant === "filled" && toggleGroupStyle.customFilledGroup}`,
        className
      )}
      data-size={size}
      data-slot='toggle-group'
      data-variant={variant}
      {...props}>
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({ className, children, variant, size, ...props }) {
  const context = useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        `min-w-0 flex-1 shrink-0 focus:z-10 focus-visible:z-10 ${variant === "filled" || context.variant === "filled" ? toggleGroupStyle.customFilledItem : toggleGroupStyle.item}`,
        className
      )}
      data-size={context.size || size}
      data-slot='toggle-group-item'
      data-variant={context.variant || variant}
      {...props}>
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }
