"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Zap, Target, Trophy, Gift, LinkIcon, MessageSquare, User, LogOut, BarChart3, Crown } from "lucide-react"
import { cn } from "@/lib/utils"

const mainMenuItems = [
  { icon: Zap, label: "Dashboard", href: "/" },
  { icon: Target, label: "Missões", href: "/missoes" },
  { icon: Target, label: "Desafios", href: "/desafios" },
  { icon: Trophy, label: "Rankings", href: "/rankings" },
  { icon: Gift, label: "Premiações", href: "/premiacoes" },
  { icon: LinkIcon, label: "Parceiros", href: "/parceiros" },
  { icon: MessageSquare, label: "Coach IA", href: "/coach" },
  { icon: User, label: "Meu Perfil", href: "/perfil" },
]

const adminItems = [{ icon: BarChart3, label: "Painel Gestor", href: "/admin" }]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-72 bg-[oklch(0.1_0.02_250)] border-r border-border/50 flex flex-col">
      {/* Logo & Header */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
            <Crown className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-cyan-400">LevelUp IA</h1>
            <p className="text-xs text-muted-foreground">Gamificação Corporativa</p>
          </div>
        </div>
      </div>

      {/* User Card */}
      <div className="p-4 mx-4 mt-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">M</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold border-2 border-[oklch(0.1_0.02_250)]">
              1
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate text-foreground">Mayke Costa sa...</p>
            <p className="text-xs text-muted-foreground">Aprendiz</p>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">Nível 1</span>
            <span className="text-cyan-400">0 XP</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-0" />
          </div>
          <p className="text-xs text-muted-foreground mt-1">Faltam 100 XP para o próximo nível</p>
        </div>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Menu Principal</p>
        {mainMenuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-[oklch(0.18_0.03_250)] text-foreground"
                : "text-muted-foreground hover:bg-[oklch(0.15_0.025_250)] hover:text-foreground",
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Link>
        ))}

        <div className="pt-4">
          <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Administração
          </p>
          {adminItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-[oklch(0.18_0.03_250)] text-foreground"
                  : "text-muted-foreground hover:bg-[oklch(0.15_0.025_250)] hover:text-foreground",
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border/50">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-[oklch(0.15_0.025_250)] hover:text-foreground transition-colors w-full">
          <LogOut className="w-5 h-5" />
          Sair da Conta
        </button>
      </div>
    </aside>
  )
}
