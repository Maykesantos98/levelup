import { Card } from "@/components/ui/card"
import { Trophy, Target, Zap, Award } from "lucide-react"

const stats = [
  {
    icon: Trophy,
    label: "Pontos Totais",
    value: "2,450",
    change: "+240 esta semana",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Target,
    label: "Missões Completas",
    value: "24",
    change: "6 em progresso",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Zap,
    label: "Sequência Atual",
    value: "12 dias",
    change: "Recorde: 18 dias",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Award,
    label: "Conquistas",
    value: "18/45",
    change: "2 próximas",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
]

export function StatsOverview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
