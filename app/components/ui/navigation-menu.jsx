import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"
// import * as React from "react"

import { cn } from "@/lib/utils"

const navStyle = {
  trigger:
    "rounded-full text-base-content px-3 py-2 font-body-base-normal hover:bg-custom-primary-soft hover:text-custom-primary-soft-content focus-state data-[state=open]:bg-custom-primary-soft data-[state=open]:text-custom-primary-soft-content transition-colors data-[state=open]:bg-custom-primary-soft data-[state=open]:text-custom-primary-soft-content",
  content:
    "w-full bg-base-200 p-1 group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow-md **:data-[slot=navigation-menu-link]:focus-state",
  contentColor:
    "group-data-[viewport=false]/navigation-menu:bg-base-200 group-data-[viewport=false]/navigation-menu:text-base-content",
  viewport:
    "bg-base-200 mt-1 rounded-md border border-base-300 not-dark:shadow-sm not-dark:shadow-base-content/5",
  link: "rounded-sm px-2 py-1 font-body-s-normal max-lg:min-h-12 data-[active=true]:focus:bg-custom-accent-soft data-[active=true]:hover:bg-custom-accent-soft data-[active=true]:bg-custom-primary-soft data-[active=true]:bg-custom-primary-soft-content hover:bg-custom-accent-soft hover:text-custom-accent-soft-content focus-state",
  item: "",
}

// - NAV MENU ROOT ------------------------------------------------------------
function NavigationMenu({ className, children, viewport = false, ...props }) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn("group/navigation-menu flex-1 relative perfect-center *:w-full", className)}
      data-slot='navigation-menu'
      data-viewport={viewport}
      {...props}>
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

// - NAV MENU LIST ------------------------------------------------------------
function NavigationMenuList({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.List
      className={cn(
        "group flex-1 max-lg:flex-col list-none perfect-center gap-1 w-full",
        className
      )}
      data-slot='navigation-menu-list'
      {...props}
    />
  )
}

// - NAV MENU ITEM ------------------------------------------------------------
function NavigationMenuItem({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Item
      className={cn(`relative max-lg:w-full ${navStyle.item}`, className)}
      data-slot='navigation-menu-item'
      {...props}
    />
  )
}

// - NAV MENU TRIGGER STYLE ------------------------------------------------------------
const navigationMenuTriggerStyle = cva(
  `group inline-flex max-lg:min-h-12 h-fit w-fit items-center justify-center disabled:pointer-events-none disabled:opacity-50 outline-none ${navStyle.trigger}`
)

// - NAV MENU TRIGGER ------------------------------------------------------------
function NavigationMenuTrigger({ className, children, ...props }) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      data-slot='navigation-menu-trigger'
      {...props}>
      {children}
      <ChevronDownIcon
        aria-hidden='true'
        className='relative top-[1px] ml-1 transition duration-300 group-data-[state=open]:rotate-180'
        size={12}
        strokeWidth={2}
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

// - NAV MENU CONTENT ------------------------------------------------------------
function NavigationMenuContent({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        `data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 lg:absolute lg:w-fit lg:min-w-36 max-lg:w-full ${navStyle.content}`,
        "group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-2 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      data-slot='navigation-menu-content'
      {...props}
    />
  )
}

// - NAV MENU VIEWPORT ------------------------------------------------------------
function NavigationMenuViewport({ className, ...props }) {
  return (
    <div className={cn("absolute top-full left-0 isolate z-50 flex justify-center")}>
      <NavigationMenuPrimitive.Viewport
        className={cn(
          `origin-top-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden md:w-[var(--radix-navigation-menu-viewport-width)] ${navStyle.viewport}`,
          className
        )}
        data-slot='navigation-menu-viewport'
        {...props}
      />
    </div>
  )
}

// - NAV MENU LINK ------------------------------------------------------------
function NavigationMenuLink({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        `[&_svg:not([class*='text-'])]:text-base-soft-content flex items-center gap-1 transition-all outline-none [&_svg:not([class*='size-'])]:size-4 ${navStyle.link}`,
        className
      )}
      data-slot='navigation-menu-link'
      {...props}
    />
  )
}

// - NAV MENU INDICATOR ------------------------------------------------------------
function NavigationMenuIndicator({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Indicator
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1 items-end justify-center overflow-hidden",
        className
      )}
      data-slot='navigation-menu-indicator'
      {...props}>
      <div className='bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md' />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
