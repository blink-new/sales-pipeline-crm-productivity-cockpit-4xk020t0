import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { Card, CardContent } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'
import { CalendarIcon, DollarSign, MoreHorizontal } from 'lucide-react'
import { Button } from '../ui/button'
import { Deal } from './PipelineBoard'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { cn } from '@/lib/utils'

interface PipelineCardProps {
  deal: Deal
}

export function PipelineCard({ deal }: PipelineCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: deal.id,
  })
  
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    zIndex: 999,
  } : undefined
  
  // Format date string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date)
  }

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      {...listeners} 
      {...attributes}
      className={cn(isDragging && "opacity-50")}
    >
      <Card className="transition-all duration-200 hover:shadow-md cursor-move">
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-heading font-medium text-base leading-tight">{deal.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{deal.company}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal size={15} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex items-center mt-3 gap-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              <DollarSign size={12} className="mr-1" />
              {deal.value.toLocaleString()}
            </Badge>
            
            <Badge variant="outline" className="bg-muted text-muted-foreground border-muted/40">
              <CalendarIcon size={12} className="mr-1" />
              {formatDate(deal.closingDate)}
            </Badge>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span>Probability</span>
              <span className="font-medium">{deal.probability}%</span>
            </div>
            <Progress value={deal.probability} className="h-1.5" />
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src={deal.contact.avatarUrl} />
              <AvatarFallback>{deal.contact.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{deal.contact.name}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}