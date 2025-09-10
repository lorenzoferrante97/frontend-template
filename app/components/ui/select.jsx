"use client"

import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
// import * as React from "react"

import { cn } from "@/lib/utils"

const selectStyle = {
  trigger:
    "border border-base-300 data-[placeholder]:text-base-soft-content/75 bg-base-100 hover:border-base-content transition-colors rounded-md max-lg:min-h-12 data-[size=default]:h-10 data-[size=sm]:h-8 font-body-s-normal not-dark:shadow-xs not-dark:shadow-base-content/5",
  content:
    "bg-base-200 text-base-soft-content border border-base-300 min-w-32 rounded-md not-dark:shadow-md not-dark:shadow-base-content/10",
  item: "focus:bg-custom-primary-soft focus:text-custom-primary-soft-content gap-2 rounded-sm px-2 py-1 font-body-base-normal max-lg:min-h-10 transition-colors",
  separator: "bg-base-300",
  label: "bg-base-300 font-body-s-big text-base-content rounded-sm",
}

function Select({ ...props }) {
  return <SelectPrimitive.Root data-slot='select' {...props} />
}

function SelectGroup({ ...props }) {
  return <SelectPrimitive.Group className='not-last:mb-2' data-slot='select-group' {...props} />
}

function SelectValue({ ...props }) {
  return <SelectPrimitive.Value data-slot='select-value' {...props} />
}

function SelectTrigger({ className, size = "default", children, ...props }) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "focus-state aria-invalid:ring-custom-error aria-invalid:border-custom-error-soft flex w-fit items-center justify-between gap-2 px-3 py-1 whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        selectStyle.trigger,
        className
      )}
      data-size={size}
      data-slot='select-trigger'
      {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className='text-base-soft-content/75' size={16} strokeWidth={2} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({ className, children, position = "popper", ...props }) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          selectStyle.content,
          className
        )}
        data-slot='select-content'
        position={position}
        {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({ className, ...props }) {
  return (
    <SelectPrimitive.Label
      className={cn("px-2 py-1.5", selectStyle.label, className)}
      data-slot='select-label'
      {...props}
    />
  )
}

function SelectItem({ className, children, ...props }) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        selectStyle.item,
        className
      )}
      data-slot='select-item'
      {...props}>
      <span className='absolute right-2 perfect-center'>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon size={16} strokeWidth={2} />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({ className, ...props }) {
  return (
    <SelectPrimitive.Separator
      className={cn("pointer-events-none -mx-1 my-1 h-px", selectStyle.separator, className)}
      data-slot='select-separator'
      {...props}
    />
  )
}

function SelectScrollUpButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn("perfect-center cursor-default py-1", className)}
      data-slot='select-scroll-up-button'
      {...props}>
      <ChevronUpIcon size={16} />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn("perfect-center cursor-default py-1", className)}
      data-slot='select-scroll-down-button'
      {...props}>
      <ChevronDownIcon size={16} />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
