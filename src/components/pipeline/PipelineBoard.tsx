import React from 'react'
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { PipelineColumn } from './PipelineColumn'
import { PipelineCard } from './PipelineCard'
import { toast } from 'react-hot-toast'

export interface Deal {
  id: string
  title: string
  company: string
  value: number
  contact: {
    name: string
    avatarUrl?: string
  }
  stage: string
  closingDate: string
  probability: number
}

interface PipelineStage {
  id: string
  title: string
  deals: Deal[]
}

interface PipelineBoardProps {
  stages: PipelineStage[]
}

export function PipelineBoard({ stages: initialStages }: PipelineBoardProps) {
  const [stages, setStages] = React.useState<PipelineStage[]>(initialStages)
  const [activeDeal, setActiveDeal] = React.useState<Deal | null>(null)
  
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 8,
      },
    })
  )

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    const dealId = active.id as string
    
    // Find the deal from all stages
    for (const stage of stages) {
      const deal = stage.deals.find(d => d.id === dealId)
      if (deal) {
        setActiveDeal(deal)
        break
      }
    }
  }
  
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    
    if (!over || !active) {
      setActiveDeal(null)
      return
    }
    
    const dealId = active.id as string
    const targetStageId = over.id as string
    
    // Don't do anything if dropped on the same stage
    const sourceStage = stages.find(stage => 
      stage.deals.some(deal => deal.id === dealId)
    )
    
    if (sourceStage?.id === targetStageId) {
      setActiveDeal(null)
      return
    }
    
    // Update stages with the deal moved to the new stage
    setStages(prevStages => {
      const updatedStages = prevStages.map(stage => {
        // Remove deal from source stage
        if (stage.deals.some(deal => deal.id === dealId)) {
          return {
            ...stage,
            deals: stage.deals.filter(deal => deal.id !== dealId)
          }
        }
        
        // Add deal to target stage
        if (stage.id === targetStageId) {
          const dealToMove = prevStages
            .flatMap(s => s.deals)
            .find(d => d.id === dealId)
            
          if (dealToMove) {
            // Update deal stage
            const updatedDeal = {
              ...dealToMove,
              stage: stage.title
            }
            
            toast.success(`Deal moved to ${stage.title}`)
            
            return {
              ...stage,
              deals: [...stage.deals, updatedDeal]
            }
          }
        }
        
        return stage
      })
      
      return updatedStages
    })
    
    setActiveDeal(null)
  }

  return (
    <DndContext 
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex h-full gap-6 overflow-x-auto pb-6">
        {stages.map(stage => (
          <PipelineColumn 
            key={stage.id} 
            id={stage.id}
            title={stage.title} 
            deals={stage.deals}
            count={stage.deals.length}
            value={stage.deals.reduce((sum, deal) => sum + deal.value, 0)}
          />
        ))}
      </div>
      
      <DragOverlay>
        {activeDeal ? (
          <div className="w-[320px] transform rotate-3 opacity-80">
            <PipelineCard deal={activeDeal} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}