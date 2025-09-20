import { AppSidebar } from "@/app/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/app/components/ui/sidebar"

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "19rem",
      }}>
      <AppSidebar />
      <SidebarInset>
        <div className='flex h-14 shrink-0 items-center gap-2 px-4'>
          <SidebarTrigger />
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
