// app/layout.tsx

import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export const metadata = {
  title: "My App",
  description: "My Next.js application",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 flex">
        <SidebarProvider>
          <AppSidebar/>
          <div className="flex flex-col flex-1 overflow-hidden">
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
