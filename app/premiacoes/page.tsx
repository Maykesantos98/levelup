"use client"

import { Gift, Lock, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useUserStore } from "@/lib/store/user-store"
import { mockRewards } from "@/lib/data/mock-data"

export default function PremiacoesPage() {
  const { achievements, user } = useUserStore()
  const unlockedAchievements = achievements.filter((a) => a.unlocked)
  const lockedAchievements = achievements.filter((a) => !a.unlocked)

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[oklch(0.35_0.2_265)] to-[oklch(0.25_0.15_240)] px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Gift className="w-10 h-10 text-green-400" />
            <h1 className="text-4xl font-bold text-white">Premiações</h1>
          </div>
          <p className="text-blue-100 text-lg">Conquiste recompensas exclusivas ao completar desafios</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-12">
        {/* Featured Locked Reward */}
        <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-3xl p-8">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-700 to-green-900 rounded-2xl flex items-center justify-center text-4xl">
              {mockRewards[0].icon}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">{mockRewards[0].title}</h2>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                      Nível {mockRewards[0].level}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{mockRewards[0].description}</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progresso até o desbloqueio</span>
                  <span className="text-green-400 font-semibold">
                    {user.xp} / {mockRewards[0].requiredXp} XP
                  </span>
                </div>
                <Progress value={(user.xp / (mockRewards[0].requiredXp || 900)) * 100} className="h-3" />
                <p className="text-sm text-muted-foreground mt-2">
                  Faltam {(mockRewards[0].requiredXp || 900) - user.xp} XP para Nível {mockRewards[0].level}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Unlocked Rewards */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold">Recompensas Desbloqueadas ({unlockedAchievements.length})</h2>
          </div>

          {unlockedAchievements.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unlockedAchievements.map((achievement) => (
                <div key={achievement.id} className="bg-card border-2 border-green-500/50 rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <Badge className="bg-green-500/20 text-green-400 border-0">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Desbloqueada
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">{achievement.title}</h3>
                      <Badge variant="outline" className="text-xs border-gray-500/50 text-gray-400">
                        {achievement.rarity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nível {achievement.level}</span>
                      <span className="text-green-400">{achievement.requirement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card/50 rounded-xl border border-border">
              <Gift className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">Complete missões para desbloquear recompensas!</p>
            </div>
          )}
        </div>

        {/* Locked Rewards */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-6 h-6 text-muted-foreground" />
            <h2 className="text-2xl font-bold">
              Próximas Recompensas ({lockedAchievements.length + mockRewards.length - 1})
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lockedAchievements.map((achievement) => (
              <div key={achievement.id} className="bg-card border border-border rounded-2xl p-6 opacity-60">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl grayscale">{achievement.icon}</div>
                  <Badge
                    variant="outline"
                    className={
                      achievement.rarity === "common"
                        ? "text-gray-400 border-gray-500/50"
                        : achievement.rarity === "rare"
                          ? "text-blue-400 border-blue-500/50"
                          : "text-purple-400 border-purple-500/50"
                    }
                  >
                    {achievement.rarity}
                  </Badge>
                </div>

                <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="w-4 h-4" />
                  <span>Nível {achievement.level} necessário</span>
                </div>
              </div>
            ))}

            {mockRewards.slice(1).map((reward) => (
              <div key={reward.id} className="bg-card border border-border rounded-2xl p-6 opacity-60">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl grayscale">{reward.icon}</div>
                  <Badge
                    variant="outline"
                    className={
                      reward.rarity === "common"
                        ? "text-gray-400 border-gray-500/50"
                        : reward.rarity === "rare"
                          ? "text-blue-400 border-blue-500/50"
                          : "text-purple-400 border-purple-500/50"
                    }
                  >
                    {reward.rarity}
                  </Badge>
                </div>

                <h3 className="font-bold text-lg mb-2">{reward.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{reward.description}</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="w-4 h-4" />
                  <span>Nível {reward.level} necessário</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
