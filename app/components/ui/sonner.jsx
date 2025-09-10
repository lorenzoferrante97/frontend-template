"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      className='toaster group'
      style={{
        "--normal-bg": "var(--color-base-100)",
        "--normal-text": "var(--color-base-content-soft)",
        "--normal-border": "var(--color-base-300)",
      }}
      theme={theme}
      {...props}
    />
  )
}

export { Toaster }
