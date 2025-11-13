export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window === "undefined") return

  // Vercel Analytics
  if (window.va) {
    window.va("track", eventName, properties)
  }

  // Console log in development
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", eventName, properties)
  }
}

export function trackPageView(path: string) {
  trackEvent("pageview", { path })
}

export function trackMissionStart(missionId: string, missionTitle: string) {
  trackEvent("mission_started", { missionId, missionTitle })
}

export function trackMissionComplete(missionId: string, xpGained: number) {
  trackEvent("mission_completed", { missionId, xpGained })
}

export function trackChallengeJoin(challengeId: string, challengeTitle: string) {
  trackEvent("challenge_joined", { challengeId, challengeTitle })
}

export function trackAchievementUnlock(achievementId: string, achievementTitle: string) {
  trackEvent("achievement_unlocked", { achievementId, achievementTitle })
}

export function trackLevelUp(newLevel: number, totalXP: number) {
  trackEvent("level_up", { newLevel, totalXP })
}

declare global {
  interface Window {
    va?: (event: string, name: string, properties?: Record<string, any>) => void
  }
}
