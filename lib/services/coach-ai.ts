import type { User, Mission } from "@/lib/data/mock-data"

export interface CoachMessage {
  id: number
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export class CoachAI {
  private static responses = {
    greeting: [
      "Olá! Como posso ajudar você hoje em sua jornada de aprendizado?",
      "Oi! Que bom te ver por aqui! Como está seu progresso?",
      "Seja bem-vindo! Pronto para aprender algo novo hoje?",
    ],
    missions: [
      "Vejo que você tem {activeMissions} missões ativas. Que tal focar em completar uma delas? Cada missão concluída te dá mais XP!",
      "Você já completou {completedMissions} missões! Continue assim! Recomendo explorar as missões de {suggestedCategory} para diversificar suas habilidades.",
      "Há várias missões disponíveis na plataforma. Posso te sugerir começar pelas de nível {level} que se alinham com seu perfil atual.",
    ],
    progress: [
      "Você está no nível {level} com {xp} XP! Faltam apenas {xpToNext} XP para o próximo nível. Continue assim!",
      "Seu streak de {streak} dias é impressionante! Manter a consistência é a chave para o sucesso.",
      "Com {completedMissions} missões concluídas, você está no caminho certo! Que tal tentar um desafio mais avançado?",
    ],
    motivation: [
      "Lembre-se: cada grande conquista começa com a decisão de tentar. Você está indo muito bem!",
      "O sucesso é a soma de pequenos esforços repetidos dia após dia. Continue firme!",
      "Você é capaz de muito mais do que imagina. Não desista dos seus objetivos!",
    ],
    tips: [
      "Dica: Complete missões diariamente para manter seu streak e ganhar bônus de XP!",
      "Sabia que participar de desafios te dá recompensas exclusivas? Confira a aba de Desafios!",
      "Recomendo dedicar 30 minutos por dia para suas missões. A consistência traz resultados!",
    ],
  }

  private static getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)]
  }

  private static replacePlaceholders(text: string, user: User, missions: Mission[]): string {
    const activeMissions = missions.filter((m) => m.isActive).length
    const xpToNext = (user.level * 100) - user.xp

    return text
      .replace("{level}", user.level.toString())
      .replace("{xp}", user.xp.toString())
      .replace("{xpToNext}", xpToNext.toString())
      .replace("{streak}", user.streak.toString())
      .replace("{completedMissions}", user.completedMissions.toString())
      .replace("{activeMissions}", activeMissions.toString())
      .replace("{suggestedCategory}", this.getSuggestedCategory(missions))
  }

  private static getSuggestedCategory(missions: Mission[]): string {
    const categories = ["Liderança", "Técnico", "Comunicação", "Gestão", "Inovação"]
    return this.getRandomItem(categories)
  }

  public static generateResponse(userMessage: string, user: User, missions: Mission[]): string {
    const message = userMessage.toLowerCase()

    // Saudações
    if (message.match(/oi|olá|ola|hey|hello/)) {
      return this.getRandomItem(this.responses.greeting)
    }

    // Perguntas sobre missões
    if (message.match(/missão|missões|missao|missoes|curso|cursos/)) {
      const response = this.getRandomItem(this.responses.missions)
      return this.replacePlaceholders(response, user, missions)
    }

    // Perguntas sobre progresso
    if (message.match(/progresso|nível|nivel|xp|experiência|experiencia|quanto falta/)) {
      const response = this.getRandomItem(this.responses.progress)
      return this.replacePlaceholders(response, user, missions)
    }

    // Pedidos de motivação
    if (message.match(/motivação|motivacao|desanimado|difícil|dificil|ajuda|help/)) {
      return this.getRandomItem(this.responses.motivation)
    }

    // Pedidos de dicas
    if (message.match(/dica|dicas|sugestão|sugestao|recomend/)) {
      return this.getRandomItem(this.responses.tips)
    }

    // Perguntas sobre streak
    if (message.match(/streak|sequência|sequencia|dias/)) {
      return `Você está com um streak de ${user.streak} dias! ${user.streak >= 7 ? "Incrível! Continue assim!" : "Tente manter a consistência para aumentar seu streak!"}`
    }

    // Perguntas sobre conquistas
    if (message.match(/conquista|conquistas|badge|badges|medalha/)) {
      return `Você já desbloqueou ${user.achievements} conquistas! Confira todas elas na aba de Premiações para ver quais ainda faltam desbloquear.`
    }

    // Perguntas sobre ranking
    if (message.match(/ranking|posição|posicao|rank/)) {
      return "Confira sua posição no ranking na aba Rankings! Competir com outros profissionais te ajuda a manter a motivação e aprender mais rápido."
    }

    // Resposta padrão com contexto
    const xpToNext = (user.level * 100) - user.xp
    return `Entendo sua pergunta! No momento você está no nível ${user.level} com ${user.xp} XP. Você já completou ${user.completedMissions} missões. ${this.getRandomItem([
      "Que tal explorar as missões disponíveis e escolher uma que te interesse?",
      "Recomendo manter o foco e continuar aprendendo todos os dias!",
      "Se precisar de algo específico, me pergunte sobre missões, progresso ou dicas!",
    ])}`
  }

  public static getInitialMessage(user: User): string {
    const greetings = [
      `Olá, ${user.name}! 👋 Seja bem-vindo ao Coach IA!`,
      `Oi, ${user.name}! 😊 Que bom ter você aqui!`,
      `Olá, ${user.name}! Pronto para evoluir hoje?`,
    ]

    const greeting = this.getRandomItem(greetings)
    const xpToNext = (user.level * 100) - user.xp

    return `${greeting}

Vejo que você está no nível ${user.level} com ${user.xp} XP. ${user.completedMissions > 0 ? `Parabéns pelas ${user.completedMissions} missões concluídas!` : "Vamos começar sua jornada de aprendizado!"}

${user.streak > 0 ? `Seu streak de ${user.streak} dias é ótimo! Continue mantendo a consistência. 🔥` : ""}

Posso te ajudar com:
• Recomendações de missões
• Dicas de estudo
• Acompanhamento de progresso
• Motivação e orientação

Como posso te ajudar hoje? 🚀`
  }
}
