import React from 'react'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import { cn } from '@/lib/utils'

interface AppShellProps {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className={cn(
        "flex flex-col flex-1 transition-all duration-300 ease-in-out",
        isSidebarOpen ? "md:ml-64" : "md:ml-20"
      )}>
        <TopBar onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}