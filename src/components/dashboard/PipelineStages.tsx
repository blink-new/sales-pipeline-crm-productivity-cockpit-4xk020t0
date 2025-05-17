import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Progress } from '../ui/progress'

interface PipelineStageProps {
  stages: {
    name: string
    count: number
    value: number
    color: string
  }[]
}

export function PipelineStages({ stages }: PipelineStageProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-heading">Pipeline Stages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stages.map((stage, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                  <span className="text-sm font-medium">{stage.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {stage.count} deals
                </span>
              </div>
              <Progress value={stage.value} className={`h-2 ${stage.color}`} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}