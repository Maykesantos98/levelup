import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Lock } from "lucide-react"

const achievements = [
  {
    id: 1,
    name: "Iniciante",
    description: "Complete sua primeira missão",
    icon: "🎯",
    unlocked: true,
    progress: 100,
  },
  {
    id: 2,
    name: "Dedicado",
    description: "Mantenha 7 dias de sequência",
    icon: "🔥",
    unlocked: true,
    progress: 100,
  },
  {
    id: 3,
    name: "Colaborador",
    description: "Ajude 5 colegas",
    icon: "🤝",
    unlocked: true,
    progress: 100,
  },
  {
    id: 4,
    name: "Expert",
    description: "Complete 10 missões avançadas",
    icon: "⭐",
    unlocked: false,
    progress: 60,
  },
  {
    id: 5,
    name: "Velocista",
    description: "Complete 5 missões em um dia",
    icon: "⚡",
    unlocked: false,
    progress: 40,
  },
  {
    id: 6,
    name: "Mentor",
    description: "Ajude 20 colegas",
    icon: "🎓",
    unlocked: false,
    progress: 15,
  },
]

export function AchievementsBadges() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center gap-2">
            <Award className="h-5 w-5 text-chart-4" />
            Conquistas
          </CardTitle>
          <Badge variant="secondary">18/45</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`relative p-4 rounded-lg border text-center transition-all hover:scale-105 ${
                achievement.unlocked ? "bg-card shadow-sm" : "bg-muted/30 opacity-60"
              }`}
            >
              {!achievement.unlocked && (
                <div className="absolute top-2 right-2">
                  <Lock className="h-3 w-3 text-muted-foreground" />
                </div>
              )}
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h4 className="font-semibold text-xs mb-1">{achievement.name}</h4>
              <p className="text-[10px] text-muted-foreground leading-tight">{achievement.description}</p>
              {!achievement.unlocked && (
                <div className="mt-2">
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all" style={{ width: `${achievement.progress}%` }} />
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">{achievement.progress}%</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
