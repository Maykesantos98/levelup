"use client"

import { Trophy, Crown, Medal } from "lucide-react"
import { mockRankings } from "@/lib/data/mock-data"
import { useUserStore } from "@/lib/store/user-store"

export default function RankingsPage() {
  const { user } = useUserStore()
  const topPlayers = mockRankings.slice(0, 2)
  const allPlayers = mockRankings

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[oklch(0.35_0.2_265)] to-[oklch(0.25_0.15_240)] px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Trophy className="w-10 h-10 text-yellow-400" />
            <h1 className="text-5xl font-bold text-yellow-400">Rankings</h1>
          </div>
          <p className="text-blue-100 text-lg">Os melhores jogadores da plataforma</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12 space-y-12">
        {/* Top Players Podium */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Second Place */}
          <div className="bg-card border-2 border-border rounded-3xl p-8 hover:border-gray-400/50 transition-all">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-500/20 rounded-full flex items-center justify-center mb-4">
                <Medal className="w-10 h-10 text-gray-400" />
              </div>
              <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mb-4 ring-4 ring-gray-400/20">
                <span className="text-3xl font-bold text-white">{topPlayers[1].avatar}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{topPlayers[1].name}</h3>
              <p className="text-sm text-muted-foreground mb-4">Jogador</p>
              <p className="text-4xl font-bold text-gray-400 mb-1">{topPlayers[1].xp} XP</p>
              <p className="text-sm text-muted-foreground">Nível {topPlayers[1].level}</p>
            </div>
          </div>

          {/* First Place - Featured */}
          <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-2 border-yellow-500 rounded-3xl p-8 hover:scale-105 transition-transform">
            <div className="flex flex-col items-center">
              <Crown className="w-12 h-12 text-yellow-400 mb-4 animate-pulse" />
              <div className="w-28 h-28 bg-gradient-to-br from-orange-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 ring-4 ring-yellow-500/30">
                <span className="text-4xl font-bold text-white">{topPlayers[0].avatar}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{topPlayers[0].name}</h3>
              <p className="text-sm text-muted-foreground mb-4">Jogador</p>
              <p className="text-5xl font-bold text-yellow-400 mb-1">{topPlayers[0].xp} XP</p>
              <p className="text-muted-foreground">Nível {topPlayers[0].level}</p>
            </div>
          </div>
        </div>

        {/* Complete Ranking */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-purple-400" />
            <h2 className="text-2xl font-bold">Ranking Completo</h2>
          </div>

          <div className="space-y-3">
            {allPlayers.map((player, index) => (
              <div
                key={player.id}
                className={`bg-card border rounded-2xl p-6 flex items-center gap-6 transition-all hover:scale-[1.02] ${
                  player.isCurrentUser
                    ? "border-primary ring-2 ring-primary/20 bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-4 flex-1">
                  {index === 0 && <Crown className="w-6 h-6 text-yellow-400 animate-pulse" />}
                  {index === 1 && <Medal className="w-6 h-6 text-gray-400" />}
                  {index === 2 && <Medal className="w-6 h-6 text-orange-400" />}

                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${
                      index === 0
                        ? "from-orange-500 to-yellow-500"
                        : index === 1
                          ? "from-gray-400 to-gray-500"
                          : "from-blue-400 to-blue-600"
                    } rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-xl font-bold text-white">{player.avatar}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-bold text-lg">{player.name}</h3>
                      {player.isCurrentUser && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-semibold animate-pulse">
                          Você
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">Jogador • Nível {player.level}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-bold text-yellow-500">{player.xp}</p>
                  <p className="text-xs text-muted-foreground">XP</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
