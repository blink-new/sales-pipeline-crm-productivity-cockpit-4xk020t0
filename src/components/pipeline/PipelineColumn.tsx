import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { PipelineCard } from './PipelineCard'
import { Deal } from './PipelineBoard'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { Button } from '../ui/button'

interface PipelineColumnProps {
  id: string
  title: string
  deals: Deal[]
  count: number
  value: number
}

export function PipelineColumn({ id, title, deals, count, value }: PipelineColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  })

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "flex flex-col min-w-[320px] w-[320px] h-full rounded-lg bg-card border",
        isOver && "ring-2 ring-primary ring-offset-2"
      )}
    >
      <div className="flex flex-col p-3 border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-semibold text-lg">{title}</h3>
          <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-medium rounded-full bg-muted text-muted-foreground">
            {count}
          </span>
        </div>
        <div className="flex items-center justify-between mt-1 text-sm text-muted-foreground">
          <span>Total: ${value.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="flex-1 p-3 space-y-3 overflow-y-auto">
        {deals.map(deal => (
          <PipelineCard key={deal.id} deal={deal} />
        ))}
      </div>
      
      <div className="p-3 border-t">
        <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
          <Plus size={16} className="mr-2" />
          Add deal
        </Button>
      </div>
    </div>
  )
}