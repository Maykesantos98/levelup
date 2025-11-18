"use client"

import { Sparkles, Target, Award, TrendingUp, Flame, Brain } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useUserStore } from "@/lib/store/user-store"

export default function DashboardPage() {
  const { user, missions } = useUserStore()
  const activeMissions = missions.filter((m) => m.isActive)

  return (
    <div className="min-h-screen p-6">
      {/* Hero Section with Gradient */}
      <div className="relative bg-gradient-to-br from-[oklch(0.45_0.25_290)] via-[oklch(0.35_0.2_265)] to-[oklch(0.25_0.15_240)] px-6 md:px-8 py-12 rounded-2xl mb-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Bem-vindo de volta, <span className="text-yellow-400">{user.name.split(" ")[0]}!</span>
            </h1>
          </div>
          <p className="text-blue-100 text-sm md:text-lg">Continue sua jornada de aprendizado e conquiste novos objetivos</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border border-border hover:border-blue-500/50 transition-all hover:scale-105 cursor-pointer group">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <div className="w-8 h-8 bg-blue-500 rounded-lg group-hover:rotate-12 transition-transform" />
              </div>
              <p className="text-4xl font-bold mb-1">{user.xp}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Total XP
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border hover:border-purple-500/50 transition-all hover:scale-105 cursor-pointer group">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <Target className="w-6 h-6 text-purple-500 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-4xl font-bold mb-1">{user.activeMissions}</p>
              <p className="text-sm text-muted-foreground">Missões Ativas</p>
            </CardContent>
          </Card>

          <Card className="border border-border hover:border-orange-500/50 transition-all hover:scale-105 cursor-pointer group">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                <Award className="w-6 h-6 text-orange-500 group-hover:rotate-12 transition-transform" />
              </div>
              <p className="text-4xl font-bold mb-1">{user.completedMissions}</p>
              <p className="text-sm text-muted-foreground">Missões Completas</p>
            </CardContent>
          </Card>

          <Card className="border border-border hover:border-red-500/50 transition-all hover:scale-105 cursor-pointer group">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                <Flame className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-4xl font-bold mb-1">{user.streak}</p>
              <p className="text-sm text-muted-foreground">Streak Dias</p>
            </CardContent>
          </Card>
        </div>

        {/* Ongoing Missions Section */}
        <Card className="border border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <CardTitle className="text-xl">Missões em Andamento</CardTitle>
              </div>
              <Link href="/missoes">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80 hover:translate-x-1 transition-all"
                >
                  Ver Todas →
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {activeMissions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <Target className="w-10 h-10 text-muted-foreground opacity-50" />
                </div>
                <p className="text-muted-foreground mb-4">Nenhuma missão ativa no momento</p>
                <Link href="/missoes">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:scale-105">
                    Explorar Missões
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {activeMissions.map((mission) => (
                  <div
                    key={mission.id}
                    className="flex items-center gap-4 p-4 bg-card/50 rounded-xl border border-border"
                  >
                    <div className="text-3xl">{mission.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{mission.title}</h4>
                      <p className="text-sm text-muted-foreground">{mission.provider}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-yellow-500">{mission.xp} XP</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="border border-border">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <CardTitle className="text-xl">Conquistas Recentes</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mb-3 animate-bounce">
                <Sparkles className="w-8 h-8 text-muted-foreground opacity-30" />
              </div>
              <p className="text-muted-foreground text-sm">Complete missões para desbloquear conquistas!</p>
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 hover:border-purple-500/50 transition-all hover:scale-[1.01]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-400 animate-pulse" />
              <CardTitle className="text-xl">Recomendações da IA</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground">
              Com base no seu perfil, recomendamos começar com missões de nível iniciante para construir sua base de
              conhecimento.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/missoes">
              <Button
                variant="outline"
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent hover:scale-105 transition-all"
              >
                Ver Recomendações →
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
