import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Bell, 
  Mail, 
  CalendarClock, 
  CheckCheck, 
  AlertCircle, 
  Clock, 
  User, 
  MoreHorizontal, 
  ChevronDown, 
  X 
} from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

// Mock data
const notifications = [
  {
    id: 'n1',
    title: 'New lead assigned to you',
    description: 'Sarah Johnson from XYZ Industries has been assigned to you.',
    time: '10 minutes ago',
    type: 'lead',
    read: false
  },
  {
    id: 'n2',
    title: 'Deal moved to Negotiation',
    description: 'Michael Brown moved "Acme Corp Data Platform" to Negotiation stage.',
    time: '1 hour ago',
    type: 'deal',
    read: false
  },
  {
    id: 'n3',
    title: 'Task deadline approaching',
    description: 'Your task "Follow up with TechGrowth Inc" is due tomorrow.',
    time: '2 hours ago',
    type: 'task',
    read: false
  },
  {
    id: 'n4',
    title: 'Meeting reminder',
    description: 'Product demo with Global Systems in 30 minutes.',
    time: '30 minutes ago',
    type: 'meeting',
    read: true
  },
  {
    id: 'n5',
    title: 'New comment on deal',
    description: 'Emily Taylor commented on "HR Software Implementation" deal.',
    time: '3 hours ago',
    type: 'comment',
    read: true
  },
  {
    id: 'n6',
    title: 'Deal closed - won',
    description: 'The deal "Mobile App Development" with FinTech Solutions was marked as won.',
    time: '1 day ago',
    type: 'deal',
    read: true
  },
  {
    id: 'n7',
    title: 'Weekly report available',
    description: 'Your sales performance report for last week is available.',
    time: '2 days ago',
    type: 'report',
    read: true
  }
]

interface NotificationItemProps {
  notification: {
    id: string
    title: string
    description: string
    time: string
    type: string
    read: boolean
  }
  onMarkAsRead: (id: string) => void
  onDelete: (id: string) => void
}

const iconMap = {
  lead: <User size={16} className="text-blue-500" />,
  deal: <CheckCheck size={16} className="text-green-500" />,
  task: <Clock size={16} className="text-amber-500" />,
  meeting: <CalendarClock size={16} className="text-purple-500" />,
  comment: <Mail size={16} className="text-indigo-500" />,
  report: <AlertCircle size={16} className="text-teal-500" />,
}

function NotificationItem({ notification, onMarkAsRead, onDelete }: NotificationItemProps) {
  return (
    <div className={`p-4 ${!notification.read ? 'bg-primary/5' : ''} border-b last:border-b-0`}>
      <div className="flex">
        <div className="flex-shrink-0 mr-4 mt-1">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            {iconMap[notification.type as keyof typeof iconMap] || <Bell size={16} />}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <p className={`text-sm font-medium ${!notification.read ? 'text-primary' : ''}`}>
                {notification.title}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
            </div>
            
            <div className="flex items-center">
              {!notification.read && (
                <div className="mr-2 w-2 h-2 rounded-full bg-primary" />
              )}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {!notification.read && (
                    <DropdownMenuItem onClick={() => onMarkAsRead(notification.id)}>
                      Mark as read
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={() => onDelete(notification.id)}>
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Notifications() {
  const [allNotifications, setAllNotifications] = React.useState(notifications)
  const unreadCount = allNotifications.filter(n => !n.read).length
  
  const markAsRead = (id: string) => {
    setAllNotifications(prev => 
      prev.map(n => 
        n.id === id ? { ...n, read: true } : n
      )
    )
  }
  
  const deleteNotification = (id: string) => {
    setAllNotifications(prev => 
      prev.filter(n => n.id !== id)
    )
  }
  
  const markAllAsRead = () => {
    setAllNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    )
  }
  
  const clearAllNotifications = () => {
    setAllNotifications([])
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading">Notifications</h1>
          <p className="text-muted-foreground mt-1">Stay updated with your latest activities</p>
        </div>
        
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1">
                Actions
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={markAllAsRead}>Mark all as read</DropdownMenuItem>
              <DropdownMenuItem onClick={clearAllNotifications}>Clear all notifications</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline" size="icon" onClick={markAllAsRead}>
            <CheckCheck size={18} />
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all" className="relative">
              All
              {allNotifications.length > 0 && (
                <Badge className="ml-2 bg-muted text-muted-foreground">{allNotifications.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="unread" className="relative">
              Unread
              {unreadCount > 0 && (
                <Badge className="ml-2 bg-primary text-primary-foreground">{unreadCount}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="important">Important</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <span className="mr-1">Filter:</span> All Types
            </Button>
          </div>
        </div>
        
        <TabsContent value="all" className="mt-6">
          <Card>
            {allNotifications.length > 0 ? (
              <>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Recent Notifications</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div>
                    {allNotifications.map(notification => (
                      <NotificationItem 
                        key={notification.id} 
                        notification={notification} 
                        onMarkAsRead={markAsRead}
                        onDelete={deleteNotification}
                      />
                    ))}
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="py-12 flex flex-col items-center justify-center text-center">
                <Bell size={48} className="text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium">No notifications</h3>
                <p className="text-muted-foreground mt-1">You're all caught up!</p>
              </CardContent>
            )}
          </Card>
        </TabsContent>
        
        <TabsContent value="unread" className="mt-6">
          <Card>
            {unreadCount > 0 ? (
              <>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Unread Notifications</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div>
                    {allNotifications
                      .filter(n => !n.read)
                      .map(notification => (
                        <NotificationItem 
                          key={notification.id} 
                          notification={notification} 
                          onMarkAsRead={markAsRead}
                          onDelete={deleteNotification}
                        />
                      ))
                    }
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="py-12 flex flex-col items-center justify-center text-center">
                <CheckCheck size={48} className="text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium">No unread notifications</h3>
                <p className="text-muted-foreground mt-1">You've read all your notifications</p>
              </CardContent>
            )}
          </Card>
        </TabsContent>
        
        <TabsContent value="important" className="mt-6">
          <Card>
            <CardContent className="py-12 flex flex-col items-center justify-center text-center">
              <AlertCircle size={48} className="text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium">No important notifications</h3>
              <p className="text-muted-foreground mt-1">You have no starred or important notifications</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Notification Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-sm font-medium">Notification Preferences</h3>
              <p className="text-sm text-muted-foreground">Customize how and when you receive notifications</p>
              <Button variant="outline" className="w-fit mt-2">
                Manage Notification Settings
              </Button>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Email Digest</h3>
                <select className="w-full border rounded-md h-9 px-3">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Never</option>
                </select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Mobile Push Notifications</h3>
                <select className="w-full border rounded-md h-9 px-3">
                  <option>All Notifications</option>
                  <option>Important Only</option>
                  <option>None</option>
                </select>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Desktop Alerts</h3>
                <select className="w-full border rounded-md h-9 px-3">
                  <option>All Notifications</option>
                  <option>Important Only</option>
                  <option>None</option>
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}