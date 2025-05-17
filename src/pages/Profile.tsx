import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { 
  User, 
  Mail, 
  Phone, 
  Upload, 
  AlertTriangle,
  Bell,
  Moon,
  Sun,
  Lock,
  LogOut
} from 'lucide-react'

export function Profile() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-heading">Profile</h1>
      
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Personal Information</CardTitle>
                <CardDescription>
                  Update your personal information and contact details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 flex justify-center">
                      <div className="text-center">
                        <Avatar className="h-24 w-24 mx-auto">
                          <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format" />
                          <AvatarFallback>JP</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="sm" className="mt-4 flex items-center gap-1 mx-auto">
                          <Upload size={14} />
                          Upload Photo
                        </Button>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 space-y-4">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="John" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Doe" className="mt-1" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input id="jobTitle" defaultValue="Sales Manager" className="mt-1" />
                      </div>
                      
                      <div>
                        <Label htmlFor="department">Department</Label>
                        <Input id="department" defaultValue="Sales" className="mt-1" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="font-medium">Contact Information</h3>
                    
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <div className="flex mt-1">
                          <div className="bg-muted flex items-center justify-center px-3 rounded-l-md border border-r-0 border-input">
                            <Mail size={16} className="text-muted-foreground" />
                          </div>
                          <Input id="email" defaultValue="john.doe@example.com" className="rounded-l-none" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="flex mt-1">
                          <div className="bg-muted flex items-center justify-center px-3 rounded-l-md border border-r-0 border-input">
                            <Phone size={16} className="text-muted-foreground" />
                          </div>
                          <Input id="phone" defaultValue="(555) 123-4567" className="rounded-l-none" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="office">Office Location</Label>
                      <Input id="office" defaultValue="New York, NY" className="mt-1" />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Account Status</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Profile</p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Complete
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Email</p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Verified
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">2FA</p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Not Enabled
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-2 rounded-lg mt-4 bg-amber-50 border border-amber-200">
                    <AlertTriangle size={16} className="text-amber-500 mr-2 flex-shrink-0" />
                    <p className="text-xs text-amber-800">Enable two-factor authentication for increased security</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Sessions</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Current Session</p>
                        <p className="text-xs text-muted-foreground">New York, USA · Chrome on Mac</p>
                        <p className="text-xs text-primary mt-1">Active Now</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Mobile App</p>
                        <p className="text-xs text-muted-foreground">iPhone 13 · iOS 16.5</p>
                        <p className="text-xs text-muted-foreground mt-1">Last active 3 hours ago</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <LogOut size={14} className="mr-2" />
                    Log Out All Devices
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-heading">Display Preferences</CardTitle>
              <CardDescription>
                Customize how the application looks and works for you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Theme</h3>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Card className="border-2 border-primary cursor-pointer">
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <Sun size={24} className="mb-2 text-amber-500" />
                        <p className="text-sm font-medium">Light Mode</p>
                        <p className="text-xs text-muted-foreground">Bright theme for day use</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="cursor-pointer">
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <Moon size={24} className="mb-2 text-indigo-500" />
                        <p className="text-sm font-medium">Dark Mode</p>
                        <p className="text-xs text-muted-foreground">Darker theme for night use</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="cursor-pointer">
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <div className="flex mb-2">
                          <Sun size={24} className="text-amber-500" />
                          <Moon size={24} className="text-indigo-500" />
                        </div>
                        <p className="text-sm font-medium">System Default</p>
                        <p className="text-xs text-muted-foreground">Follow system appearance</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Layout & Display</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="compact-mode" className="flex items-center space-x-2">
                        <span>Compact Mode</span>
                        <span className="text-xs text-muted-foreground">(Show more data with less spacing)</span>
                      </Label>
                      <Switch id="compact-mode" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="autosave" className="flex items-center space-x-2">
                        <span>Autosave Changes</span>
                        <span className="text-xs text-muted-foreground">(Automatically save edits)</span>
                      </Label>
                      <Switch id="autosave" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="animations" className="flex items-center space-x-2">
                        <span>Enable Animations</span>
                        <span className="text-xs text-muted-foreground">(For smoother transitions)</span>
                      </Label>
                      <Switch id="animations" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Dashboard Customization</h3>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground mb-2">Choose which metrics appear on your dashboard</p>
                    
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="revenue" defaultChecked className="rounded text-primary" />
                        <label htmlFor="revenue" className="text-sm">Revenue Overview</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="deals" defaultChecked className="rounded text-primary" />
                        <label htmlFor="deals" className="text-sm">Deals by Stage</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="leads" defaultChecked className="rounded text-primary" />
                        <label htmlFor="leads" className="text-sm">Recent Leads</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="activities" defaultChecked className="rounded text-primary" />
                        <label htmlFor="activities" className="text-sm">Upcoming Activities</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="team" className="rounded text-primary" />
                        <label htmlFor="team" className="text-sm">Team Performance</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="forecast" className="rounded text-primary" />
                        <label htmlFor="forecast" className="text-sm">Sales Forecast</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Preferences</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-heading">Notification Settings</CardTitle>
              <CardDescription>
                Choose when and how you want to be notified
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Email Notifications</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="new-leads" className="flex items-center space-x-2">
                        <span>New Lead Assigned</span>
                      </Label>
                      <Switch id="new-leads" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="deal-updates" className="flex items-center space-x-2">
                        <span>Deal Status Updates</span>
                      </Label>
                      <Switch id="deal-updates" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="task-reminders" className="flex items-center space-x-2">
                        <span>Task Reminders</span>
                      </Label>
                      <Switch id="task-reminders" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="weekly-report" className="flex items-center space-x-2">
                        <span>Weekly Performance Report</span>
                      </Label>
                      <Switch id="weekly-report" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="marketing-emails" className="flex items-center space-x-2">
                        <span>Product Updates & News</span>
                      </Label>
                      <Switch id="marketing-emails" />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">In-App Notifications</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-leads" className="flex items-center space-x-2">
                        <span>New Lead Assigned</span>
                      </Label>
                      <Switch id="app-leads" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-deals" className="flex items-center space-x-2">
                        <span>Deal Status Updates</span>
                      </Label>
                      <Switch id="app-deals" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-tasks" className="flex items-center space-x-2">
                        <span>Task Reminders</span>
                      </Label>
                      <Switch id="app-tasks" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-team" className="flex items-center space-x-2">
                        <span>Team Activity</span>
                      </Label>
                      <Switch id="app-team" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-mentions" className="flex items-center space-x-2">
                        <span>Mentions & Comments</span>
                      </Label>
                      <Switch id="app-mentions" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Notification Schedule</h3>
                  
                  <div className="space-y-2">
                    <Label>When do you want to receive notifications?</Label>
                    
                    <div className="grid grid-cols-1 gap-3 mt-2">
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="anytime" name="schedule" defaultChecked className="text-primary" />
                        <label htmlFor="anytime" className="text-sm">Anytime</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="working-hours" name="schedule" className="text-primary" />
                        <label htmlFor="working-hours" className="text-sm">Working hours only (9AM-5PM)</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="custom" name="schedule" className="text-primary" />
                        <label htmlFor="custom" className="text-sm">Custom schedule</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Notification Settings</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-heading">Security Settings</CardTitle>
              <CardDescription>
                Update your password and manage security features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Change Password</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input type="password" id="current-password" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="new-password">New Password</Label>
                      <Input type="password" id="new-password" className="mt-1" />
                      <p className="text-xs text-muted-foreground mt-1">
                        Password must be at least 8 characters and include a mix of letters, numbers, and symbols.
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input type="password" id="confirm-password" className="mt-1" />
                    </div>
                    
                    <Button>Update Password</Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account by enabling two-factor authentication.
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="tfa" className="font-medium">Enable 2FA</Label>
                        <p className="text-xs text-muted-foreground">
                          Use an authenticator app to generate verification codes
                        </p>
                      </div>
                      <Switch id="tfa" />
                    </div>
                    
                    <Button variant="outline" className="flex items-center gap-1">
                      <Lock size={16} />
                      Set Up Two-Factor Authentication
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Sessions</h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Automatic Session Timeout</p>
                        <p className="text-xs text-muted-foreground">
                          Automatically log out after period of inactivity
                        </p>
                      </div>
                      <Switch id="timeout" defaultChecked />
                    </div>
                    
                    <div className="mt-4">
                      <Label>Timeout Period</Label>
                      <select className="w-full border rounded-md h-9 px-3 mt-1">
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                        <option>4 hours</option>
                        <option>8 hours</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium text-destructive">Danger Zone</h3>
                  
                  <div className="rounded-lg border border-destructive/20 p-4 bg-destructive/5">
                    <h4 className="text-sm font-medium text-destructive">Delete Account</h4>
                    <p className="text-xs text-destructive/80 mt-1">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <Button variant="destructive" size="sm" className="mt-4">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}