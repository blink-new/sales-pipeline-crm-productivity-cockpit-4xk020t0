import React from 'react'
import { 
  LayoutDashboard, 
  Users, 
  ClipboardList, 
  BarChart4, 
  Settings, 
  Bell, 
  User, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { useLocation, useNavigate } from 'react-router-dom'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  path: string
  isOpen: boolean
}

const SidebarItem = ({ icon, label, isActive = false, path, isOpen }: SidebarItemProps) => {
  const navigate = useNavigate()
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button 
            onClick={() => navigate(path)}
            className={cn(
              "flex items-center w-full rounded-lg px-3 py-2.5 gap-3 text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/10 hover:text-sidebar-accent"
            )}
          >
            <span className="flex-shrink-0">{icon}</span>
            <span className={cn(
              "transition-all truncate",
              isOpen ? "opacity-100" : "opacity-0 w-0"
            )}>
              {label}
            </span>
          </button>
        </TooltipTrigger>
        {!isOpen && (
          <TooltipContent side="right">
            {label}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  )
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className={cn(
            "flex items-center justify-center w-10 h-10 rounded-md bg-primary text-white font-heading font-bold"
          )}>
            SP
          </div>
          <h1 className={cn(
            "font-heading font-semibold text-lg text-sidebar-foreground whitespace-nowrap transition-all duration-300",
            isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
          )}>
            Sales Pipeline
          </h1>
        </div>
        <button 
          onClick={onToggle}
          className="hidden md:flex items-center justify-center w-6 h-6 rounded-md text-sidebar-foreground hover:bg-sidebar-accent/10"
        >
          {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>

      <nav className="flex flex-col gap-1 p-2 flex-1 overflow-auto">
        <SidebarItem 
          icon={<LayoutDashboard size={20} />} 
          label="Dashboard" 
          isActive={currentPath === '/dashboard'}
          path="/dashboard"
          isOpen={isOpen}
        />
        <SidebarItem 
          icon={<ClipboardList size={20} />} 
          label="Pipeline" 
          isActive={currentPath === '/pipeline'}
          path="/pipeline"
          isOpen={isOpen}
        />
        <SidebarItem 
          icon={<Users size={20} />} 
          label="Leads" 
          isActive={currentPath === '/leads' || currentPath.startsWith('/leads/')}
          path="/leads"
          isOpen={isOpen}
        />
        <SidebarItem 
          icon={<BarChart4 size={20} />} 
          label="Reports" 
          isActive={currentPath === '/reports'}
          path="/reports"
          isOpen={isOpen}
        />
        <SidebarItem 
          icon={<Bell size={20} />} 
          label="Notifications" 
          isActive={currentPath === '/notifications'}
          path="/notifications"
          isOpen={isOpen}
        />
      </nav>

      <div className="mt-auto border-t border-sidebar-border p-2">
        <SidebarItem 
          icon={<User size={20} />} 
          label="Profile" 
          isActive={currentPath === '/profile'}
          path="/profile"
          isOpen={isOpen}
        />
        <SidebarItem 
          icon={<Settings size={20} />} 
          label="Settings" 
          isActive={currentPath === '/settings'}
          path="/settings"
          isOpen={isOpen}
        />
      </div>
    </aside>
  )
}