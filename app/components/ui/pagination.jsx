import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"
import * as React from "react"
import { Button } from "@/app/components/ui/button"
import { cn } from "@/lib/utils"

const paginationStyle = {
  previousNext:
    "min-h-10 rounded-md bg-base-200 border border-base-300 disabled:opacity-50 hover:bg-base-300 hover:text-base-content transition-colors mx-2",
  activePage: "rounded-full bg-custom-neutral text-custom-neutral-content",
}

function Pagination({ className, ...props }) {
  return (
    <nav
      aria-label='pagination'
      className={cn("w-full perfect-center", className)}
      data-slot='pagination'
      // role='navigation'
      {...props}
    />
  )
}

function PaginationContent({ className, ...props }) {
  return (
    <ul
      className={cn("w-full perfect-center gap-1", className)}
      data-slot='pagination-content'
      {...props}
    />
  )
}

function PaginationItem({ ...props }) {
  return <li className='perfect-center' data-slot='pagination-item' {...props} />
}

function PaginationLink({ className, isActive, size = "icon", ...props }) {
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={`inline-flex w-fit font-body-s-big text-base-soft-content perfect-center max-lg:min-w-10 min-w-5 gap-1 ${size === "icon" ? "aspect-square" : undefined} ${className} $`}
      data-active={isActive}
      data-slot='pagination-link'
      {...props}
    />
  )
}

function PaginationPrevious({ className, ...props }) {
  return (
    <PaginationLink
      aria-label='Pagina precedente'
      className={cn(
        "h-10 sm:h-fit sm:pr-2 sm:pl-1 sm:py-1",
        paginationStyle.previousNext,
        className
      )}
      size='default'
      {...props}>
      <ChevronLeftIcon size={16} strokeWidth={2} />
      <span className='hidden sm:block'>Indietro</span>
    </PaginationLink>
  )
}

function PaginationNext({ className, ...props }) {
  return (
    <PaginationLink
      aria-label='Go to next page'
      className={cn(
        "h-10 sm:h-fit sm:pr-1 sm:pl-2 sm:py-1",
        paginationStyle.previousNext,
        className
      )}
      size='default'
      {...props}>
      <span className='hidden sm:block'>Avanti</span>
      <ChevronRightIcon size={16} strokeWidth={2} />
    </PaginationLink>
  )
}

function PaginationEllipsis({ className, ...props }) {
  return (
    <span
      aria-hidden
      className={cn(
        "perfect-center inline-flex w-fit max-lg:min-w-10 min-w-5 aspect-square",
        className
      )}
      data-slot='pagination-ellipsis'
      {...props}>
      <MoreHorizontalIcon size={16} />
      <span className='sr-only'>Altre pagine</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
