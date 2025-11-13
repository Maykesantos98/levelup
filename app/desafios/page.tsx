import { Swords, CheckCircle, Clock, Trophy, Users, Zap, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const challenges = [
  {
    id: 1,
    title: "Sprint de Aprendizado - 7 Dias",
    description: "Complete 5 missões em 7 dias e ganhe um bônus especial!",
    icon: "🎯",
    iconBg: "from-orange-500 to-red-500",
    difficulty: "medium",
    action: "Completar Missões",
    reward: "500 XP",
    timeLeft: "Terminando em breve!",
    participants: 1,
    featured: true,
  },
  {
    id: 2,
    title: "Ranking Semanal de XP",
    description: "Competição! Os 10 jogadores com mais XP ganho esta semana ganham prêmios",
    icon: "🏆",
    iconBg: "from-yellow-500 to-orange-500",
    difficulty: "hard",
    action: "Competição",
    reward: "1000 XP",
    timeLeft: "Terminando em breve!",
    participants: 1,
    bonus: "Top 3 ganham vouchers",
    featured: true,
  },
]

export default function DesafiosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-red-900/40 via-orange-900/40 to-yellow-900/40 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Swords className="w-10 h-10 text-red-400" />
            <h1 className="text-5xl font-bold text-red-400">Desafios Dinâmicos</h1>
          </div>
          <p className="text-orange-100 text-lg">Participe de desafios limitados e ganhe recompensas exclusivas!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-card border border-blue-500/30 rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <Swords className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-4xl font-bold mb-1">1</p>
            <p className="text-sm text-muted-foreground">Desafios Ativos</p>
          </div>

          <div className="bg-card border border-green-500/30 rounded-2xl p-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <p className="text-4xl font-bold mb-1">0</p>
            <p className="text-sm text-muted-foreground">Completados</p>
          </div>

          <div className="bg-card border border-orange-500/30 rounded-2xl p-6">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-orange-400" />
            </div>
            <p className="text-4xl font-bold mb-1">5</p>
            <p className="text-sm text-muted-foreground">Disponíveis</p>
          </div>

          <div className="bg-card border border-purple-500/30 rounded-2xl p-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-4xl font-bold mb-1">0</p>
            <p className="text-sm text-muted-foreground">XP Bônus Ganho</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 border-b border-border pb-4">
          <Button className="bg-red-600 hover:bg-red-700">
            <Flame className="w-4 h-4 mr-2" />
            Desafios Ativos
          </Button>
          <Button variant="ghost" className="text-muted-foreground">
            <CheckCircle className="w-4 h-4 mr-2" />
            Completados
          </Button>
          <Button variant="ghost" className="text-muted-foreground">
            <Trophy className="w-4 h-4 mr-2" />
            Ranking
          </Button>
        </div>

        {/* Featured Challenges */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-yellow-500" />
            <h2 className="text-2xl font-bold">Desafios em Destaque</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-card border-2 border-yellow-500/30 rounded-3xl p-6 relative overflow-hidden"
              >
                <Badge className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                  <Zap className="w-3 h-3 mr-1" />
                  Destaque
                </Badge>

                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${challenge.iconBg} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0`}
                  >
                    {challenge.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className={
                      challenge.difficulty === "medium"
                        ? "border-blue-500/50 text-blue-400"
                        : "border-red-500/50 text-red-400"
                    }
                  >
                    {challenge.difficulty}
                  </Badge>
                  <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                    {challenge.action}
                  </Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-0">
                    <Zap className="w-3 h-3 mr-1" />
                    {challenge.reward}
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {challenge.timeLeft}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {challenge.participants} participantes
                  </div>
                </div>

                {challenge.bonus && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                    <p className="text-sm text-green-400 flex items-center gap-2">
                      <Trophy className="w-4 h-4" />
                      <strong>Bônus:</strong> {challenge.bonus}
                    </p>
                  </div>
                )}

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Participar do Desafio
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
