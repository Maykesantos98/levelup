export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateXP(xp: number): boolean {
  return xp >= 0 && Number.isInteger(xp)
}

export function validateLevel(level: number): boolean {
  return level >= 1 && level <= 100 && Number.isInteger(level)
}

export function calculateLevelFromXP(xp: number): number {
  return Math.floor(xp / 100) + 1
}

export function calculateXPForNextLevel(currentXP: number): number {
  const currentLevel = calculateLevelFromXP(currentXP)
  return currentLevel * 100
}

export function calculateProgressPercentage(current: number, total: number): number {
  if (total === 0) return 0
  return Math.min(Math.max((current / total) * 100, 0), 100)
}

export function formatTimeLeft(days: number): string {
  if (days === 0) return "Terminando em breve!"
  if (days === 1) return "1 dia restante"
  return `${days} dias restantes`
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/<script[^>]*>.*?<\/script>/gi, "")
}
