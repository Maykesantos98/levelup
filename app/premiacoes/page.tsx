import { Gift, Lock, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const unlockedRewards = [
  {
    id: 1,
    title: "Badge Iniciante",
    description: "Sua primeira conquista na jornada de aprendizado!",
    icon: "🌱",
    rarity: "common",
    requirement: "Nível 1",
    badge: "Badge Digital Iniciante",
    unlocked: true,
  },
]

const lockedRewards = [
  {
    id: 2,
    title: "Vale-Café Starbucks",
    description: "Voucher de R$ 50 para usar no Starbucks",
    icon: "☕",
    iconBg: "from-green-700 to-green-900",
    rarity: "rare",
    level: 3,
    progress: 0,
    maxXP: 900,
    requirement: "Faltam 900 XP para Nível 3",
  },
  {
    id: 3,
    title: "Vale-Café",
    description: "Voucher de café especial",
    icon: "☕",
    rarity: "common",
    locked: true,
  },
  {
    id: 4,
    title: "Meio Dia de Folga",
    description: "Meio dia de folga especial",
    icon: "🏖️",
    rarity: "rare",
    locked: true,
  },
]

export default function PremiacoesPage() {
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
            <div
              className={`w-20 h-20 bg-gradient-to-br ${lockedRewards[0].iconBg} rounded-2xl flex items-center justify-center text-4xl`}
            >
              {lockedRewards[0].icon}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">{lockedRewards[0].title}</h2>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                      Nível {lockedRewards[0].level}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{lockedRewards[0].description}</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progresso até o desbloqueio</span>
                  <span className="text-green-400 font-semibold">
                    {lockedRewards[0].progress} / {lockedRewards[0].maxXP} XP
                  </span>
                </div>
                <Progress value={(lockedRewards[0].progress / lockedRewards[0].maxXP) * 100} className="h-3" />
                <p className="text-sm text-muted-foreground mt-2">{lockedRewards[0].requirement}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Unlocked Rewards */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold">Recompensas Desbloqueadas (1)</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unlockedRewards.map((reward) => (
              <div key={reward.id} className="bg-card border-2 border-green-500/50 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{reward.icon}</div>
                  <Badge className="bg-green-500/20 text-green-400 border-0">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Desbloqueada
                  </Badge>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg">Badge Iniciante</h3>
                    <Badge variant="outline" className="text-xs border-gray-500/50 text-gray-400">
                      common
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{reward.description}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nível 1</span>
                    <span className="text-green-400">Badge Digital Iniciante</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Locked Rewards */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-6 h-6 text-muted-foreground" />
            <h2 className="text-2xl font-bold">Próximas Recompensas (11)</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lockedRewards.slice(1).map((reward) => (
              <div key={reward.id} className="bg-card border border-border rounded-2xl p-6 opacity-60">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl grayscale">{reward.icon}</div>
                  <Badge
                    variant="outline"
                    className={
                      reward.rarity === "common"
                        ? "text-gray-400 border-gray-500/50"
                        : "text-yellow-400 border-yellow-500/50"
                    }
                  >
                    {reward.rarity}
                  </Badge>
                </div>

                <h3 className="font-bold text-lg mb-2">{reward.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{reward.description}</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="w-4 h-4" />
                  <span>Bloqueado</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
