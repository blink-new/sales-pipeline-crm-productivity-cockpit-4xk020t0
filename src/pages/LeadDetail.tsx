import React from 'react'
import { LeadDetail as LeadDetailComponent } from '@/components/leads/LeadDetail'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Star } from 'lucide-react'

export function LeadDetail() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="mr-1">
            <ArrowLeft size={18} />
          </Button>
          <h1 className="text-2xl font-bold font-heading">Lead Details</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <Star size={16} className="text-amber-500" />
            Mark as Important
          </Button>
          
          <Button>Convert to Deal</Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <LeadDetailComponent id="1" />
      </div>
    </div>
  )
}