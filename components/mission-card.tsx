"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Zap, ExternalLink, Target, CheckCircle } from 'lucide-react'
import type { Mission } from "@/lib/data/mock-data"
import { useState, memo } from "react"
import { FeedbackModal } from "./feedback-modal"
import { useToast } from "@/hooks/use-toast"
import { useUserStore } from "@/lib/store/user-store"

interface MissionCardProps {
  mission: Mission
  onStart: (missionId: string, missionTitle: string) => void
}

export const MissionCard = memo(function MissionCard({ mission, onStart }: MissionCardProps) {
  const [showFeedback, setShowFeedback] = useState(false)
  const { toast } = useToast()
  const { completeMission } = useUserStore()

  const handleCompleteMission = () => {
    completeMission(mission.id)
    setShowFeedback(true)
  }

  const handleFeedbackSubmit = (rating: number, feedback: string) => {
    toast({
      title: "Obrigado pelo feedback!",
      description: "Sua avaliação nos ajuda a melhorar a plataforma.",
    })
  }


  return (
    <>
      <Card className="border border-border rounded-2xl hover:border-primary/50 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 group cursor-pointer">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div 
              className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg"
              aria-hidden="true"
            >
              {mission.icon}
            </div>
            <div className="flex gap-2 flex-wrap justify-end">
              <Badge
                variant="secondary"
                className="bg-blue-500/20 text-blue-300 border-0 hover:bg-blue-500/30 transition-colors"
              >
                {mission.provider}
              </Badge>
              <Badge
                variant="outline"
                className={
                  mission.difficulty === "iniciante"
                    ? "border-green-500/50 text-green-400 hover:bg-green-500/10 transition-colors"
                    : mission.difficulty === "intermediario"
                      ? "border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-colors"
                      : mission.difficulty === "avancado"
                        ? "border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-colors"
                        : "border-red-500/50 text-red-400 hover:bg-red-500/10 transition-colors"
                }
              >
                {mission.difficulty}
              </Badge>
            </div>
          </div>

          <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {mission.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{mission.description}</p>

          <div className="flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span aria-label={`Duração de ${mission.duration} minutos`}>{mission.duration} min</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-500 font-semibold">
              <Zap className="w-4 h-4" aria-hidden="true" />
              <span aria-label={`Ganhe ${mission.xp} pontos de experiência`}>{mission.xp} XP</span>
            </div>
          </div>

          {mission.isActive ? (
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full border-green-500/50 text-green-400 hover:bg-green-500/10 bg-transparent"
                disabled
                aria-label="Missão já está ativa"
              >
                <Target className="w-4 h-4 mr-2" aria-hidden="true" />
                Missão Ativa
              </Button>
              <Button
                onClick={handleCompleteMission}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                aria-label={`Concluir missão ${mission.title}`}
              >
                <CheckCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                Concluir Missão
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => onStart(mission.id, mission.title)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all group/btn"
              aria-label={`Iniciar missão ${mission.title}`}
            >
              <span>Iniciar Missão</span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          )}
        </CardContent>
      </Card>

      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
        missionTitle={mission.title}
        onSubmit={handleFeedbackSubmit}
      />
    </>
  )
})
