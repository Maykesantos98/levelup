"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from 'next/navigation'
import { useAuthStore } from "@/lib/store/auth-store"
import type { UserRole } from "@/lib/types/auth"
import { Loader2 } from 'lucide-react'

interface AuthGuardProps {
  children: React.ReactNode
  requiredRoles?: UserRole[]
}

export function AuthGuard({ children, requiredRoles }: AuthGuardProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { isAuthenticated, user, hasAccess } = useAuthStore()

  useEffect(() => {
    // Skip auth check for login page
    if (pathname === "/login") return

    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    if (requiredRoles && !hasAccess(requiredRoles)) {
      router.push("/")
    }
  }, [isAuthenticated, user, pathname, requiredRoles, hasAccess, router])

  // Show loading while checking auth
  if (pathname !== "/login" && !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return <>{children}</>
}
