"use client"

import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'
import { Zap, Target, Trophy, Gift, LinkIcon, MessageSquare, User, LogOut, BarChart3, Crown, Users, Briefcase, FileText, Award, Shield, TrendingUp, Calendar, Rss } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useUserStore } from "@/lib/store/user-store"
import { useAuthStore } from "@/lib/store/auth-store"
import { memo } from "react"

const menuItemsByRole = {
  candidate: [
    { icon: Users, label: "Rede Profissional", href: "/rede-profissional" },
    { icon: Briefcase, label: "Vagas", href: "/vagas" }, // Added job listings page
    { icon: FileText, label: "Meu Currículo", href: "/meu-curriculo" }, // Added resume page
    { icon: User, label: "Meu Perfil", href: "/perfil" },
  ],
  employee: [
    { icon: Zap, label: "Dashboard", href: "/" },
    { icon: Target, label: "Missões", href: "/missoes" },
    { icon: Target, label: "Desafios", href: "/desafios" },
    { icon: Calendar, label: "Eventos", href: "/eventos" }, // Added new social and gamification features
    { icon: Trophy, label: "Rankings", href: "/rankings" },
    { icon: Gift, label: "Premiações", href: "/premiacoes" },
    { icon: TrendingUp, label: "Meu Progresso", href: "/meu-progresso" },
    { icon: Rss, label: "Feed Social", href: "/feed-social" },
    { icon: Award, label: "Meus Certificados", href: "/meus-certificados" },
    { icon: Users, label: "Rede Profissional", href: "/rede-profissional" },
    { icon: FileText, label: "Meu Currículo", href: "/meu-curriculo" },
    { icon: LinkIcon, label: "Parceiros", href: "/parceiros" },
    { icon: MessageSquare, label: "Coach IA", href: "/coach" },
    { icon: User, label: "Meu Perfil", href: "/perfil" },
  ],
  manager: [
    { icon: BarChart3, label: "Dashboard Gestor", href: "/gestor-dashboard" },
    { icon: Trophy, label: "Rankings", href: "/rankings" },
    { icon: Rss, label: "Feed Social", href: "/feed-social" }, // Added social features for managers
    { icon: Users, label: "Rede Profissional", href: "/rede-profissional" },
    { icon: Target, label: "Missões", href: "/missoes" },
    { icon: User, label: "Meu Perfil", href: "/perfil" },
  ],
  hr: [
    { icon: Shield, label: "Administração RH", href: "/rh-admin" },
    { icon: BarChart3, label: "Dashboard Gestor", href: "/gestor-dashboard" },
    { icon: Rss, label: "Feed Social", href: "/feed-social" }, // Added social and analytics features for HR
    { icon: Users, label: "Rede Profissional", href: "/rede-profissional" },
    { icon: Trophy, label: "Rankings", href: "/rankings" },
    { icon: Calendar, label: "Eventos", href: "/eventos" },
    { icon: Target, label: "Missões", href: "/missoes" },
    { icon: Gift, label: "Premiações", href: "/premiacoes" },
    { icon: User, label: "Meu Perfil", href: "/perfil" },
  ],
}

export const Sidebar = memo(function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { user } = useUserStore()
  const { user: authUser, logout } = useAuthStore()
  const progressPercentage = (user.xp / user.xpToNextLevel) * 100

  if (pathname === "/login") {
    return null
  }

  const menuItems = authUser ? menuItemsByRole[authUser.role] : menuItemsByRole.employee

  const handleNavClick = (href: string, label: string) => {
    // Navigation is handled by Next.js Link component
  }

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  const getRoleTitle = () => {
    if (!authUser) return "Usuário"
    switch (authUser.role) {
      case 'candidate': return "Candidato"
      case 'employee': return "Funcionário"
      case 'manager': return "Gestor"
      case 'hr': return "RH"
      default: return "Usuário"
    }
  }

  return (
    <TooltipProvider delayDuration={200}>
      <aside 
        className="w-72 bg-[oklch(0.1_0.02_250)] border-r border-border/50 flex flex-col fixed left-0 top-0 h-screen z-50 hidden md:flex" 
        role="navigation" 
        aria-label="Menu principal"
      >
        {/* Logo & Header */}
        <div className="p-6 border-b border-border/50">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => handleNavClick("/", "Logo")} aria-label="Voltar para o dashboard">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105" aria-hidden="true">
              <Crown className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-cyan-400">LevelUp IA</h1>
              <p className="text-xs text-muted-foreground">Gamificação Corporativa</p>
            </div>
          </Link>
        </div>

        {authUser && authUser.role !== 'candidate' && (
          <Link
            href="/perfil"
            onClick={() => handleNavClick("/perfil", "User Card")}
            className="block p-4 mx-4 mt-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{authUser.avatar}</span>
                </div>
                {authUser.role === 'employee' && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold border-2 border-[oklch(0.1_0.02_250)] cursor-help">
                        {user.level}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Nível {user.level} - Iniciante</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate text-foreground">{authUser.name}</p>
                <p className="text-xs text-muted-foreground">{getRoleTitle()}</p>
              </div>
            </div>
            {authUser.role === 'employee' && (
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Nível {user.level}</span>
                  <span className="text-cyan-400 font-semibold">{user.xp} XP</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Faltam {user.xpToNextLevel - user.xp} XP para o próximo nível
                </p>
              </div>
            )}
          </Link>
        )}

        {authUser && authUser.role === 'candidate' && (
          <div className="p-4 mx-4 mt-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">{authUser.avatar}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate text-foreground">{authUser.name}</p>
                <p className="text-xs text-muted-foreground">{getRoleTitle()}</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Menu */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Menu Principal
          </p>
          {menuItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.href, item.label)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === item.href
                      ? "bg-[oklch(0.18_0.03_250)] text-foreground shadow-lg shadow-primary/10 scale-[1.02]"
                      : "text-muted-foreground hover:bg-[oklch(0.15_0.025_250)] hover:text-foreground hover:translate-x-1",
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5" aria-hidden="true" />
                  {item.label}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-border/50">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-[oklch(0.15_0.025_250)] hover:text-red-400 transition-all duration-200 w-full hover:translate-x-1"
            aria-label="Sair da conta"
          >
            <LogOut className="w-5 h-5" aria-hidden="true" />
            Sair da Conta
          </button>
        </div>
      </aside>
    </TooltipProvider>
  )
})
