"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { AuthUser, LoginCredentials, UserRole } from "@/lib/types/auth"
import { demoUsers } from "@/lib/types/auth"

interface AuthStore {
  user: AuthUser | null
  isAuthenticated: boolean
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  hasAccess: (requiredRoles: UserRole[]) => boolean
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: async (credentials: LoginCredentials) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500))

        const user = demoUsers.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        )

        if (user) {
          const { password, ...authUser } = user
          set({ user: authUser, isAuthenticated: true })
          return { success: true }
        }

        return { success: false, error: 'Email ou senha inválidos' }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false })
      },

      hasAccess: (requiredRoles: UserRole[]) => {
        const { user } = get()
        if (!user) return false
        return requiredRoles.includes(user.role)
      },
    }),
    {
      name: "levelup-auth-storage",
    }
  )
)
