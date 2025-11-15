import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trophy, Users, Clock, Calendar, Target, Flame, Star, Zap } from 'lucide-react'

export default function EventosPage() {
  const [inscritoEm, setInscritoEm] = useState<number[]>([])

  const eventos = [
    {
      id: 1,
      nome: 'Desafio Sprint de Código',
      descricao: 'Complete 5 missões de programação em 7 dias e ganhe recompensas exclusivas!',
      tipo: 'competicao',
      dataInicio: '2025-01-20',
      dataFim: '2025-01-27',
      participantes: 142,
      premio: '1000 XP + Badge Exclusivo',
      dificuldade: 'Intermediário',
      icon: Zap,
      color: 'blue'
    },
    {
      id: 2,
      nome: 'Batalha de Equipes',
      descricao: 'Monte sua equipe de 4 pessoas e compete contra outras equipes em desafios colaborativos.',
      tipo: 'equipe',
      dataInicio: '2025-01-22',
      dataFim: '2025-01-29',
      participantes: 89,
      premio: '500 XP por membro + Troféu de Equipe',
      dificuldade: 'Avançado',
      icon: Users,
      color: 'purple'
    },
    {
      id: 3,
      nome: 'Maratona de Aprendizado',
      descricao: 'Aprenda algo novo todos os dias durante uma semana. Streak de 7 dias para ganhar!',
      tipo: 'individual',
      dataInicio: '2025-01-15',
      dataFim: '2025-01-22',
      participantes: 256,
      premio: '750 XP + Badge "Dedicado"',
      dificuldade: 'Iniciante',
      icon: Flame,
      color: 'orange'
    },
    {
      id: 4,
      nome: 'Torneio de UX Design',
      descricao: 'Crie protótipos incríveis e vote nos melhores designs da comunidade.',
      tipo: 'competicao',
      dataInicio: '2025-01-25',
      dataFim: '2025-02-01',
      participantes: 67,
      premio: '1500 XP + Destaque no Perfil',
      dificuldade: 'Avançado',
      icon: Star,
      color: 'pink'
    }
  ]

  const handleInscrever = (eventoId: number) => {
    if (inscritoEm.includes(eventoId)) {
      setInscritoEm(inscritoEm.filter(id => id !== eventoId))
    } else {
      setInscritoEm([...inscritoEm, eventoId])
    }
  }

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-500' },
      purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-500' },
      orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-500' },
      pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-500' }
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-[#0a0e27] p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-500" />
            Eventos e Competições
          </h1>
          <p className="text-gray-400">Participe de desafios temporários e ganhe recompensas exclusivas</p>
        </div>

        {/* Estatísticas Gerais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 p-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-white" />
              <div>
                <h3 className="text-2xl font-bold text-white">4</h3>
                <p className="text-white/80 text-sm">Eventos Ativos</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0 p-6">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-white" />
              <div>
                <h3 className="text-2xl font-bold text-white">554</h3>
                <p className="text-white/80 text-sm">Participantes Total</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-600 to-orange-600 border-0 p-6">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-white" />
              <div>
                <h3 className="text-2xl font-bold text-white">{inscritoEm.length}</h3>
                <p className="text-white/80 text-sm">Minhas Inscrições</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Lista de Eventos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {eventos.map((evento) => {
            const Icon = evento.icon
            const colors = getColorClasses(evento.color)
            const inscrito = inscritoEm.includes(evento.id)

            return (
              <Card
                key={evento.id}
                className={`bg-[#1a1f3a] border-[#2a3284] p-6 hover:border-${evento.color}-500/50 transition-all`}
              >
                {/* Header do Evento */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{evento.nome}</h3>
                      <span className={`text-sm ${colors.text}`}>{evento.tipo.toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-gray-300 mb-4">{evento.descricao}</p>

                {/* Informações */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{evento.dataInicio} até {evento.dataFim}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{evento.participantes} participantes</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Target className="w-4 h-4" />
                    <span>Dificuldade: {evento.dificuldade}</span>
                  </div>
                </div>

                {/* Prêmio */}
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="text-yellow-500 font-semibold">{evento.premio}</span>
                  </div>
                </div>

                {/* Botão */}
                <Button
                  onClick={() => handleInscrever(evento.id)}
                  className={`w-full ${
                    inscrito
                      ? 'bg-gray-600 hover:bg-gray-700'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  }`}
                >
                  {inscrito ? 'Inscrito ✓' : 'Inscrever-se'}
                </Button>
              </Card>
            )
          })}
        </div>

        {/* Histórico de Eventos */}
        <Card className="bg-[#1a1f3a] border-[#2a3284] p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-400" />
            Eventos Anteriores
          </h2>
          <div className="space-y-3">
            {[
              { nome: 'Hacka JavaScript', premio: '800 XP', posicao: '8º lugar' },
              { nome: 'Desafio Python Week', premio: 'Badge + 500 XP', posicao: '3º lugar' },
              { nome: 'React Challenge', premio: '1000 XP', posicao: '12º lugar' }
            ].map((evento, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-[#0a0e27] border border-[#2a3284] rounded-lg"
              >
                <div>
                  <h4 className="text-white font-semibold">{evento.nome}</h4>
                  <p className="text-gray-400 text-sm">{evento.premio}</p>
                </div>
                <span className="text-yellow-500 font-bold">{evento.posicao}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
