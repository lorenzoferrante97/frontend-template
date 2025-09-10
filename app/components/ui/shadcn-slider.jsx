"use client"

import * as SliderPrimitive from "@radix-ui/react-slider"
// import * as React from "react"
import { useMemo } from "react"

import { cn } from "@/lib/utils"

const sliderStyle = {
  root: "h-fit",
  track:
    "data-[orientation=horizontal]:h-2 bg-base-300 rounded-full data-[orientation=horizontal]:w-full",
  range: "bg-custom-primary-soft data-[orientation=horizontal]:h-full",
  thumb: "bg-custom-primary-soft-content size-4 rounded-full hover:scale-110",
  label: "font-body-s-normal text-base-soft-content select-none",
  value:
    "absolute -top-6 left-1/2 -translate-x-1/2 bg-base-100 px-2 py-1 rounded-full shadow font-body-base-normal text-base-content",
}

// function SliderMinLabel({ min, className }) {
//   return <span className={cn(sliderStyle.label, className)}>{min}</span>
// }

// function SliderMaxLabel({ max, className }) {
//   return <span className={cn(sliderStyle.label, className)}>{max}</span>
// }

// function SliderValue({ value, className }) {
//   return <span className={cn(sliderStyle.value, className)}>{value}</span>
// }

function Slider({ className, defaultValue, value, min = 0, max = 100, onValueChange, ...props }) {
  const _values = useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max]
  )

  const current = value ? value[0] : defaultValue ? defaultValue[0] : min

  return (
    <div className='w-full flex flex-col'>
      {/* <div className='flex justify-between mb-2'>
        <SliderMinLabel min={min} />
        <SliderMaxLabel max={max} />
      </div> */}
      <SliderPrimitive.Root
        className={cn(
          "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
          sliderStyle.root,
          className
        )}
        data-slot='slider'
        defaultValue={defaultValue}
        max={max}
        min={min}
        onValueChange={onValueChange}
        value={value}
        {...props}>
        <SliderPrimitive.Track
          className={cn(
            "relative grow overflow-hidden data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
            sliderStyle.track
          )}
          data-slot='slider-track'>
          <SliderPrimitive.Range
            className={cn("absolute data-[orientation=vertical]:w-full", sliderStyle.range)}
            data-slot='slider-range'
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            className={cn(
              "block shrink-0 transition-colors focus-state focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
              sliderStyle.thumb
            )}
            data-slot='slider-thumb'
            // biome-ignore lint/suspicious/noArrayIndexKey: no id
            key={index}
          />
        ))}
      </SliderPrimitive.Root>
    </div>
  )
}

export { Slider }
