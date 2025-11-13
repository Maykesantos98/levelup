"use client"

import { Swords, CheckCircle, Clock, Trophy, Users, Zap, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useUserStore } from "@/lib/store/user-store"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

export default function DesafiosPage() {
  const { challenges, user, joinChallenge } = useUserStore()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState<"ativos" | "completados" | "ranking">("ativos")

  const activeChallenges = challenges.filter((c) => c.featured).length
  const featuredChallenges = challenges.filter((c) => c.featured)
  const allActiveChallenges = challenges

  const handleJoinChallenge = (challengeId: string, challengeTitle: string) => {
    joinChallenge(challengeId)
    toast({
      title: "Desafio aceito!",
      description: `Você entrou no desafio: ${challengeTitle}`,
    })
  }

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
            <p className="text-4xl font-bold mb-1">{activeChallenges}</p>
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
            <p className="text-4xl font-bold mb-1">{challenges.length}</p>
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
          <Button
            className={activeTab === "ativos" ? "bg-red-600 hover:bg-red-700" : ""}
            variant={activeTab === "ativos" ? "default" : "ghost"}
            onClick={() => setActiveTab("ativos")}
          >
            <Flame className="w-4 h-4 mr-2" />
            Desafios Ativos
          </Button>
          <Button
            variant={activeTab === "completados" ? "default" : "ghost"}
            className={activeTab === "completados" ? "bg-green-600 hover:bg-green-700" : "text-muted-foreground"}
            onClick={() => setActiveTab("completados")}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Completados
          </Button>
          <Button
            variant={activeTab === "ranking" ? "default" : "ghost"}
            className={activeTab === "ranking" ? "bg-yellow-600 hover:bg-yellow-700" : "text-muted-foreground"}
            onClick={() => setActiveTab("ranking")}
          >
            <Trophy className="w-4 h-4 mr-2" />
            Ranking
          </Button>
        </div>

        {activeTab === "ativos" && (
          <>
            {/* Featured Challenges */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-yellow-500" />
                <h2 className="text-2xl font-bold">Desafios em Destaque</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {featuredChallenges.map((challenge) => (
                  <div
                    key={challenge.id}
                    className="bg-card border-2 border-yellow-500/30 rounded-3xl p-6 relative overflow-hidden hover:border-yellow-500/50 transition-all"
                  >
                    <Badge className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                      <Zap className="w-3 h-3 mr-1" />
                      Destaque
                    </Badge>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                        {challenge.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2">{challenge.title}</h3>
                        <p className="text-sm text-muted-foreground">{challenge.description}</p>
                      </div>
                    </div>

                    <div className="flex gap-2 mb-4 flex-wrap">
                      <Badge
                        variant="outline"
                        className={
                          challenge.difficulty === "medium"
                            ? "border-blue-500/50 text-blue-400"
                            : challenge.difficulty === "hard"
                              ? "border-red-500/50 text-red-400"
                              : "border-green-500/50 text-green-400"
                        }
                      >
                        {challenge.difficulty}
                      </Badge>
                      <Badge variant="outline" className="border-blue-500/50 text-blue-400">
                        {challenge.type}
                      </Badge>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-0">
                        <Zap className="w-3 h-3 mr-1" />
                        {challenge.xpReward} XP
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

                    <Button
                      onClick={() => handleJoinChallenge(challenge.id, challenge.title)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Participar do Desafio
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* All Active Challenges */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Todos os Desafios Disponíveis</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {allActiveChallenges
                  .filter((c) => !c.featured)
                  .map((challenge) => (
                    <div
                      key={challenge.id}
                      className="bg-card border border-border rounded-2xl p-5 hover:border-primary/50 transition-all"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                          {challenge.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-sm mb-1 line-clamp-2">{challenge.title}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">{challenge.description}</p>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-3 flex-wrap">
                        <Badge variant="outline" className="text-xs border-yellow-500/50 text-yellow-400">
                          <Zap className="w-2 h-2 mr-1" />
                          {challenge.xpReward} XP
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {challenge.difficulty}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {challenge.timeLeft}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {challenge.participants}
                        </div>
                      </div>

                      <Button
                        onClick={() => handleJoinChallenge(challenge.id, challenge.title)}
                        size="sm"
                        className="w-full"
                      >
                        Participar
                      </Button>
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}

        {activeTab === "completados" && (
          <div className="text-center py-16">
            <CheckCircle className="w-20 h-20 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nenhum desafio completado ainda</h3>
            <p className="text-muted-foreground">Complete desafios ativos para vê-los aqui!</p>
          </div>
        )}

        {activeTab === "ranking" && (
          <div className="text-center py-16">
            <Trophy className="w-20 h-20 text-yellow-500/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rankings em breve</h3>
            <p className="text-muted-foreground">Os rankings de desafios serão exibidos aqui</p>
          </div>
        )}
      </div>
    </div>
  )
}
