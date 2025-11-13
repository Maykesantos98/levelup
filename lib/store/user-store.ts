"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { User, Mission, Achievement, Challenge } from "@/lib/data/mock-data"
import { mockUser, mockMissions, mockAchievements, mockChallenges } from "@/lib/data/mock-data"

interface UserStore {
  user: User
  missions: Mission[]
  achievements: Achievement[]
  challenges: Challenge[]
  updateUser: (userData: Partial<User>) => void
  startMission: (missionId: string) => void
  completeMission: (missionId: string) => void
  updateMissionProgress: (missionId: string, progress: number) => void
  unlockAchievement: (achievementId: string) => void
  addXP: (amount: number) => void
  incrementStreak: () => void
  joinChallenge: (challengeId: string) => void
  resetProgress: () => void
  getMissionsByCategory: (category: string) => Mission[]
  getActiveMissions: () => Mission[]
  checkAndUnlockAchievements: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: mockUser,
      missions: mockMissions,
      achievements: mockAchievements,
      challenges: mockChallenges,

      updateUser: (userData) =>
        set((state) => ({
          user: { ...state.user, ...userData },
        })),

      startMission: (missionId) =>
        set((state) => {
          const missions = state.missions.map((m) => (m.id === missionId ? { ...m, isActive: true } : m))
          const activeMissions = missions.filter((m) => m.isActive).length
          return {
            missions,
            user: { ...state.user, activeMissions },
          }
        }),

      completeMission: (missionId) =>
        set((state) => {
          const mission = state.missions.find((m) => m.id === missionId)
          if (!mission) return state

          const missions = state.missions.map((m) =>
            m.id === missionId ? { ...m, isActive: false, progress: 100 } : m,
          )

          const newXP = state.user.xp + mission.xp
          const newLevel = Math.floor(newXP / 100) + 1
          const completedMissions = state.user.completedMissions + 1

          setTimeout(() => {
            get().checkAndUnlockAchievements()
          }, 100)

          return {
            missions,
            user: {
              ...state.user,
              xp: newXP,
              level: newLevel,
              completedMissions,
              activeMissions: missions.filter((m) => m.isActive).length,
            },
          }
        }),

      updateMissionProgress: (missionId, progress) =>
        set((state) => ({
          missions: state.missions.map((m) => (m.id === missionId ? { ...m, progress } : m)),
        })),

      unlockAchievement: (achievementId) =>
        set((state) => {
          const achievements = state.achievements.map((a) => (a.id === achievementId ? { ...a, unlocked: true } : a))
          const unlockedCount = achievements.filter((a) => a.unlocked).length
          return {
            achievements,
            user: { ...state.user, achievements: unlockedCount },
          }
        }),

      addXP: (amount) =>
        set((state) => {
          const newXP = state.user.xp + amount
          const newLevel = Math.floor(newXP / 100) + 1
          return {
            user: {
              ...state.user,
              xp: newXP,
              level: newLevel,
            },
          }
        }),

      incrementStreak: () =>
        set((state) => ({
          user: {
            ...state.user,
            streak: state.user.streak + 1,
          },
        })),

      joinChallenge: (challengeId) =>
        set((state) => ({
          challenges: state.challenges.map((c) =>
            c.id === challengeId ? { ...c, participants: c.participants + 1 } : c,
          ),
        })),

      resetProgress: () =>
        set({
          user: mockUser,
          missions: mockMissions,
          achievements: mockAchievements,
          challenges: mockChallenges,
        }),

      getMissionsByCategory: (category: string) => {
        const state = get()
        return category === "all" ? state.missions : state.missions.filter((m) => m.category === category)
      },

      getActiveMissions: () => {
        const state = get()
        return state.missions.filter((m) => m.isActive)
      },

      checkAndUnlockAchievements: () => {
        const state = get()
        const { user, missions, achievements } = state

        // Check "Primeira Missão"
        if (user.completedMissions >= 1 && !achievements.find((a) => a.id === "2")?.unlocked) {
          get().unlockAchievement("2")
        }

        // Check "Streak de 7 Dias"
        if (user.streak >= 7 && !achievements.find((a) => a.id === "3")?.unlocked) {
          get().unlockAchievement("3")
        }

        // Check "Mestre do Conhecimento"
        if (user.completedMissions >= 10 && !achievements.find((a) => a.id === "4")?.unlocked) {
          get().unlockAchievement("4")
        }

        // Check category-specific achievements
        const completedMissions = missions.filter((m) => m.progress === 100)
        const inovacaoCount = completedMissions.filter((m) => m.category === "inovacao").length
        const tecnicoCount = completedMissions.filter((m) => m.category === "tecnico").length

        if (inovacaoCount >= 5 && !achievements.find((a) => a.id === "5")?.unlocked) {
          get().unlockAchievement("5")
        }

        if (tecnicoCount >= 5 && !achievements.find((a) => a.id === "7")?.unlocked) {
          get().unlockAchievement("7")
        }
      },
    }),
    {
      name: "levelup-user-storage",
    },
  ),
)
