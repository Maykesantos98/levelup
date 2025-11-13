import { Search, Filter, Crown, Lightbulb, Laptop, MessageCircle, Briefcase, Zap, Clock, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const categories = [
  { id: "all", label: "Todas", icon: null },
  { id: "leadership", label: "Liderança", icon: Crown },
  { id: "technical", label: "Técnico", icon: Laptop },
  { id: "communication", label: "Comunicação", icon: MessageCircle },
  { id: "management", label: "Gestão", icon: Briefcase },
  { id: "innovation", label: "Inovação", icon: Lightbulb },
]

const difficulties = ["Todas", "Iniciante", "Intermediário", "Avançado", "Expert"]

const missions = [
  {
    id: 1,
    title: "Design Thinking e Inovação - Escola DT",
    provider: "Escola Design Thinking",
    providerBadge: "intermediate",
    category: "innovation",
    icon: "💡",
    iconBg: "from-pink-500 to-rose-500",
    description: "Metodologia completa de Design Thinking aplicada à inovação e resolução de...",
    duration: "80 min",
    xp: 600,
    difficulty: "intermediate",
  },
  {
    id: 2,
    title: "Python para Data Science - Alura",
    provider: "Alura",
    providerBadge: "beginner",
    category: "technical",
    icon: "💻",
    iconBg: "from-blue-500 to-cyan-500",
    description: "Aprenda Python do zero focado em análise de dados com Pandas, NumPy e visualização...",
    duration: "60 min",
    xp: 300,
    difficulty: "beginner",
  },
  {
    id: 3,
    title: "Machine Learning - Coursera (Stanford)",
    provider: "Coursera",
    providerBadge: "advanced",
    category: "technical",
    icon: "💻",
    iconBg: "from-purple-500 to-indigo-500",
    description: "Curso icônico de Machine Learning do Professor Andrew Ng. O mais famoso curso de...",
    duration: "120 min",
    xp: 1000,
    difficulty: "advanced",
  },
]

export default function MissoesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[oklch(0.35_0.2_265)] to-[oklch(0.25_0.15_240)] px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Explorar Missões</h1>
          </div>
          <p className="text-blue-100 text-lg">Escolha seus desafios e evolua suas habilidades</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="Buscar missões..." className="pl-12 h-12 bg-card border-border rounded-xl text-base" />
        </div>

        {/* Category Filter */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm font-medium text-muted-foreground">Categoria</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={cat.id === "all" ? "default" : "outline"}
                className={cat.id === "all" ? "bg-primary" : "border-border"}
              >
                {cat.icon && <cat.icon className="w-4 h-4 mr-2" />}
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm font-medium text-muted-foreground">Dificuldade</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((diff) => (
              <Button
                key={diff}
                variant={diff === "Todas" ? "default" : "outline"}
                className={diff === "Todas" ? "bg-primary" : "border-border"}
              >
                {diff}
              </Button>
            ))}
          </div>
        </div>

        {/* Missions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {missions.map((mission) => (
            <div
              key={mission.id}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${mission.iconBg} rounded-2xl flex items-center justify-center text-2xl`}
                >
                  {mission.icon}
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-0">
                    {mission.provider}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={
                      mission.providerBadge === "beginner"
                        ? "border-green-500/50 text-green-400"
                        : mission.providerBadge === "intermediate"
                          ? "border-blue-500/50 text-blue-400"
                          : "border-purple-500/50 text-purple-400"
                    }
                  >
                    {mission.providerBadge === "beginner"
                      ? "beginner"
                      : mission.providerBadge === "intermediate"
                        ? "intermediate"
                        : "advanced"}
                  </Badge>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {mission.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{mission.description}</p>

              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {mission.duration}
                </div>
                <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                  <Zap className="w-4 h-4" />
                  {mission.xp} XP
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Acessar {mission.provider.split(" ")[0]} →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
