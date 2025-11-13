"use client"

import { MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useUserStore } from "@/lib/store/user-store"

export default function CoachPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content:
        "Olá, Mayke! 😊 Tudo bem com você? Estou aqui para te ajudar na sua jornada de aprendizado!\n\nSe você tiver alguma dúvida sobre as missões ou precisar de dicas de estudo, é só me avisar! Lembre-se, cada pequeno passo conta e você está apenas começando. Vamos juntos conquistar seus objetivos! 🚀\n\nComo posso te ajudar hoje?",
    },
  ])

  const { user } = useUserStore()

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        role: "user",
        content: message,
      },
    ])

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          role: "assistant",
          content:
            "Entendo! Estou aqui para ajudar. Que tal começarmos explorando as missões disponíveis? Você pode acessar a página de Missões e escolher um curso que se alinha com seus objetivos!",
        },
      ])
    }, 1000)

    setMessage("")
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
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
        <div className="max-w-4xl mx-auto px-8 py-8 space-y-6">
          {messages.map((msg) =>
            msg.role === "assistant" ? (
              <div key={msg.id} className="flex gap-4">
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
                </div>
              </div>
            ) : (
              <div key={msg.id} className="flex gap-4 justify-end">
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none px-4 py-3 max-w-md">
                  <p>{msg.content}</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-white">{user.avatar}</span>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-card border-t border-border px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 h-12 bg-background border-border rounded-xl"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 px-6"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
