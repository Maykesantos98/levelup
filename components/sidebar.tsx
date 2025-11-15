"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Zap, Target, Trophy, Gift, LinkIcon, MessageSquare, User, LogOut, BarChart3, Crown, Users } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useUserStore } from "@/lib/store/user-store"

const mainMenuItems = [
  { icon: Zap, label: "Dashboard", href: "/" },
  { icon: Target, label: "Missões", href: "/missoes" },
  { icon: Target, label: "Desafios", href: "/desafios" },
  { icon: Trophy, label: "Rankings", href: "/rankings" },
  { icon: Gift, label: "Premiações", href: "/premiacoes" },
  { icon: Users, label: "Rede Profissional", href: "/rede-profissional" }, // Added professional network menu item
  { icon: LinkIcon, label: "Parceiros", href: "/parceiros" },
  { icon: MessageSquare, label: "Coach IA", href: "/coach" },
  { icon: User, label: "Meu Perfil", href: "/perfil" },
]

const adminItems = [{ icon: BarChart3, label: "Painel Gestor", href: "/admin" }]

export function Sidebar() {
  const pathname = usePathname()
  const { user } = useUserStore()
  const progressPercentage = (user.xp / user.xpToNextLevel) * 100

  const handleNavClick = (href: string, label: string) => {
    console.log("[v0] Navigation clicked:", label, href)
  }

  return (
    <TooltipProvider delayDuration={200}>
      <aside className="w-72 bg-[oklch(0.1_0.02_250)] border-r border-border/50 flex flex-col fixed left-0 top-0 h-screen z-40">
        {/* Logo & Header */}
        <div className="p-6 border-b border-border/50">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => handleNavClick("/", "Logo")}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105">
              <Crown className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-cyan-400">LevelUp IA</h1>
              <p className="text-xs text-muted-foreground">Gamificação Corporativa</p>
            </div>
          </Link>
        </div>

        {/* User Card */}
        <Link
          href="/perfil"
          onClick={() => handleNavClick("/perfil", "User Card")}
          className="block p-4 mx-4 mt-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">{user.avatar}</span>
              </div>
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
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate text-foreground">{user.name}</p>
              <p className="text-xs text-muted-foreground">Aprendiz</p>
            </div>
          </div>
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
        </Link>

        {/* Main Menu */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Menu Principal
          </p>
          {mainMenuItems.map((item) => (
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
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}

          <div className="pt-4">
            <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Administração
            </p>
            {adminItems.map((item) => (
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
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-border/50">
          <button
            onClick={() => console.log("[v0] Logout clicked")}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-[oklch(0.15_0.025_250)] hover:text-red-400 transition-all duration-200 w-full hover:translate-x-1"
          >
            <LogOut className="w-5 h-5" />
            Sair da Conta
          </button>
        </div>
      </aside>
    </TooltipProvider>
  )
}
