"use client"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { PanelLeftIcon } from "lucide-react"
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Separator } from "@/app/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/app/components/ui/sheet"
import { Skeleton } from "@/app/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

// - STYLES ------------------------------------------------------------------
const sidebarStyle = {
  tooltipProvider: "has-data-[variant=inset]:bg-base-300",
  sidebarNotCollapsible: "bg-base-300",
  sidebar: "bg-transparent text-base-soft-content",
  sidebarInner:
    "bg-base-200 group-data-[variant=floating]:border group-data-[variant=floating]:border-base-300 group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-lg group-data-[variant=floating]:shadow-base-content/20 overflow-hidden",
  sidebarInset: "",
  sidebarHeader: "p-2 gap-2",
  sidebarFooter: "p-2 gap-2",
  sidebarSeparator: "bg-base-300 mx-2",
  sidebarContent: "gap-2",
  sidebarGroup: " flex-col p-2",
  sidebarGroupLabel: "text-base-soft-content p-2 font-body-s-normal",
  sidebarMenu: "gap-2",
  sidebarMenuSub: "bg-base-300 gap-1 py-2 rounded-md",
}

// - COOKIES -----------------------------------------------------------------
const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
// - SIDEBAR WIDTH -----------------------------------------------------------------
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
// - SHORTCUT -----------------------------------------------------------------
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

const SidebarContext = createContext(null)

// - USE SIDEBAR -----------------------------------------------------------------
function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

// - SIDEBAR PROVIDER -----------------------------------------------------------------
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      // biome-ignore lint/suspicious/noDocumentCookie: cookies by shadcn
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // - TOGGLE SIDEBAR ---------------------------------------------------------------
  // Helper to toggle the sidebar.
  // biome-ignore lint/correctness/useExhaustiveDependencies: setOpenMobile
  const toggleSidebar = useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // - USE EFFECT ---------------------------------------------------------------
  // Adds a keyboard shortcut to toggle the sidebar.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // - OPEN STATE ---------------------------------------------------------------
  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  // biome-ignore lint/correctness/useExhaustiveDependencies: setOpenMobile
  const contextValue = useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          className={cn(
            "group/sidebar-wrapper flex min-h-svh w-full",
            sidebarStyle.tooltipProvider,
            className
          )}
          data-slot='sidebar-wrapper'
          style={{
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          }}
          {...props}>
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

// - SIDEBAR -------------------------------------------------------------------
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  // - SIDEBAR NOT COLLAPSIBLE -------------------------------------------------------------------
  if (collapsible === "none") {
    return (
      <div
        className={cn(
          "flex h-full w-(--sidebar-width) flex-col",
          sidebarStyle.sidebarNotCollapsible,
          className
        )}
        data-slot='sidebar'
        {...props}>
        {children}
      </div>
    )
  }

  // - SIDEBAR MOBILE -------------------------------------------------------------------
  if (isMobile) {
    return (
      <Sheet onOpenChange={setOpenMobile} open={openMobile} {...props}>
        <SheetContent
          // className='bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden'
          className='w-(--sidebar-width) [&>button]:hidden'
          data-mobile='true'
          data-sidebar='sidebar'
          data-slot='sidebar'
          side={side}
          style={{
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
          }}>
          <SheetHeader className='sr-only'>
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Mostra la sidebar su mobile</SheetDescription>
          </SheetHeader>
          <div className='flex h-full w-full flex-col'>{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  // - SIDEBAR DEFAULT ----------------------------------------------------------------
  return (
    <div
      className={`group peer hidden md:block ${sidebarStyle.sidebar}`}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-side={side}
      data-slot='sidebar'
      data-state={state}
      data-variant={variant}>
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )}
        data-slot='sidebar-gap'
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        data-slot='sidebar-container'
        {...props}>
        <div
          className={`flex h-full w-full flex-col ${sidebarStyle.sidebarInner}`}
          data-sidebar='sidebar'
          data-slot='sidebar-inner'>
          {children}
        </div>
      </div>
    </div>
  )
}

// ANCHOR SIDEBAR TRIGGER ---------------------------------------------------------------
function SidebarTrigger({ className, onClick, ...props }) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      color='neutral'
      data-sidebar='trigger'
      data-slot='sidebar-trigger'
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      size='icon'
      variant='ghost'
      {...props}>
      <PanelLeftIcon size={20} strokeWidth={2} />
      <span className='sr-only'>Toggle Sidebar</span>
    </Button>
    // <Button
    //   className={cn("size-7", className)}
    //   data-sidebar='trigger'
    //   data-slot='sidebar-trigger'
    //   onClick={(event) => {
    //     onClick?.(event)
    //     toggleSidebar()
    //   }}
    //   size='icon'
    //   variant='ghost'
    //   {...props}>
    //   <PanelLeftIcon />
    //   <span className='sr-only'>Toggle Sidebar</span>
    // </Button>
  )
}

