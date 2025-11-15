"use client"

import { useState } from 'react'
import { Star, Send, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'

interface FeedbackModalProps {
  isOpen: boolean
  onClose: () => void
  missionTitle: string
  onSubmit: (rating: number, feedback: string) => void
}

export function FeedbackModal({ isOpen, onClose, missionTitle, onSubmit }: FeedbackModalProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [feedback, setFeedback] = useState('')

  const handleSubmit = () => {
    if (rating > 0) {
      onSubmit(rating, feedback)
      setRating(0)
      setFeedback('')
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#1a1f3a] border-[#2a3284] max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white flex items-center justify-between">
            Avalie sua experiência
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Mission Title */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">Missão concluída:</p>
            <p className="text-white font-semibold">{missionTitle}</p>
          </div>

          {/* Star Rating */}
          <div className="space-y-2">
            <p className="text-gray-300 text-sm text-center">Como você avalia esta missão?</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 transition-colors ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-500 text-yellow-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Text */}
          <div className="space-y-2">
            <label className="text-gray-300 text-sm">
              Compartilhe sua experiência (opcional)
            </label>
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="O que você achou desta missão? Sugestões de melhoria..."
              className="bg-[#0a0e27] border-[#2a3284] text-white min-h-[100px] resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={rating === 0}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4 mr-2" />
            Enviar Avaliação
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
