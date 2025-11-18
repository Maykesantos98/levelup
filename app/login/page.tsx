"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Crown, Mail, Lock, Loader2, User, Briefcase, UserCog, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuthStore } from "@/lib/store/auth-store"
import { demoUsers } from "@/lib/types/auth"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuthStore()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const result = await login({ email, password })

    if (result.success) {
      router.push("/")
      router.refresh()
    } else {
      setError(result.error || "Erro ao fazer login")
    }

    setIsLoading(false)
  }

  const quickLogin = async (user: typeof demoUsers[0]) => {
    setEmail(user.email)
    setPassword(user.password)
    setError("")
    setIsLoading(true)

    const result = await login({ email: user.email, password: user.password })

    if (result.success) {
      router.push("/")
      router.refresh()
    } else {
      setError(result.error || "Erro ao fazer login")
    }

    setIsLoading(false)
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'candidate':
        return User
      case 'employee':
        return Briefcase
      case 'manager':
        return UserCog
      case 'rh':
        return Shield
      default:
        return User
    }
  }

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'candidate':
        return 'Candidato'
      case 'employee':
        return 'Funcionário'
      case 'manager':
        return 'Gestor'
      case 'rh':
        return 'RH'
      default:
        return role
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[oklch(0.1_0.02_250)] via-[oklch(0.12_0.03_240)] to-[oklch(0.1_0.02_250)] p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6 items-stretch">
        
        {/* Left side - Login form */}
        <Card className="flex-1 border-border/50 bg-card/80 backdrop-blur-md shadow-2xl">
          <CardHeader className="space-y-6 text-center pb-8">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                  <Crown className="w-12 h-12 text-white" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div>
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                LevelUp IA
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Gamificação Corporativa e Rede Profissional
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6 px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-cyan-400 transition-colors" aria-hidden="true" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 h-11 bg-background/50 border-border/50 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    required
                    disabled={isLoading}
                    aria-label="Email de login"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Senha</Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-cyan-400 transition-colors" aria-hidden="true" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-11 h-11 bg-background/50 border-border/50 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    required
                    disabled={isLoading}
                    aria-label="Senha de login"
                  />
                </div>
              </div>

              {error && (
                <Alert variant="destructive" className="bg-red-500/10 border-red-500/50">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25 transition-all" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                    Entrando...
                  </>
                ) : (
                  "Entrar na Plataforma"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex-1 space-y-4">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-foreground mb-2">Acesso Rápido</h2>
            <p className="text-sm text-muted-foreground">Clique em um perfil para entrar diretamente</p>
          </div>

          <div className="grid gap-4">
            {demoUsers.map((user) => {
              const Icon = getRoleIcon(user.role)
              return (
                <Card
                  key={user.id}
                  className="border-border/50 bg-card/80 backdrop-blur-md hover:bg-card/90 transition-all cursor-pointer group shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() => quickLogin(user)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      quickLogin(user)
                    }
                  }}
                  aria-label={`Login rápido como ${user.name}`}
                >
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className={`
                      w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110
                      ${user.role === 'candidate' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                        user.role === 'employee' ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                        user.role === 'manager' ? 'bg-gradient-to-br from-orange-500 to-yellow-500' :
                        'bg-gradient-to-br from-green-500 to-emerald-500'}
                    `}>
                      <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-base text-foreground truncate">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{getRoleLabel(user.role)}</p>
                      <p className="text-xs text-muted-foreground/70 mt-1 truncate">{user.email}</p>
                    </div>
                    <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="border-border/50 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md">
            <CardContent className="p-4 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-2">Sobre a Plataforma:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Gamificação completa com missões e desafios</li>
                <li>Rede profissional integrada</li>
                <li>Sistema de recompensas e certificados</li>
                <li>Dashboard analytics e progresso</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
