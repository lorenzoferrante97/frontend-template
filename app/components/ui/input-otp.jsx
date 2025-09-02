"use client"

import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"
import { useContext } from "react"

import { cn } from "@/lib/utils"

const inputOtpStyle = {
  group: "p-2 rounded-lg bg-base-200 perfect-center gap-1",
  slot: "focus-state data-[active=true]:ring-2 data-[active=true]:not-dark:shadow-md data-[active=true]:not-dark:shadow-base-content/10 bg-base-100 dark:bg-base-300 border dark:border-custom-neutral-soft border-base-300 size-10 lg:size-12 font-body-l-big rounded-md text-base-soft-content",
  fakeCaret: "bg-base-soft-content rounded-full h-4 w-[2px]",
}

// - INPUT OTP ROOT ------------------------------------------------------
function InputOTP({ className, containerClassName, ...props }) {
  return (
    <OTPInput
      className={cn("disabled:cursor-not-allowed", className)}
      containerClassName={cn("flex items-center gap-2 has-disabled:opacity-50", containerClassName)}
      data-slot='input-otp'
      {...props}
    />
  )
}

// - INPUT OTP GROUP ------------------------------------------------------
function InputOTPGroup({ className, ...props }) {
  return (
    <div
      className={cn(`${inputOtpStyle.group}`, className)}
      data-slot='input-otp-group'
      {...props}
    />
  )
}

// - INPUT OTP SLOT ------------------------------------------------------
function InputOTPSlot({ index, className, ...props }) {
  const inputOTPContext = useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      className={cn(
        `data-[active=true]:aria-invalid:ring-custom-error aria-invalid:border-custom-error-soft data-[active=true]:aria-invalid:border-custom-error relative perfect-center transition-all outline-none data-[active=true]:z-10 ${inputOtpStyle.slot}`,
        className
      )}
      data-active={isActive}
      data-slot='input-otp-slot'
      {...props}>
      {char}
      {hasFakeCaret && (
        <div className='pointer-events-none absolute inset-0 perfect-center'>
          <div className={`animate-caret-blink duration-1000 ${inputOtpStyle.fakeCaret}`} />
        </div>
      )}
    </div>
  )
}

// - INPUT OTP SEPARATOR ------------------------------------------------------
function InputOTPSeparator({ ...props }) {
  return (
    // biome-ignore lint/a11y/useFocusableInteractive: separator
    // biome-ignore lint/a11y/useSemanticElements: custom separator
    // biome-ignore lint/a11y/useAriaPropsForRole: custom separator
    <div data-slot='input-otp-separator' role='separator' {...props}>
      <MinusIcon className='text-base-soft-content' size={20} strokeWidth={2} />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
