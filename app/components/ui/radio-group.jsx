"use client"

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"
// import * as React from "react"

import { cn } from "@/lib/utils"

const radioGroupStyle = {
  item: "font-body-base-normal text-base-soft-content border bg-base-100 border-base-300 size-4 shadow-xs shadow-base-content/5 data-[state=checked]:bg-custom-primary-soft data-[state=checked]:border-transparent",
}

function RadioGroup({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      data-slot='radio-group'
      {...props}
    />
  )
}

function RadioGroupItem({ className, ...props }) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        "focus-state aria-invalid:ring-custom-error aria-invalid:border-custom-error-soft aspect-square shrink-0 rounded-full transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50",
        radioGroupStyle.item,
        className
      )}
      data-slot='radio-group-item'
      {...props}>
      <RadioGroupPrimitive.Indicator
        className='relative perfect-center'
        data-slot='radio-group-indicator'>
        <CircleIcon className='fill-custom-primary-soft-content' size={8} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
