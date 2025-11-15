'use client'

import { BarChart3, Users, Trophy, TrendingUp, Award, UserPlus, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useUserStore } from '@/lib/store/user-store'
import { mockRankings } from '@/lib/data/mock-data'
import { useState } from 'react'

export default function GestorDashboardPage() {
  const { missions, achievements, challenges } = useUserStore()
  const [selectedUser, setSelectedUser] = useState<string | null>(null)
  const [showPromoteModal, setShowPromoteModal] = useState(false)

  const totalUsers = mockRankings.length
  const activeMissions = missions.filter((m) => m.isActive).length
  const totalAchievements = achievements.length

  const handlePromote = (userId: string, role: 'employee' | 'hr') => {
    console.log(`[v0] Promoting user ${userId} to ${role}`)
    setShowPromoteModal(false)
    // In real app: call API
  }

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[oklch(0.35_0.2_265)] to-[oklch(0.25_0.15_240)] px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <BarChart3 className="w-10 h-10 text-cyan-400" />
            <h1 className="text-4xl font-bold text-white">Dashboard Gestor</h1>
          </div>
          <p className="text-blue-100 text-lg">Visão completa de estatísticas e gestão de usuários</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6">
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
                <Trophy className="w-4 h-4" />
                Missões Ativas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{activeMissions}</div>
              <p className="text-xs text-muted-foreground mt-1">de {missions.length} totais</p>
            </CardContent>
          </Card>

          <Card className="border border-yellow-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Award className="w-4 h-4" />
                Conquistas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalAchievements}</div>
            </CardContent>
          </Card>

          <Card className="border border-orange-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Taxa Conclusão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">0%</div>
            </CardContent>
          </Card>
        </div>

        {/* Ranking Completo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Ranking Completo de Usuários
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockRankings.map((player, index) => (
                <div
                  key={player.id}
                  className={`flex items-center gap-4 p-4 rounded-lg ${
                    index < 3 ? 'bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/30' : 'bg-card/50 border border-border'
                  }`}
                >
                  <div className="w-8 text-center">
                    {index === 0 && <span className="text-2xl">🥇</span>}
                    {index === 1 && <span className="text-2xl">🥈</span>}
                    {index === 2 && <span className="text-2xl">🥉</span>}
                    {index > 2 && <span className="font-bold text-muted-foreground">#{player.rank}</span>}
                  </div>
                  
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="font-bold text-white">{player.avatar}</span>
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-semibold">{player.name}</p>
                    <p className="text-sm text-muted-foreground">Nível {player.level}</p>
                  </div>
                  
                  <div className="text-right mr-4">
                    <p className="font-bold text-yellow-500">{player.xp} XP</p>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      setSelectedUser(player.id)
                      setShowPromoteModal(true)
                    }}
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Promover
                  </Button>
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
              Estatísticas da Plataforma
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
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Satisfação dos Usuários</span>
                  <span className="font-semibold">85%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 w-[85%]" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Promote Modal */}
      {showPromoteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Promover Usuário</h3>
            <p className="text-muted-foreground mb-6">Selecione a nova função para o usuário:</p>
            
            <div className="space-y-3">
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => handlePromote(selectedUser!, 'employee')}
              >
                <Users className="w-4 h-4 mr-2" />
                Funcionário
                <span className="text-xs text-muted-foreground ml-auto">Acesso às missões e desafios</span>
              </Button>
              
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => handlePromote(selectedUser!, 'hr')}
              >
                <Shield className="w-4 h-4 mr-2" />
                RH
                <span className="text-xs text-muted-foreground ml-auto">Acesso administrativo completo</span>
              </Button>
            </div>

            <Button
              className="w-full mt-4"
              variant="ghost"
              onClick={() => setShowPromoteModal(false)}
            >
              Cancelar
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
