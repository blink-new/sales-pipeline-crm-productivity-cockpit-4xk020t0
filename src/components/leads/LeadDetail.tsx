import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Mail, 
  Calendar, 
  Building2, 
  Globe, 
  MapPin, 
  Edit, 
  Plus, 
  Clock 
} from 'lucide-react'

interface LeadDetailProps {
  id: string
}

export function LeadDetail({ id }: LeadDetailProps) {
  // This is a mock lead - in a real app, you would fetch this data
  const lead = {
    id: '1',
    name: 'John Smith',
    email: 'john@acmecorp.com',
    phone: '(555) 123-4567',
    company: 'Acme Corporation',
    title: 'Chief Technology Officer',
    status: 'new',
    source: 'Website',
    address: '123 Tech Blvd, San Francisco, CA 94107',
    website: 'www.acmecorp.com',
    createdAt: '2023-11-01',
    industry: 'Technology',
    size: '1000-5000',
    description: 'Acme Corporation is a leading technology company specializing in enterprise software solutions.',
    notes: 'Initial contact via website form. Expressed interest in our CRM platform.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format',
    activities: [
      {
        id: '1',
        type: 'email',
        title: 'Sent introduction email',
        date: '2023-11-02T14:30:00Z',
        description: 'Sent initial email introducing our CRM platform and services.'
      },
      {
        id: '2',
        type: 'call',
        title: 'Discovery call',
        date: '2023-11-04T10:00:00Z',
        description: 'Had a 30-minute discovery call to understand their needs and pain points.'
      },
      {
        id: '3',
        type: 'meeting',
        title: 'Product demo',
        date: '2023-11-08T15:00:00Z',
        description: 'Scheduled a product demo with the IT team for next week.'
      }
    ]
  }
  
  const statusColors = {
    'new': 'bg-blue-100 text-blue-800',
    'contacted': 'bg-purple-100 text-purple-800',
    'qualified': 'bg-green-100 text-green-800',
    'unqualified': 'bg-gray-100 text-gray-800',
  }
  
  const statusLabels = {
    'new': 'New',
    'contacted': 'Contacted',
    'qualified': 'Qualified',
    'unqualified': 'Unqualified',
  }
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <ResizablePanelGroup direction="horizontal" className="h-full max-h-[calc(100vh-10rem)]">
      {/* Lead Information Panel */}
      <ResizablePanel defaultSize={40} minSize={30}>
        <div className="h-full overflow-auto p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={lead.avatarUrl} />
                <AvatarFallback>{lead.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold font-heading">{lead.name}</h2>
                <p className="text-muted-foreground">{lead.title} at {lead.company}</p>
                <div className="mt-2">
                  <Badge className={statusColors[lead.status as keyof typeof statusColors]} variant="outline">
                    {statusLabels[lead.status as keyof typeof statusLabels]}
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Edit size={14} />
              Edit
            </Button>
          </div>
          
          <div className="mt-6 grid grid-cols-1 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>{lead.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>{lead.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                    <span>{lead.company}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <span>{lead.website}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>{lead.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Company Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Industry</p>
                    <p className="font-medium">{lead.industry}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Company Size</p>
                    <p className="font-medium">{lead.size}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-muted-foreground">Source</p>
                    <p className="font-medium">{lead.source}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-muted-foreground">Created</p>
                    <p className="font-medium">{formatDate(lead.createdAt)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{lead.description}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{lead.notes}</p>
                <Button variant="outline" size="sm" className="mt-4 w-full flex items-center justify-center gap-1">
                  <Plus size={14} />
                  Add Note
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </ResizablePanel>
      
      <ResizableHandle withHandle />
      
      {/* Activity & Interaction Panel */}
      <ResizablePanel defaultSize={60}>
        <div className="h-full overflow-auto">
          <Tabs defaultValue="activity" className="px-4 pt-4">
            <TabsList>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="emails">Emails</TabsTrigger>
              <TabsTrigger value="calls">Calls</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
            </TabsList>
            
            <TabsContent value="activity" className="pt-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium">Activity Timeline</h3>
                <div className="flex items-center gap-2">
                  <Button className="flex items-center gap-1">
                    <Plus size={16} />
                    Log Activity
                  </Button>
                </div>
              </div>
              
              {/* Activity Timeline */}
              <div className="space-y-6">
                {lead.activities.map((activity, index) => (
                  <div key={activity.id} className="relative">
                    {/* Timeline line */}
                    {index < lead.activities.length - 1 && (
                      <div className="absolute top-0 bottom-0 left-5 border-l-2 border-dashed border-muted ml-0.5 h-full" />
                    )}
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                          <Clock size={14} />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium">{activity.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {formatDate(activity.date)}
                                </p>
                              </div>
                              <Badge variant="secondary">{activity.type}</Badge>
                            </div>
                            <p className="mt-2 text-sm">{activity.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* New Activity Form */}
              <Card className="mt-8">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Add New Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Activity Type</label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Button variant="outline" size="sm">Email</Button>
                        <Button variant="outline" size="sm">Call</Button>
                        <Button variant="outline" size="sm">Meeting</Button>
                        <Button variant="outline" size="sm">Task</Button>
                        <Button variant="outline" size="sm">Note</Button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Title</label>
                      <Input placeholder="Activity title" className="mt-1" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Description</label>
                      <Textarea placeholder="Add details about the activity" className="mt-1" />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button>Save Activity</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tasks">
              {/* Tasks content would go here */}
            </TabsContent>
            
            <TabsContent value="emails">
              {/* Emails content would go here */}
            </TabsContent>
            
            <TabsContent value="calls">
              {/* Calls content would go here */}
            </TabsContent>
            
            <TabsContent value="files">
              {/* Files content would go here */}
            </TabsContent>
          </Tabs>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}