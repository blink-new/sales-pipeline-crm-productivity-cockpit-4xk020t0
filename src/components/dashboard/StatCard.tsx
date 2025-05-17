import React from 'react'
import { Card, CardContent } from '../ui/card'
import { cn } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function StatCard({ title, value, icon, trend, className }: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="mt-2 text-2xl font-bold font-heading">{value}</h3>
            {trend && (
              <p className={cn(
                "mt-1 flex items-center text-xs font-medium",
                trend.isPositive ? "text-emerald-500" : "text-rose-500"
              )}>
                <span className="mr-1">
                  {trend.isPositive ? '↑' : '↓'}
                </span>
                {trend.value}% from last month
              </p>
            )}
          </div>
          <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}