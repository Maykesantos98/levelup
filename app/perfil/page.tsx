"use client"

import { User, Trophy, Settings, Shield, Camera, Edit, Target, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useUserStore } from "@/lib/store/user-store"
import { useState } from "react"

export default function PerfilPage() {
  const { user, achievements } = useUserStore()
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen">
      {/* Hero Header with Gradient */}
      <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-6 right-6 bg-black/20 backdrop-blur-sm text-white hover:bg-black/30"
          >
            <Camera className="w-4 h-4 mr-2" />
            Alterar Banner
          </Button>

          <div className="flex items-end gap-6 mt-12">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl border-4 border-white/20 flex items-center justify-center">
                <span className="text-5xl font-bold text-white">{user.avatar}</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-lg font-bold border-4 border-[oklch(0.08_0.02_250)]">
                {user.level}
              </div>
            </div>

            <div className="flex-1 pb-2">
              <h1 className="text-3xl font-bold text-white mb-1">{user.name}</h1>
              <p className="text-blue-100">{user.email}</p>

              <div className="flex items-center gap-8 mt-4">
                <div>
                  <p className="text-4xl font-bold text-yellow-400">{user.xp}</p>
                  <p className="text-sm text-blue-100">Total XP</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-400">{user.streak}</p>
                  <p className="text-sm text-blue-100">Streak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-8 space-y-8">
        {/* Tabs */}
        <div className="flex gap-3 border-b border-border pb-4">
          <Button
            variant={activeTab === "overview" ? "default" : "ghost"}
            onClick={() => setActiveTab("overview")}
            className={activeTab !== "overview" ? "text-muted-foreground" : ""}
          >
            <User className="w-4 h-4 mr-2" />
            Visão Geral
          </Button>
          <Button
            variant={activeTab === "achievements" ? "default" : "ghost"}
            onClick={() => setActiveTab("achievements")}
            className={activeTab !== "achievements" ? "text-muted-foreground" : ""}
          >
            <Trophy className="w-4 h-4 mr-2" />
            Conquistas
          </Button>
          <Button
            variant={activeTab === "settings" ? "default" : "ghost"}
            onClick={() => setActiveTab("settings")}
            className={activeTab !== "settings" ? "text-muted-foreground" : ""}
          >
            <Settings className="w-4 h-4 mr-2" />
            Personalizar
          </Button>
          <Button
            variant={activeTab === "privacy" ? "default" : "ghost"}
            onClick={() => setActiveTab("privacy")}
            className={activeTab !== "privacy" ? "text-muted-foreground" : ""}
          >
            <Shield className="w-4 h-4 mr-2" />
            Privacidade
          </Button>
        </div>

        {/* Stats Cards */}
        {activeTab === "overview" && (
          <>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-blue-500/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-5xl font-bold mb-2">{user.completedMissions}</p>
                <p className="text-muted-foreground">Missões Completas</p>
              </div>

              <div className="bg-card border border-purple-500/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-5xl font-bold mb-2">{user.activeMissions}</p>
                <p className="text-muted-foreground">Missões Ativas</p>
              </div>

              <div className="bg-card border border-yellow-500/30 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <p className="text-5xl font-bold mb-2">{user.achievements}</p>
                <p className="text-muted-foreground">Conquistas</p>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold">Sobre Mim</h2>
                </div>
                <Button variant="ghost" size="sm" className="text-primary">
                  <Edit className="w-4 h-4 mr-2" />
                  Editar
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Nome Completo</p>
                  <p className="font-medium">{user.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Nível</p>
                  <p className="font-medium">Nível {user.level}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">XP Total</p>
                  <p className="font-medium">{user.xp} XP</p>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "achievements" && (
          <div>
            <h3 className="text-lg font-bold mb-4">
              Suas Conquistas ({achievements.filter((a) => a.unlocked).length})
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`bg-card border rounded-xl p-4 ${
                    achievement.unlocked ? "border-green-500/50" : "border-border opacity-50"
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <h4 className="font-semibold mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Configurações de Personalização</h3>
            <p className="text-muted-foreground">Personalize sua experiência no LevelUp IA.</p>
          </div>
        )}

        {activeTab === "privacy" && (
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Configurações de Privacidade</h3>
            <p className="text-muted-foreground">Gerencie suas preferências de privacidade e segurança.</p>
          </div>
        )}
      </div>
    </div>
  )
}
