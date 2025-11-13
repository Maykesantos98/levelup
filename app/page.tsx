import { Sparkles, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient */}
      <div className="relative bg-gradient-to-br from-[oklch(0.45_0.25_290)] via-[oklch(0.35_0.2_265)] to-[oklch(0.25_0.15_240)] px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h1 className="text-4xl font-bold text-white">
              Bem-vindo de volta, <span className="text-yellow-400">Mayke!</span>
            </h1>
          </div>
          <p className="text-blue-100 text-lg">Continue sua jornada de aprendizado e conquiste novos objetivos</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg" />
            </div>
            <p className="text-4xl font-bold mb-1">0</p>
            <p className="text-sm text-muted-foreground">Total XP</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-lg" />
            </div>
            <p className="text-4xl font-bold mb-1">0</p>
            <p className="text-sm text-muted-foreground">Missões Ativas</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg" />
            </div>
            <p className="text-4xl font-bold mb-1">0</p>
            <p className="text-sm text-muted-foreground">Missões Completas</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-lg" />
            </div>
            <p className="text-4xl font-bold mb-1">0</p>
            <p className="text-sm text-muted-foreground">Streak Dias</p>
          </div>
        </div>

        {/* Ongoing Missions Section */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">Missões em Andamento</h2>
            </div>
            <Link href="/missoes">
              <Button variant="ghost" size="sm" className="text-primary">
                Ver Todas →
              </Button>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
              <Target className="w-10 h-10 text-muted-foreground opacity-50" />
            </div>
            <p className="text-muted-foreground mb-4">Nenhuma missão ativa no momento</p>
            <Link href="/missoes">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Explorar Missões
              </Button>
            </Link>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-yellow-500" />
            <h2 className="text-xl font-bold">Conquistas Recentes</h2>
          </div>

          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mb-3">
              <Sparkles className="w-8 h-8 text-muted-foreground opacity-30" />
            </div>
            <p className="text-muted-foreground text-sm">Complete missões para desbloquear conquistas!</p>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl font-bold">Recomendações da IA</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Com base no seu perfil, recomendamos começar com missões de nível iniciante para construir sua base de
            conhecimento.
          </p>
          <Link href="/missoes">
            <Button
              variant="outline"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent"
            >
              Ver Recomendações
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
