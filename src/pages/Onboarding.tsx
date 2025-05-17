import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { CheckCircle2, CircleDashed, Info, ArrowRight } from 'lucide-react'

export function Onboarding() {
  const steps = [
    { id: 'profile', name: 'Set up your profile', completed: true },
    { id: 'import', name: 'Import your data', completed: false },
    { id: 'pipeline', name: 'Customize pipeline', completed: false },
    { id: 'team', name: 'Add team members', completed: false },
    { id: 'email', name: 'Configure email', completed: false }
  ]
  
  const completedSteps = steps.filter(step => step.completed).length
  const progress = (completedSteps / steps.length) * 100
  
  return (
    <div className="container max-w-6xl mx-auto py-8 px-4 md:py-12 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold font-heading">Welcome to Sales Pipeline CRM</h1>
          <p className="text-muted-foreground mt-1">Complete these steps to get started</p>
        </div>
        <Button variant="outline">Skip Setup</Button>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium">Setup Progress</p>
          <p className="text-sm font-medium">{completedSteps} of {steps.length} tasks completed</p>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Setup Steps</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-4">
                {steps.map((step, index) => (
                  <li key={step.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {step.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      ) : (
                        <CircleDashed className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <p className={`font-medium ${step.completed ? 'text-primary' : ''}`}>
                        {step.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Step {index + 1} of {steps.length}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Visit Knowledge Base</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Find detailed guides and tutorials
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Contact Support</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Get in touch with our support team
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-heading">Import your data</CardTitle>
              <CardDescription>
                Bring your existing customer and lead data into Sales Pipeline CRM
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="csv">
                <TabsList className="mb-4">
                  <TabsTrigger value="csv">CSV Import</TabsTrigger>
                  <TabsTrigger value="integration">Integration</TabsTrigger>
                  <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                </TabsList>
                
                <TabsContent value="csv">
                  <div className="space-y-6">
                    <div className="p-6 border border-dashed border-muted rounded-lg text-center space-y-2">
                      <div className="text-muted-foreground">
                        Drag and drop your CSV file here, or click to browse
                      </div>
                      <Button variant="outline">Browse Files</Button>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">CSV Template</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Download our CSV template to ensure your data imports correctly.
                      </p>
                      <Button variant="outline">Download Template</Button>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Import Options</h3>
                      <div className="space-y-4 mt-4">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="duplicate" className="rounded text-primary" />
                          <label htmlFor="duplicate" className="text-sm">Skip duplicate records</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="notify" className="rounded text-primary" />
                          <label htmlFor="notify" className="text-sm">Notify team members of new assignments</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="activity" className="rounded text-primary" />
                          <label htmlFor="activity" className="text-sm">Create an activity log for imported records</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Skip</Button>
                      <Button>
                        Next Step
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="integration">
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-2">Choose Integration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border-2 border-primary">
                        <CardContent className="flex items-center space-x-4 p-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary">
                              <path fill="currentColor" d="M18.88 14.88a1 1 0 0 1 .47.12.86.86 0 0 1 .47 1.12.84.84 0 0 1-.47.47 1 1 0 0 1-.59.06 8.69 8.69 0 0 1-5.06-2 8.65 8.65 0 0 1-2.06-5.06 1 1 0 0 1 .06-.59 1 1 0 0 1 .12-.47.84.84 0 0 1 .47-.47 1 1 0 0 1 .59-.06 8.72 8.72 0 0 1 5.06 2.06 8.65 8.65 0 0 1 2.06 5.06 1 1 0 0 1-.12.76M21 17v-2h-9v9h1v-3.35a10 10 0 0 0 6.65-2.64l1.35 1.34m.99-11.35-1.4-1.4L3 21.8l1.4 1.4z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Salesforce</h4>
                            <p className="text-xs text-muted-foreground">Connect your Salesforce account</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="flex items-center space-x-4 p-4">
                          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-muted-foreground">
                              <path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81Z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Google Contacts</h4>
                            <p className="text-xs text-muted-foreground">Import from Google Contacts</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="flex items-center space-x-4 p-4">
                          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-muted-foreground">
                              <path fill="currentColor" d="M20.47 2.11A4.1 4.1 0 0 0 17.58 1H6.42a4.1 4.1 0 0 0-2.89 1.11A4.1 4.1 0 0 0 2.46 5v14a4.1 4.1 0 0 0 1.07 2.89A4.1 4.1 0 0 0 6.42 23h11.16a4.1 4.1 0 0 0 2.89-1.11A4.1 4.1 0 0 0 21.54 19V5a4.1 4.1 0 0 0-1.07-2.89zM8.5 18.48a2.14 2.14 0 0 1-.47.26 1.92 1.92 0 0 1-.62.1 1.68 1.68 0 0 1-.63-.1 1.94 1.94 0 0 1-.43-.26 1.31 1.31 0 0 1-.26-.44 1.63 1.63 0 0 1-.11-.63 2 2 0 0 1 .11-.68 1.31 1.31 0 0 1 .26-.44 1.09 1.09 0 0 1 .43-.26 1.68 1.68 0 0 1 .63-.1 1.87 1.87 0 0 1 .62.1 1.22 1.22 0 0 1 .47.26 1.31 1.31 0 0 1 .26.44 2 2 0 0 1 .1.68 1.63 1.63 0 0 1-.1.63 1.31 1.31 0 0 1-.26.44zm.05-7.88a2.54 2.54 0 0 1-1.89.7A2.56 2.56 0 0 1 4.77 11a2.48 2.48 0 0 1-.72-1.86 2.57 2.57 0 0 1 .75-1.89 2.58 2.58 0 0 1 1.86-.71 2.53 2.53 0 0 1 1.89.71 2.57 2.57 0 0 1 .71 1.89A2.59 2.59 0 0 1 8.55 11zm9.62 7.55a.58.58 0 0 1-.21.44.61.61 0 0 1-.44.17h-5.86a.58.58 0 0 1-.43-.17.58.58 0 0 1-.17-.44v-.74a.58.58 0 0 1 .17-.43.58.58 0 0 1 .43-.18h5.86a.61.61 0 0 1 .44.18.62.62 0 0 1 .21.43zm0-3.86a.65.65 0 0 1-.21.44.65.65 0 0 1-.44.17h-5.86a.58.58 0 0 1-.43-.17.58.58 0 0 1-.17-.44v-.74a.58.58 0 0 1 .17-.43.58.58 0 0 1 .43-.17h5.86a.65.65 0 0 1 .44.17.65.65 0 0 1 .21.43zm0-3.86a.65.65 0 0 1-.21.44.65.65 0 0 1-.44.17h-5.86a.58.58 0 0 1-.43-.17.58.58 0 0 1-.17-.44v-.74a.58.58 0 0 1 .17-.43.58.58 0 0 1 .43-.17h5.86a.65.65 0 0 1 .44.17.65.65 0 0 1 .21.43z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">HubSpot</h4>
                            <p className="text-xs text-muted-foreground">Connect your HubSpot account</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="flex items-center space-x-4 p-4">
                          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-muted-foreground">
                              <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Excel/CSV</h4>
                            <p className="text-xs text-muted-foreground">Import from spreadsheet</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="flex justify-end space-x-2 mt-6">
                      <Button variant="outline">Skip</Button>
                      <Button>Connect Salesforce</Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="manual">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 text-center p-4 rounded-lg bg-muted">
                      <Info className="h-5 w-5 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Use this option if you want to manually add leads or have a small number of contacts.
                      </p>
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Skip</Button>
                      <Button>Add Lead Manually</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">Use CSV import for bulk data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">Check for duplicates before importing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm">Map fields carefully to ensure data integrity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Coming Next</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  After importing your data, you'll customize your sales pipeline stages to match your sales process.
                </p>
                <Button variant="outline" className="w-full mt-4">
                  Preview Pipeline Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}