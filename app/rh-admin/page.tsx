'use client'

import { Plus, Trash2, Edit, Target, Gift, Swords, Save, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useUserStore } from '@/lib/store/user-store'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function RHAdminPage() {
  const { missions, challenges } = useUserStore()
  const [activeTab, setActiveTab] = useState<'missoes' | 'beneficios' | 'desafios' | 'premiacoes'>('missoes')
  const [showAddForm, setShowAddForm] = useState(false)

  const [benefits, setBenefits] = useState([
    {
      id: '1',
      title: 'Vale-Refeição',
      description: 'R$ 30,00 por dia útil',
      icon: '🍽️'
    },
    {
      id: '2',
      title: 'Plano de Saúde',
      description: 'Cobertura nacional completa',
      icon: '🏥'
    }
  ])

  const [rewards, setRewards] = useState([
    {
      id: '1',
      title: 'Vale-Café Starbucks',
      description: 'Voucher de R$ 50 para usar no Starbucks',
      icon: '☕',
      rarity: 'common',
      level: 3,
      requiredXp: 900
    },
    {
      id: '2',
      title: 'Meio Dia de Folga',
      description: 'Ganhe meio dia de descanso remunerado',
      icon: '🏖️',
      rarity: 'rare',
      level: 5,
      requiredXp: 1500
    },
    {
      id: '3',
      title: 'Curso Premium Grátis',
      description: 'Escolha um curso premium em qualquer plataforma parceira',
      icon: '📚',
      rarity: 'epic',
      level: 8,
      requiredXp: 3000
    }
  ])

  const handleDeleteMission = (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta missão?')) {
      console.log('[v0] Deleting mission:', id)
      // In real app: call API to delete
    }
  }

  const handleDeleteBenefit = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este benefício?')) {
      setBenefits(benefits.filter(b => b.id !== id))
    }
  }

  const handleDeleteChallenge = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este desafio?')) {
      console.log('[v0] Deleting challenge:', id)
      // In real app: call API to delete
    }
  }

  const handleDeleteReward = (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta premiação?')) {
      setRewards(rewards.filter(r => r.id !== id))
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[oklch(0.35_0.2_265)] to-[oklch(0.25_0.15_240)] px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Administração RH</h1>
              <p className="text-blue-100 text-lg">Gerencie missões, benefícios, desafios e premiações da plataforma</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Tabs */}
        <div className="flex gap-3 border-b border-border pb-4">
          <Button
            variant={activeTab === 'missoes' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('missoes')}
          >
            <Target className="w-4 h-4 mr-2" />
            Missões
          </Button>
          <Button
            variant={activeTab === 'beneficios' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('beneficios')}
          >
            <Gift className="w-4 h-4 mr-2" />
            Benefícios
          </Button>
          <Button
            variant={activeTab === 'desafios' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('desafios')}
          >
            <Swords className="w-4 h-4 mr-2" />
            Desafios
          </Button>
          <Button
            variant={activeTab === 'premiacoes' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('premiacoes')}
          >
            <Award className="w-4 h-4 mr-2" />
            Premiações
          </Button>
        </div>

        {/* Missões */}
        {activeTab === 'missoes' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  Gerenciar Missões ({missions.length})
                </CardTitle>
                <Button onClick={() => setShowAddForm(!showAddForm)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Missão
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {showAddForm && (
                <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4 space-y-3">
                  <Input placeholder="Título da missão" />
                  <Input placeholder="Provedor (ex: Alura, Coursera)" />
                  <Textarea placeholder="Descrição" />
                  <div className="grid grid-cols-3 gap-3">
                    <Input type="number" placeholder="Duração (min)" />
                    <Input type="number" placeholder="XP" />
                    <Input placeholder="Categoria" />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">
                      <Save className="w-4 h-4 mr-2" />
                      Salvar
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setShowAddForm(false)}>
                      Cancelar
                    </Button>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {missions.slice(0, 10).map((mission) => (
                  <div
                    key={mission.id}
                    className="flex items-center justify-between p-4 bg-card border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{mission.icon}</div>
                      <div>
                        <h4 className="font-semibold">{mission.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {mission.provider} • {mission.duration}min • {mission.xp} XP
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-500 hover:text-red-600"
                        onClick={() => handleDeleteMission(mission.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Benefícios */}
        {activeTab === 'beneficios' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-purple-500" />
                  Gerenciar Benefícios ({benefits.length})
                </CardTitle>
                <Button onClick={() => setShowAddForm(!showAddForm)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Benefício
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {showAddForm && (
                <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4 space-y-3">
                  <Input placeholder="Título do benefício" />
                  <Textarea placeholder="Descrição" />
                  <Input placeholder="Ícone (emoji)" />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => {
                      setBenefits([...benefits, {
                        id: Date.now().toString(),
                        title: 'Novo Benefício',
                        description: 'Descrição do benefício',
                        icon: '🎁'
                      }])
                      setShowAddForm(false)
                    }}>
                      <Save className="w-4 h-4 mr-2" />
                      Salvar
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setShowAddForm(false)}>
                      Cancelar
                    </Button>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="flex items-start justify-between p-4 bg-card border border-border rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{benefit.icon}</div>
                      <div>
                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-500 hover:text-red-600"
                        onClick={() => handleDeleteBenefit(benefit.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Desafios */}
        {activeTab === 'desafios' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Swords className="w-5 h-5 text-orange-500" />
                  Gerenciar Desafios ({challenges.length})
                </CardTitle>
                <Button onClick={() => setShowAddForm(!showAddForm)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Desafio
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {showAddForm && (
                <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4 space-y-3">
                  <Input placeholder="Título do desafio" />
                  <Textarea placeholder="Descrição" />
                  <div className="grid grid-cols-3 gap-3">
                    <Input placeholder="Tipo" />
                    <Input type="number" placeholder="XP Recompensa" />
                    <Input placeholder="Prazo" />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">
                      <Save className="w-4 h-4 mr-2" />
                      Salvar
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setShowAddForm(false)}>
                      Cancelar
                    </Button>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {challenges.map((challenge) => (
                  <div
                    key={challenge.id}
                    className="flex items-center justify-between p-4 bg-card border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{challenge.icon}</div>
                      <div>
                        <h4 className="font-semibold">{challenge.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {challenge.type} • {challenge.xpReward} XP • {challenge.participants} participantes
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-500 hover:text-red-600"
                        onClick={() => handleDeleteChallenge(challenge.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Premiações */}
        {activeTab === 'premiacoes' && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  Gerenciar Premiações ({rewards.length})
                </CardTitle>
                <Button onClick={() => setShowAddForm(!showAddForm)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Premiação
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {showAddForm && (
                <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4 space-y-3">
                  <Input placeholder="Título da premiação" />
                  <Textarea placeholder="Descrição" />
                  <div className="grid grid-cols-3 gap-3">
                    <Input placeholder="Ícone (emoji)" />
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="common">Common</option>
                      <option value="rare">Rare</option>
                      <option value="epic">Epic</option>
                    </select>
                    <Input type="number" placeholder="Nível necessário" />
                  </div>
                  <Input type="number" placeholder="XP necessário" />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => {
                      setRewards([...rewards, {
                        id: Date.now().toString(),
                        title: 'Nova Premiação',
                        description: 'Descrição da premiação',
                        icon: '🏆',
                        rarity: 'common',
                        level: 1,
                        requiredXp: 100
                      }])
                      setShowAddForm(false)
                    }}>
                      <Save className="w-4 h-4 mr-2" />
                      Salvar
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setShowAddForm(false)}>
                      Cancelar
                    </Button>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                {rewards.map((reward) => (
                  <div
                    key={reward.id}
                    className="flex items-start justify-between p-4 bg-card border border-border rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{reward.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{reward.title}</h4>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            reward.rarity === 'epic' ? 'bg-purple-500/20 text-purple-300' :
                            reward.rarity === 'rare' ? 'bg-blue-500/20 text-blue-300' :
                            'bg-gray-500/20 text-gray-300'
                          }`}>
                            {reward.rarity}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{reward.description}</p>
                        <p className="text-xs text-muted-foreground">
                          Nível {reward.level} • {reward.requiredXp} XP necessários
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-500 hover:text-red-600"
                        onClick={() => handleDeleteReward(reward.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
