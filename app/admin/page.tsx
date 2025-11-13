"use client"

import { BarChart3, Users, Target, Trophy, TrendingUp, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useUserStore } from "@/lib/store/user-store"
import { mockRankings } from "@/lib/data/mock-data"

export default function AdminPage() {
  const { missions, achievements, challenges } = useUserStore()

  const totalUsers = mockRankings.length
  const totalMissions = missions.length
  const activeMissions = missions.filter((m) => m.isActive).length
  const totalAchievements = achievements.length
  const activeChallenges = challenges.filter((c) => c.featured).length

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[oklch(0.35_0.2_265)] to-[oklch(0.25_0.15_240)] px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <BarChart3 className="w-10 h-10 text-cyan-400" />
            <h1 className="text-4xl font-bold text-white">Painel Gestor</h1>
          </div>
          <p className="text-blue-100 text-lg">Visão geral da plataforma e métricas de engajamento</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border border-blue-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users className="w-4 h-4" />
                Total de Usuários
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalUsers}</div>
              <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                +12% este mês
              </p>
            </CardContent>
          </Card>

          <Card className="border border-purple-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Target className="w-4 h-4" />
                Missões Ativas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{activeMissions}</div>
              <p className="text-xs text-muted-foreground mt-1">de {totalMissions} totais</p>
            </CardContent>
          </Card>

          <Card className="border border-yellow-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Conquistas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalAchievements}</div>
              <p className="text-xs text-muted-foreground mt-1">disponíveis</p>
            </CardContent>
          </Card>

          <Card className="border border-red-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Desafios Ativos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{activeChallenges}</div>
              <p className="text-xs text-muted-foreground mt-1">em andamento</p>
            </CardContent>
          </Card>
        </div>

        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRankings.slice(0, 5).map((player) => (
                <div key={player.id} className="flex items-center gap-4 p-3 bg-card/50 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="font-bold text-white">{player.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{player.name}</p>
                    <p className="text-sm text-muted-foreground">Nível {player.level}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-yellow-500">{player.xp} XP</p>
                    <p className="text-xs text-muted-foreground">#{player.rank}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Platform Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-500" />
              Análise da Plataforma
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Taxa de Conclusão de Missões</span>
                  <span className="font-semibold">0%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-0" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Engajamento Médio</span>
                  <span className="font-semibold">15%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[15%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Usuários Ativos Diários</span>
                  <span className="font-semibold">40%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[40%]" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
