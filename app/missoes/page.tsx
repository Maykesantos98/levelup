"use client"

import { Search, Filter, Crown, Lightbulb, Laptop, MessageCircle, Briefcase, Target } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { useUserStore } from "@/lib/store/user-store"
import { useToast } from "@/hooks/use-toast"
import { MissionCard } from "@/components/mission-card"

const categories = [
  { id: "all", label: "Todas", icon: null },
  { id: "lideranca", label: "Liderança", icon: Crown },
  { id: "tecnico", label: "Técnico", icon: Laptop },
  { id: "comunicacao", label: "Comunicação", icon: MessageCircle },
  { id: "gestao", label: "Gestão", icon: Briefcase },
  { id: "inovacao", label: "Inovação", icon: Lightbulb },
]

const difficulties = ["Todas", "iniciante", "intermediario", "avancado", "expert"]

export default function MissoesPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("Todas")
  const [searchQuery, setSearchQuery] = useState("")

  const { missions, startMission } = useUserStore()
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)
  }, [])


  const filteredMissions = missions.filter((mission) => {
    const matchesCategory = selectedCategory === "all" || mission.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "Todas" || mission.difficulty === selectedDifficulty
    const matchesSearch =
      searchQuery === "" ||
      mission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mission.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mission.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesDifficulty && matchesSearch
  })

  const handleStartMission = (missionId: string, missionTitle: string) => {
    startMission(missionId)
    toast({
      title: "Missão iniciada!",
      description: `Você começou: ${missionTitle}`,
    })
  }

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  const handleDifficultyClick = (difficulty: string) => {
    setSelectedDifficulty(difficulty)
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
  }

  const handleClearFilters = () => {
    setSelectedCategory("all")
    setSelectedDifficulty("Todas")
    setSearchQuery("")
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" aria-label="Carregando missões"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[oklch(0.35_0.2_265)] to-[oklch(0.25_0.15_240)] px-8 py-12 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse" aria-hidden="true">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Explorar Missões</h1>
          </div>
          <p className="text-blue-100 text-lg">Escolha seus desafios e evolua suas habilidades</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10" aria-hidden="true" />
          <Input
            placeholder="Buscar missões..."
            className="pl-12 h-12 bg-card border-border rounded-xl text-base focus:border-primary transition-colors"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            aria-label="Buscar missões por nome, provedor ou descrição"
          />
        </div>

        {/* Category Filter */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <p className="text-sm font-medium text-muted-foreground">Categoria</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id
              return (
                <Button
                  key={cat.id}
                  type="button"
                  variant={isActive ? "default" : "outline"}
                  className={
                    isActive
                      ? "bg-primary shadow-lg shadow-primary/25 pointer-events-auto"
                      : "border-border hover:border-primary/50 transition-all hover:scale-105 pointer-events-auto"
                  }
                  onClick={() => handleCategoryClick(cat.id)}
                  aria-label={`Filtrar por categoria ${cat.label}`}
                  aria-pressed={isActive}
                >
                  {cat.icon && <cat.icon className="w-4 h-4 mr-2" aria-hidden="true" />}
                  {cat.label}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <p className="text-sm font-medium text-muted-foreground">Dificuldade</p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por dificuldade">
            {difficulties.map((diff) => {
              const isActive = selectedDifficulty === diff
              return (
                <Button
                  key={diff}
                  type="button"
                  variant={isActive ? "default" : "outline"}
                  className={
                    isActive
                      ? "bg-primary shadow-lg shadow-primary/25 pointer-events-auto"
                      : "border-border hover:border-primary/50 transition-all hover:scale-105 pointer-events-auto"
                  }
                  onClick={() => handleDifficultyClick(diff)}
                  aria-label={`Filtrar por dificuldade ${diff}`}
                  aria-pressed={isActive}
                >
                  {diff}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <p>
            Mostrando <span className="font-semibold text-foreground">{filteredMissions.length}</span> missões
          </p>
          {(selectedCategory !== "all" || selectedDifficulty !== "Todas" || searchQuery) && (
            <Button type="button" variant="ghost" size="sm" onClick={handleClearFilters} aria-label="Limpar todos os filtros">
              Limpar filtros
            </Button>
          )}
        </div>

        {/* Missions Grid */}
        {filteredMissions.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4" role="list" aria-label="Lista de missões disponíveis">
            {filteredMissions.map((mission) => (
              <div key={mission.id} role="listitem">
                <MissionCard mission={mission} onStart={handleStartMission} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Target className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" aria-hidden="true" />
            <p className="text-muted-foreground mb-2">Nenhuma missão encontrada com os filtros selecionados</p>
            <Button type="button" variant="outline" onClick={handleClearFilters}>
              Limpar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
