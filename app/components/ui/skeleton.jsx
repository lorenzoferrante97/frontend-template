import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("bg-base-300 animate-pulse rounded-md", className)}
      data-slot='skeleton'
      {...props}
    />
  )
}

export { Skeleton }
