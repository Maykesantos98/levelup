import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Video, FileText, CheckCircle2 } from "lucide-react"

const categories = [
  {
    name: "Liderança",
    icon: BookOpen,
    completed: 12,
    total: 20,
    color: "text-primary",
    bgColor: "bg-primary",
  },
  {
    name: "Tecnologia",
    icon: Video,
    completed: 8,
    total: 15,
    color: "text-secondary",
    bgColor: "bg-secondary",
  },
  {
    name: "Soft Skills",
    icon: FileText,
    completed: 15,
    total: 18,
    color: "text-accent",
    bgColor: "bg-accent",
  },
  {
    name: "Compliance",
    icon: CheckCircle2,
    completed: 6,
    total: 8,
    color: "text-chart-4",
    bgColor: "bg-chart-4",
  },
]

export function LearningProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Progresso por Categoria</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {categories.map((category) => {
          const Icon = category.icon
          const progress = (category.completed / category.total) * 100

          return (
            <div key={category.name} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.bgColor}/10`}>
                    <Icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{category.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {category.completed} de {category.total} módulos
                    </p>
                  </div>
                </div>
                <span className="font-bold text-lg">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
