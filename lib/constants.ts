export const APP_CONFIG = {
  name: "LevelUp IA",
  description: "Gamificação da Aprendizagem Corporativa",
  version: "1.0.0",
  author: "LevelUp Team",
} as const

export const GAME_CONFIG = {
  xpPerLevel: 100,
  maxLevel: 100,
  streakBonusXP: 50,
  dailyMissionLimit: 5,
} as const

export const CATEGORIES = {
  lideranca: { label: "Liderança", color: "from-yellow-500 to-orange-500", icon: "👑" },
  tecnico: { label: "Técnico", color: "from-blue-500 to-cyan-500", icon: "💻" },
  comunicacao: { label: "Comunicação", color: "from-purple-500 to-pink-500", icon: "💬" },
  gestao: { label: "Gestão", color: "from-green-500 to-emerald-500", icon: "📊" },
  inovacao: { label: "Inovação", color: "from-orange-500 to-red-500", icon: "💡" },
} as const

export const DIFFICULTY_LEVELS = {
  iniciante: { label: "Iniciante", color: "text-green-400", xpMultiplier: 1 },
  intermediario: { label: "Intermediário", color: "text-blue-400", xpMultiplier: 1.5 },
  avancado: { label: "Avançado", color: "text-purple-400", xpMultiplier: 2 },
  expert: { label: "Expert", color: "text-red-400", xpMultiplier: 3 },
} as const

export const RARITY_LEVELS = {
  common: { label: "Comum", color: "text-gray-400", emoji: "⚪" },
  rare: { label: "Raro", color: "text-blue-400", emoji: "🔵" },
  epic: { label: "Épico", color: "text-purple-400", emoji: "🟣" },
  legendary: { label: "Lendário", color: "text-yellow-400", emoji: "🟡" },
} as const

export const NAVIGATION_ITEMS = [
  { name: "Dashboard", href: "/", icon: "Zap" },
  { name: "Missões", href: "/missoes", icon: "Target" },
  { name: "Desafios", href: "/desafios", icon: "Swords" },
  { name: "Rankings", href: "/rankings", icon: "Trophy" },
  { name: "Premiações", href: "/premiacoes", icon: "Gift" },
  { name: "Parceiros", href: "/parceiros", icon: "Link" },
  { name: "Coach IA", href: "/coach", icon: "MessageSquare" },
  { name: "Meu Perfil", href: "/perfil", icon: "User" },
] as const

export const ADMIN_ITEMS = [{ name: "Painel Gestor", href: "/admin", icon: "BarChart3" }] as const

export const TOAST_MESSAGES = {
  missionStarted: (title: string) => ({
    title: "Missão iniciada!",
    description: `Você começou: ${title}`,
  }),
  missionCompleted: (xp: number) => ({
    title: "Missão completada!",
    description: `Você ganhou ${xp} XP!`,
  }),
  challengeJoined: (title: string) => ({
    title: "Desafio aceito!",
    description: `Você entrou no desafio: ${title}`,
  }),
  achievementUnlocked: (title: string) => ({
    title: "Nova conquista!",
    description: `Você desbloqueou: ${title}`,
  }),
  levelUp: (level: number) => ({
    title: "Level Up!",
    description: `Parabéns! Você alcançou o nível ${level}!`,
  }),
} as const

export const LOCAL_STORAGE_KEYS = {
  userStore: "levelup-user-storage",
  theme: "levelup-theme",
  preferences: "levelup-preferences",
} as const