// ANCHOR SIDEBAR RAIL ---------------------------------------------------------------
// bordo esterno che funge da button per apertura / chiusura
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      aria-label='Toggle Sidebar'
      className={cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      data-sidebar='rail'
      data-slot='sidebar-rail'
      onClick={toggleSidebar}
      tabIndex={-1}
      title='Toggle Sidebar'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR INSET ---------------------------------------------------------------
function SidebarInset({ className, ...props }) {
  return (
    <main
      className={cn(
        "relative flex w-full flex-1 flex-col",
        // "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        sidebarStyle.sidebarInset,
        className
      )}
      data-slot='sidebar-inset'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR INPUT ---------------------------------------------------------------
function SidebarInput({ className, ...props }) {
  return (
    // <Input
    //   className={cn("bg-background h-8 w-full shadow-none", className)}
    //   data-sidebar='input'
    //   data-slot='sidebar-input'
    //   {...props}
    // />
    <Input
      data-sidebar='input'
      data-slot='sidebar-input'
      placeholder='Scrivi qui...'
      type='text'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR HEADER ---------------------------------------------------------------
function SidebarHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col", sidebarStyle.sidebarHeader, className)}
      data-sidebar='header'
      data-slot='sidebar-header'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR FOOTER ---------------------------------------------------------------
function SidebarFooter({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col", sidebarStyle.sidebarFooter, className)}
      data-sidebar='footer'
      data-slot='sidebar-footer'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR SEPARATOR ---------------------------------------------------------------
function SidebarSeparator({ className, ...props }) {
  return (
    <Separator
      className={cn("w-auto", sidebarStyle.sidebarSeparator, className)}
      data-sidebar='separator'
      data-slot='sidebar-separator'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR CONTENT ---------------------------------------------------------------
function SidebarContent({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        sidebarStyle.sidebarContent,
        className
      )}
      data-sidebar='content'
      data-slot='sidebar-content'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR GROUP ---------------------------------------------------------------
function SidebarGroup({ className, ...props }) {
  return (
    <div
      className={cn("relative flex w-full min-w-0", sidebarStyle.sidebarGroup, className)}
      data-sidebar='group'
      data-slot='sidebar-group'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR GROUP LABEL ---------------------------------------------------------------
function SidebarGroupLabel({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "flex h-fit shrink-0 items-center outline-hidden transition-[margin,opacity] duration-200 ease-linear [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        sidebarStyle.sidebarGroupLabel,
        className
      )}
      data-sidebar='group-label'
      data-slot='sidebar-group-label'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR GROUP ACTION (skipped) ---------------------------------------------------------------
function SidebarGroupAction({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      data-sidebar='group-action'
      data-slot='sidebar-group-action'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR GROUP CONTENT (skipped) ---------------------------------------------------
function SidebarGroupContent({ className, ...props }) {
  return (
    <div
      className={cn("w-full text-sm", className)}
      data-sidebar='group-content'
      data-slot='sidebar-group-content'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR MENU ---------------------------------------------------
function SidebarMenu({ className, ...props }) {
  return (
    <ul
      className={cn("flex w-full min-w-0 flex-col", sidebarStyle.sidebarMenu, className)}
      data-sidebar='menu'
      data-slot='sidebar-menu'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR MENU ITEM ---------------------------------------------------
function SidebarMenuItem({ className, ...props }) {
  return (
    <li
      className={cn("group/menu-item relative flex flex-col gap-1", className)}
      data-sidebar='menu-item'
      data-slot='sidebar-menu-item'
      {...props}
    />
  )
}

// - SIDEBAR MENU BUTTON STYLES ------------------------------------------------------
const sidebarButtonStyle =
  "gap-2 rounded-full active:bg-custom-primary-soft active:text-custom-primary-soft-content data-[active=true]:bg-custom-primary-soft data-[active=true]:text-custom-primary-soft-content max-lg:min-h-11"

const sidebarMenuButtonVariants = cva(
  `peer/menu-button flex w-full items-center overflow-hidden text-left outline-hidden focus-state transition-[width,height,padding] transition-colors disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:shrink-0 ${sidebarButtonStyle}`,
  // "group-has-data-[sidebar=menu-action]/menu-item:pr-8",
  {
    variants: {
      variant: {
        default:
          "lg:hover:bg-custom-primary-soft lg:hover:text-custom-primary-soft-content data-[state=open]:hover:bg-custom-primary-soft data-[state=open]:hover:text-custom-primary-soft-content",
        outline:
          "bg-transparent lg:hover:bg-base-300 border border-base-300 lg:hover:border-base-soft-content data-[state=open]:hover:bg-base-300 data-[state=open]:hover:border-base-soft-content",
      },
      size: {
        default: "px-3 py-2 h-fit font-body-base-big text-base-content",
        sm: "px-2 py-1 h-fit font-body-base-normal text-base-content",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// ANCHOR SIDEBAR MENU BUTTON ---------------------------------------------------
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      data-active={isActive}
      data-sidebar='menu-button'
      data-size={size}
      data-slot='sidebar-menu-button'
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        align='center'
        hidden={state !== "collapsed" || isMobile}
        side='right'
        {...tooltip}
      />
    </Tooltip>
  )
}

// ANCHOR SIDEBAR MENU ACTION (skipped) ---------------------------------------------------
function SidebarMenuAction({ className, asChild = false, showOnHover = false, ...props }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      )}
      data-sidebar='menu-action'
      data-slot='sidebar-menu-action'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR MENU BADGE (skipped) ---------------------------------------------------
function SidebarMenuBadge({ className, ...props }) {
  return (
    <div
      className={cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      data-sidebar='menu-badge'
      data-slot='sidebar-menu-badge'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR MENU SKELETON (skipped) ---------------------------------------------------
function SidebarMenuSkeleton({ className, showIcon = false, ...props }) {
  // Random width between 50 to 90%.
  const width = useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      data-sidebar='menu-skeleton'
      data-slot='sidebar-menu-skeleton'
      {...props}>
      {showIcon && <Skeleton className='size-4 rounded-md' data-sidebar='menu-skeleton-icon' />}
      <Skeleton
        className='h-4 max-w-(--skeleton-width) flex-1'
        data-sidebar='menu-skeleton-text'
        style={{
          "--skeleton-width": width,
        }}
      />
    </div>
  )
}

// ANCHOR SIDEBAR MENU SUB ---------------------------------------------------
function SidebarMenuSub({ className, ...props }) {
  return (
    <ul
      className={cn(
        "flex min-w-0 flex-col",
        "group-data-[collapsible=icon]:hidden",
        sidebarStyle.sidebarMenuSub,
        className
      )}
      data-sidebar='menu-sub'
      data-slot='sidebar-menu-sub'
      {...props}
    />
  )
}

// ANCHOR SIDEBAR MENU SUB ITEM ---------------------------------------------------
function SidebarMenuSubItem({ className, ...props }) {
  return (
    <li
      className={cn("group/menu-sub-item relative", className)}
      data-sidebar='menu-sub-item'
      data-slot='sidebar-menu-sub-item'
      {...props}
    />
  )
}

// - SIDEBAR MENU SUB BUTTON STYLES ------------------------------------------------------
const sidebarSubButtonStyle =
  "gap-2 rounded-full active:bg-base-100 active:text-base-content data-[active=true]:bg-base-100 data-[active=true]:text-base-content active:shadow-md active:shadow-base-content/10 data-[active=true]:shadow-md data-[active=true]:shadow-base-content/10 data-[active=true]:border-transparent max-lg:min-h-11"

const sidebarMenuSubButtonVariants = cva(
  `flex min-w-0 items-center overflow-hidden outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:shrink-0 ${sidebarSubButtonStyle}`,
  // "group-has-data-[sidebar=menu-action]/menu-item:pr-8",
  {
    variants: {
      variant: {
        default: "lg:hover:bg-base-100 lg:hover:text-base-content",
        outline:
          "bg-transparent lg:hover:bg-custom-neutral-soft border border-custom-neutral-soft lg:hover:border-custom-neutral data-[state=open]:hover:bg-custom-neutral-soft data-[state=open]:hover:border-custom-neutral",
      },
      size: {
        default: "px-3 py-2 h-fit font-body-base-big text-base-soft-content",
        sm: "px-2 max-lg:px-4 py-1 h-fit font-body-base-normal text-base-soft-content",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// ANCHOR SIDEBAR MENU SUB BUTTON ---------------------------------------------------
function SidebarMenuSubButton({
  asChild = false,
  variant = "default",
  size = "sm",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      // className={cn(
      //   "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
      //   "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      //   size === "sm" && "text-xs",
      //   size === "default" &&
      //     "lg:hover:bg-custom-primary-soft lg:hover:text-custom-primary-soft-content data-[state=open]:hover:bg-custom-primary-soft data-[state=open]:hover:text-custom-primary-soft-content",
      //   "group-data-[collapsible=icon]:hidden",
      //   className
      // )}
      className={cn(sidebarMenuSubButtonVariants({ variant, size }), className)}
      data-active={isActive}
      data-sidebar='menu-sub-button'
      data-size={size}
      data-slot='sidebar-menu-sub-button'
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
