import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-heading">Settings</h1>
          <p className="text-muted-foreground mt-1">Configure your CRM settings</p>
        </div>
        
        <Button>Save Changes</Button>
      </div>
      
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
          <TabsTrigger value="users">Users & Teams</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-heading">Company Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" defaultValue="Acme Corporation" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="website">Company Website</Label>
                    <Input id="website" defaultValue="https://acme.corp" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Business Street, Suite 100" className="mt-1" />
                </div>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" defaultValue="San Francisco" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="state">State/Province</Label>
                    <Input id="state" defaultValue="California" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="zip">Postal Code</Label>
                    <Input id="zip" defaultValue="94105" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="country">Country</Label>
                  <select id="country" className="w-full border rounded-md h-9 px-3 mt-1">
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-xl font-heading">Localization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="timezone">Time Zone</Label>
                    <select id="timezone" className="w-full border rounded-md h-9 px-3 mt-1">
                      <option value="us">America/New_York (EDT, UTC-04:00)</option>
                      <option value="ca">America/Los_Angeles (PDT, UTC-07:00)</option>
                      <option value="uk">Europe/London (BST, UTC+01:00)</option>
                      <option value="au">Australia/Sydney (AEST, UTC+10:00)</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="language">Default Language</Label>
                    <select id="language" className="w-full border rounded-md h-9 px-3 mt-1">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="date-format">Date Format</Label>
                    <select id="date-format" className="w-full border rounded-md h-9 px-3 mt-1">
                      <option value="mdy">MM/DD/YYYY</option>
                      <option value="dmy">DD/MM/YYYY</option>
                      <option value="ymd">YYYY/MM/DD</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="currency">Currency</Label>
                    <select id="currency" className="w-full border rounded-md h-9 px-3 mt-1">
                      <option value="usd">USD - US Dollar</option>
                      <option value="eur">EUR - Euro</option>
                      <option value="gbp">GBP - British Pound</option>
                      <option value="cad">CAD - Canadian Dollar</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-xl font-heading">Email Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="email-from">Default "From" Email</Label>
                  <Input id="email-from" defaultValue="sales@acmecorp.com" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="email-signature">Default Email Signature</Label>
                  <textarea 
                    id="email-signature" 
                    rows={4} 
                    className="w-full border rounded-md p-3 mt-1"
                    defaultValue="John Doe\nSales Manager\nAcme Corporation\n(555) 123-4567"
                  />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Email Notifications</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-leads" className="flex items-center space-x-2">
                        <span>Send copy of lead emails to manager</span>
                      </Label>
                      <Switch id="email-leads" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-tracking" className="flex items-center space-x-2">
                        <span>Track email opens and clicks</span>
                      </Label>
                      <Switch id="email-tracking" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pipeline">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-heading">Pipeline Stages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">1</div>
                      <Input defaultValue="Lead" className="w-40" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">Move Up</Button>
                      <Button variant="ghost" size="sm">Move Down</Button>
                      <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-white">2</div>
                      <Input defaultValue="Qualified" className="w-40" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">Move Up</Button>
                      <Button variant="ghost" size="sm">Move Down</Button>
                      <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-500 text-white">3</div>
                      <Input defaultValue="Proposal" className="w-40" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">Move Up</Button>
                      <Button variant="ghost" size="sm">Move Down</Button>
                      <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white">4</div>
                      <Input defaultValue="Negotiation" className="w-40" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">Move Up</Button>
                      <Button variant="ghost" size="sm">Move Down</Button>
                      <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-fuchsia-500 text-white">5</div>
                      <Input defaultValue="Closed Won" className="w-40" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">Move Up</Button>
                      <Button variant="ghost" size="sm">Move Down</Button>
                      <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      + Add Pipeline Stage
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Deal Settings</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-assign" className="flex items-center space-x-2">
                        <span>Auto-assign deals to sales reps</span>
                      </Label>
                      <Switch id="auto-assign" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="track-time" className="flex items-center space-x-2">
                        <span>Track time spent in each stage</span>
                      </Label>
                      <Switch id="track-time" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="enable-forecasting" className="flex items-center space-x-2">
                        <span>Enable sales forecasting</span>
                      </Label>
                      <Switch id="enable-forecasting" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-xl font-heading">Lead Qualification Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>When should a lead be considered qualified?</Label>
                  
                  <div className="flex flex-col space-y-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="budget" defaultChecked className="rounded text-primary" />
                      <label htmlFor="budget" className="text-sm">Has budget</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="authority" defaultChecked className="rounded text-primary" />
                      <label htmlFor="authority" className="text-sm">Has decision-making authority</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="need" defaultChecked className="rounded text-primary" />
                      <label htmlFor="need" className="text-sm">Has confirmed need for product/service</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="timeline" defaultChecked className="rounded text-primary" />
                      <label htmlFor="timeline" className="text-sm">Has established timeline</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="size" className="rounded text-primary" />
                      <label htmlFor="size" className="text-sm">Company size meets criteria</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="industry" className="rounded text-primary" />
                      <label htmlFor="industry" className="text-sm">In target industry</label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-heading">Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">Sales Manager</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      Admin
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-primary/80 flex items-center justify-center text-white font-bold">
                      SJ
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Senior Sales Rep</p>
                    </div>
                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      Member
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-primary/60 flex items-center justify-center text-white font-bold">
                      MB
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium">Michael Brown</p>
                      <p className="text-sm text-muted-foreground">Sales Rep</p>
                    </div>
                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      Member
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                  
                  <div className="mt-4">
                    <Button>
                      Add Team Member
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Role Permissions</h3>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Card className="h-auto">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Admin</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            Full system access
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            Manage users and permissions
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            Configure system settings
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            View all records and reports
                          </li>
                        </ul>
                        <Button variant="outline" size="sm" className="mt-4">
                          Edit Permissions
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="h-auto">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Member</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            Create and edit leads/deals
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            View assigned records
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            Run basic reports
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                            Limited system configuration
                          </li>
                        </ul>
                        <Button variant="outline" size="sm" className="mt-4">
                          Edit Permissions
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Email Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border border-green-200 bg-green-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500">
                          <path fill="currentColor" d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Gmail</p>
                        <p className="text-xs text-muted-foreground">Connected · john.doe@gmail.com</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-sync" className="flex items-center space-x-2">
                        <span>Two-way email sync</span>
                      </Label>
                      <Switch id="email-sync" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-log" className="flex items-center space-x-2">
                        <span>Auto-log email conversations</span>
                      </Label>
                      <Switch id="auto-log" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sync-contacts" className="flex items-center space-x-2">
                        <span>Sync contacts</span>
                      </Label>
                      <Switch id="sync-contacts" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Calendar Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border border-green-200 bg-green-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500">
                          <path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Google Calendar</p>
                        <p className="text-xs text-muted-foreground">Connected · john.doe@gmail.com</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="two-way-calendar" className="flex items-center space-x-2">
                        <span>Two-way calendar sync</span>
                      </Label>
                      <Switch id="two-way-calendar" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="auto-create" className="flex items-center space-x-2">
                        <span>Auto-create tasks from calendar events</span>
                      </Label>
                      <Switch id="auto-create" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="reminder" className="flex items-center space-x-2">
                        <span>Send meeting reminders</span>
                      </Label>
                      <Switch id="reminder" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Available Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border border-muted">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-500">
                          <path fill="currentColor" d="M20.08 15.03C19.94 14.31 19.35 13.78 18.73 13.42C17.96 12.96 17.07 12.74 16.18 12.57C16.95 12.11 17.47 10.75 17.5 10.17C17.53 9.59 17.45 9.13 17.45 8.86C17.45 8.6 17.43 7.62 17.22 6.95C17.00 6.27 16.62 5.92 16.1 5.86L15.3 5.8C15.3 5.8 15.22 5.04 14.92 4.42C14.75 4.07 14.5 3.77 14.09 3.53C13.68 3.29 13.19 3.22 12.88 3.29L11.93 3.82C11.93 3.82 9.4 3.41 8.81 5.55L8.67 5.92C8.67 5.92 7.64 6.12 7.34 7.13C7.21 7.6 7.2 8.12 7.22 8.67C7.23 9.22 7.59 10.18 7.88 10.8C8.17 11.43 8.48 11.84 9.22 12.14C9.22 12.14 8.97 12.4 8.59 12.53C8.2 12.66 7.42 12.81 6.72 13.2C6.02 13.59 5.34 14.19 5.19 14.89C5.04 15.59 5 16.03 5 16.5V18H12V16.24C12 16.24 12.13 15.91 11.97 15.45C11.81 14.96 11.45 14.5 11.06 14.24C10.67 13.97 10.25 13.78 9.66 13.71C9.08 13.64 8.66 13.89 8.66 13.89C8.66 13.89 9.17 14.45 9.5 14.69C9.83 14.92 10.1 15.13 10.26 15.42C10.42 15.71 10.45 16.07 10.45 16.24C10.45 16.41 10.27 16.65 10.27 16.65C10.27 16.65 6.97 16.56 7 15.5C7.03 14.31 7.68 13.87 8.36 13.61C9.03 13.35 9.84 13.11 10.06 13.08C10.28 13.05 10.75 12.93 10.86 12.76C10.97 12.59 10.93 12.4 10.83 12.19C10.72 11.97 9.95 11.36 9.86 11.17C9.77 10.97 9.39 10.32 9.28 9.92C9.16 9.53 9.05 8.73 9.11 8.19C9.17 7.65 9.23 7.25 9.5 6.83C9.77 6.4 10.09 6.18 10.37 6.15C10.65 6.11 10.75 6.07 10.77 5.89C10.79 5.71 10.82 5.5 10.82 5.28C10.82 5.06 10.87 4.79 10.92 4.64C10.97 4.5 11.14 4.3 11.44 4.28C11.73 4.26 12.05 4.35 12.16 4.35C12.27 4.35 12.69 4.47 12.69 4.47C12.69 4.47 13.41 4.4 13.25 5.28C13.23 5.44 13.09 5.92 13.09 5.92C13.09 5.92 14.12 5.87 14.3 6.74C14.47 7.6 14.25 9.03 14.06 9.5C13.88 9.97 13.58 10.43 13.19 10.79C12.8 11.15 12.23 11.38 12.23 11.38C12.23 11.38 13.5 11.41 14.87 11.76C16.24 12.11 16.94 13.32 16.94 13.32C16.94 13.32 18.46 13.49 18.71 14.79C18.97 16.09 17.31 16.65 17.31 16.65C17.31 16.65 17.24 16.24 17.01 16.03C16.79 15.82 16.35 15.4 16.04 15.26C15.71 15.11 15.27 15.05 14.92 15.11C14.56 15.17 14.36 15.32 14.25 15.5C14.14 15.69 14.03 15.91 14.25 16.26C14.47 16.6 15.74 17.03 16.05 17.97C16.36 18.92 16.68 17.19 17.21 16.95C17.74 16.71 19 16.85 19 16C19 15.15 18.4 14.79 18.4 14.79C18.4 14.79 18.96 14.57 19.03 14.5C19.1 14.43 19.23 14.18 19.23 14.03C19.23 13.89 19.24 13.74 19.11 13.42C19.07 13.29 18.66 13.09 18.66 13.09C18.66 13.09 19.89 13.71 19.91 14.21C19.93 14.71 19.95 15.08 19.71 15.44C19.48 15.79 19.16 16 19.16 16C19.16 16 19.29 16.1 19.38 16.24C19.46 16.38 19.5 16.5 19.5 16.7V18H21V16.5C21 15.74 20.21 15.76 20.08 15.03Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Slack</p>
                        <p className="text-xs text-muted-foreground">Get notifications in Slack</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg border border-muted">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
                          <path fill="currentColor" d="M23.48 6.83a2.86 2.86 0 0 0-1.62-1.89 3.02 3.02 0 0 0-2.05-.08c-.49.17-.7.47-1.29.87l-3.36 2.32-5.5-3.31c-.08-.05-.14-.12-.22-.17s-.3-.14-.46-.2a2.58 2.58 0 0 0-.53-.13 3.02 3.02 0 0 0-.83-.05c-.51.05-.97.22-1.28.43-.66.44-1.03.97-1.21 1.74-.06.25-.07.48-.05.51-.04.24.03.54.13.85.08.24.21.48.38.71.06.08.12.17.2.24.21.24.42.43.72.6l4.48 2.6-4.18 2.87c-.29.18-.5.37-.68.61h-.04c-.06.08-.12.14-.17.22a2.66 2.66 0 0 0-.37.72 3.21 3.21 0 0 0-.14.86 2.9 2.9 0 0 0 .06.83c.18.77.58 1.3 1.24 1.74.66.44 1.38.58 2.11.51.24-.02.32-.05.5-.11s.52-.23.53-.23c.06-.03.12-.05.17-.08l5.37-3.23 3.55 2.4c.19.13.39.24.59.33a2.93 2.93 0 0 0 .72.22 3.2 3.2 0 0 0 .83.06 2.94 2.94 0 0 0 .83-.24c.27-.12.53-.3.77-.5.57-.55.86-1.2.88-1.97 0-.05.01-.31-.08-.62a3.32 3.32 0 0 0-.19-.48 2.2 2.2 0 0 0-.14-.24 2.58 2.58 0 0 0-.33-.4c-.2-.18-.46-.36-.77-.48v-.01l-3.34-1.94 3.26-2.23c.39-.25.71-.5 1.03-.96.32-.47.5-.99.5-1.54 0-.13 0-.26-.02-.4a3.71 3.71 0 0 0-.11-.56c-.26-.24-.09-.3-.17-.47Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Zoom</p>
                        <p className="text-xs text-muted-foreground">Schedule and track meetings</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg border border-muted">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-800">
                          <path fill="currentColor" d="M10.18 16.68c-.09 0-.26.02-.41.03-.14.02-.3.02-.5.02-.18 0-.33 0-.44-.02-.1-.01-.29-.04-.37-.04-1.58-.32-2.54-1.36-2.54-2.69 0-.5.16-.94.48-1.3.56-.64 1.32-.75 2.19-.75.26 0 1.67.05 2.26.68.29.33.45.73.45 1.24 0 .57-.17 1.03-.48 1.4-.3.36-.75.91-1.64 1.43m.14-7.83c-.82 0-1.41-.3-1.89-.7-.57-.52-.74-1.26-.74-1.81 0-.55.15-1.41.91-2 .62-.48 1.37-.68 2.12-.68.86 0 1.42.28 1.75.63.56.55.73 1.28.65 2-.12 1.1-1.43 2.56-2.8 2.56M21 10v9h-2v-4h-5v4h-1.88c-.25.31-.4.63-.53.95-.24.58-.29 1.16-.29 1.74 0 .41.03.81.08 1.21-.24.07-.48.08-.71.1-.42.03-.79 0-1.21 0H6.59c-.24-.02-.48-.04-.71-.07-.34-.08-.66-.21-.96-.41-.65-.43-1.12-1.09-1.35-1.85-.15-.49-.17-1.07-.08-1.56.13-.76.5-1.4 1.03-1.92.09-.09.19-.18.29-.26.24-.21.52-.38.79-.52.35-.18.76-.29 1.15-.36.2-.03.42-.06.62-.06 0-.49-.01-1.31 0-1.77.01-.6.08-1.2.29-1.76.23-.65.57-1.21 1.02-1.68.34-.34.72-.65 1.16-.87.43-.22.89-.37 1.37-.45.22-.03.44-.05.66-.06.49-.01.98.03 1.45.15.48.14.91.35 1.29.65.25.19.45.42.69.64h5.61v-.23c0-.65 0-2.89 0-2.89S21 3.19 21 3.5v6.5m-2-1h-6.8c-.05-.16-.12-.31-.19-.46-.36-.75-.94-1.35-1.65-1.74-.34-.18-.7-.32-1.09-.36-.31-.04-.67-.04-.98 0-.4.06-.74.18-1.04.39-.27.19-.49.42-.65.7-.12.2-.19.42-.28.64H3v1h2.68c-.09.22-.13.45-.16.68-.07.45-.06.91.01 1.37.01.1.03.2.05.31H3v1h2.76c.11.37.29.72.52 1.02.28.36.65.64 1.08.82.42.17.88.24 1.34.23.31 0 .62-.04.92-.12.2-.05.4-.12.58-.21.28-.13.54-.52.56-.52H15v-3h4v-1.28c-.17.01-.35.01-.52.02-.24.01-.48 0-.71 0-.52 0-1.05-.03-1.57-.1-.3-.04-.61-.1-.91-.15V9Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Google Drive</p>
                        <p className="text-xs text-muted-foreground">Attach files to deals</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">API Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="api-key">API Key</Label>
                    <div className="flex">
                      <Input id="api-key" defaultValue="••••••••••••••••••" type="password" className="rounded-r-none" />
                      <Button className="rounded-l-none">Generate New Key</Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Use this API key to access your CRM data programmatically. Keep this key secure.
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      View API Documentation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}