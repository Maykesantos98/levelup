'use client'

import { Award, Download, Share2, Trophy, Calendar, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useUserStore } from '@/lib/store/user-store'

export default function MeusCertificadosPage() {
  const { user, achievements } = useUserStore()
  
  const unlockedAchievements = achievements.filter(a => a.unlocked)
  
  const certificates = [
    {
      id: '1',
      title: 'Certificado de Conclusão - Design Thinking',
      provider: 'Escola Design Thinking',
      date: '2025-01-15',
      hours: 80,
      badge: '💡',
      verified: true
    },
    {
      id: '2',
      title: 'Python para Data Science',
      provider: 'Alura',
      date: '2025-01-10',
      hours: 60,
      badge: '💻',
      verified: true
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[oklch(0.35_0.2_265)] to-[oklch(0.25_0.15_240)] px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-10 h-10 text-yellow-400" />
            <h1 className="text-4xl font-bold text-white">Meus Certificados</h1>
          </div>
          <p className="text-blue-100 text-lg">Suas conquistas e certificações profissionais</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border border-yellow-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Certificados Conquistados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{certificates.length}</div>
            </CardContent>
          </Card>

          <Card className="border border-purple-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Award className="w-4 h-4" />
                Conquistas Desbloqueadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{unlockedAchievements.length}</div>
            </CardContent>
          </Card>

          <Card className="border border-blue-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Horas de Treinamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{certificates.reduce((acc, c) => acc + c.hours, 0)}h</div>
            </CardContent>
          </Card>
        </div>

        {/* Certificates */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              Certificados Profissionais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{cert.badge}</div>
                    {cert.verified && (
                      <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verificado
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.provider}</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Concluído em {new Date(cert.date).toLocaleDateString('pt-BR')} • {cert.hours}h
                  </p>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar PDF
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {certificates.length === 0 && (
              <div className="text-center py-12">
                <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">Você ainda não possui certificados.</p>
                <p className="text-sm text-muted-foreground">Complete missões para ganhar certificações!</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-purple-500" />
              Conquistas Desbloqueadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              {unlockedAchievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-card border border-green-500/50 rounded-xl p-4 text-center"
                >
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  <div className="mt-2 text-xs text-green-400">
                    Nível {achievement.level}
                  </div>
                </div>
              ))}
            </div>

            {unlockedAchievements.length === 0 && (
              <div className="text-center py-12">
                <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">Você ainda não desbloqueou conquistas.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
