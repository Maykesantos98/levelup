"use client"

import { MessageSquare, Send, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect, useRef } from "react"
import { useUserStore } from "@/lib/store/user-store"
import { CoachAI, type CoachMessage } from "@/lib/services/coach-ai"

export default function CoachPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<CoachMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { user, missions } = useUserStore()

  useEffect(() => {
    const initialMessage: CoachMessage = {
      id: 1,
      role: "assistant",
      content: CoachAI.getInitialMessage(user),
      timestamp: new Date(),
    }
    setMessages([initialMessage])
  }, [user.name])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (!message.trim()) return

    const userMessage: CoachMessage = {
      id: messages.length + 1,
      role: "user",
      content: message.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setMessage("")
    setIsTyping(true)

    setTimeout(() => {
      const aiResponse: CoachMessage = {
        id: messages.length + 2,
        role: "assistant",
        content: CoachAI.generateResponse(userMessage.content, user, missions),
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 800 + Math.random() * 400)
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center relative">
                <MessageSquare className="w-6 h-6 text-white" />
                <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">Coach IA</h1>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-green-500 font-medium">Online</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Seu mentor virtual personalizado</p>
              </div>
            </div>

            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-white">{user.avatar}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto bg-background">
        <div className="max-w-4xl mx-auto px-6 py-6 space-y-6">
          {messages.map((msg) =>
            msg.role === "assistant" ? (
              <div key={msg.id} className="flex gap-4 animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-card border border-border rounded-2xl rounded-tl-none p-4">
                    {msg.content.split("\n").map((line, i) => (
                      <p key={i} className={i > 0 ? "mt-3" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {msg.timestamp.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            ) : (
              <div key={msg.id} className="flex gap-4 justify-end animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="text-right">
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none px-4 py-3 max-w-md inline-block">
                    <p>{msg.content}</p>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {msg.timestamp.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-white">{user.avatar}</span>
                </div>
              </div>
            ),
          )}

          {isTyping && (
            <div className="flex gap-4 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div className="bg-card border border-border rounded-2xl rounded-tl-none px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-card border-t border-border px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Pergunte sobre missões, progresso, dicas..."
              className="flex-1 h-12 bg-background border-border rounded-xl"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
              disabled={isTyping}
              aria-label="Digite sua mensagem para o Coach IA"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!message.trim() || isTyping}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 px-6"
              aria-label="Enviar mensagem"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            O Coach IA pode te ajudar com dicas, recomendações e acompanhamento do seu progresso
          </p>
        </div>
      </div>
    </div>
  )
}
