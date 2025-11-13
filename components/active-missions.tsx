import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { PlayCircle, Clock, Star } from "lucide-react"

const missions = [
  {
    id: 1,
    title: "Fundamentos de Liderança",
    description: "Complete 5 módulos sobre estilos de liderança e gestão de equipes",
    progress: 60,
    points: 500,
    difficulty: "Intermediário",
    timeLeft: "3 dias",
    category: "Liderança",
  },
  {
    id: 2,
    title: "Excel Avançado",
    description: "Domine fórmulas, tabelas dinâmicas e macros",
    progress: 30,
    points: 350,
    difficulty: "Avançado",
    timeLeft: "5 dias",
    category: "Tecnologia",
  },
  {
    id: 3,
    title: "Comunicação Assertiva",
    description: "Aprenda técnicas de comunicação eficaz no ambiente corporativo",
    progress: 85,
    points: 400,
    difficulty: "Básico",
    timeLeft: "1 dia",
    category: "Soft Skills",
  },
]

const difficultyColors = {
  Básico: "bg-secondary text-secondary-foreground",
  Intermediário: "bg-primary text-primary-foreground",
  Avançado: "bg-accent text-accent-foreground",
}

export function ActiveMissions() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">Missões Ativas</CardTitle>
          <Button variant="outline" size="sm">
            Ver Todas
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {missions.map((mission) => (
          <div key={mission.id} className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-lg">{mission.title}</h3>
                    <Badge className={difficultyColors[mission.difficulty as keyof typeof difficultyColors]}>
                      {mission.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{mission.description}</p>
                </div>
                <div className="flex items-center gap-1 text-accent font-semibold">
                  <Star className="h-4 w-4 fill-accent" />
                  <span>{mission.points}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progresso</span>
                  <span className="font-medium">{mission.progress}%</span>
                </div>
                <Progress value={mission.progress} className="h-2" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{mission.timeLeft}</span>
                  </div>
                  <Badge variant="outline">{mission.category}</Badge>
                </div>
                <Button size="sm" className="gap-2">
                  <PlayCircle className="h-4 w-4" />
                  Continuar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
