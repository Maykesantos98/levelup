"use client"

import { useState, useMemo } from "react"
import { Search, Users, MapPin, Briefcase, Filter } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import professionalsData from "@/lib/data/professionals.json"

interface Professional {
  id: number
  nome: string
  foto: string
  cargo: string
  resumo: string
  localizacao: string
  area: string
  habilidadesTecnicas: string[]
  softSkills: string[]
  experiencias: Array<{
    empresa: string
    cargo: string
    inicio: string
    fim: string | null
    descricao: string
  }>
  formacao: Array<{
    curso: string
    instituicao: string
    ano: number
  }>
  projetos: Array<{
    titulo: string
    link: string
    descricao: string
  }>
  certificacoes: string[]
  idiomas: Array<{
    idioma: string
    nivel: string
  }>
  areaInteresses: string[]
}

export default function RedeProfissional() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArea, setSelectedArea] = useState("Todas")
  const [selectedCity, setSelectedCity] = useState("Todas")
  const [selectedTech, setSelectedTech] = useState("Todas")
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null)
  const [messageModal, setMessageModal] = useState(false)
  const [recommendModal, setRecommendModal] = useState(false)

  const professionals: Professional[] = professionalsData

  // Extract unique values for filters
  const areas = useMemo(() => ["Todas", ...new Set(professionals.map((p) => p.area))], [])
  const cities = useMemo(() => ["Todas", ...new Set(professionals.map((p) => p.localizacao))], [])
  const technologies = useMemo(() => {
    const allTechs = professionals.flatMap((p) => p.habilidadesTecnicas)
    return ["Todas", ...new Set(allTechs)]
  }, [])

  // Filter professionals
  const filteredProfessionals = useMemo(() => {
    return professionals.filter((prof) => {
      const matchesSearch =
        searchTerm === "" ||
        prof.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.resumo.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesArea = selectedArea === "Todas" || prof.area === selectedArea
      const matchesCity = selectedCity === "Todas" || prof.localizacao === selectedCity
      const matchesTech =
        selectedTech === "Todas" || prof.habilidadesTecnicas.some((tech) => tech === selectedTech)

      return matchesSearch && matchesArea && matchesCity && matchesTech
    })
  }, [searchTerm, selectedArea, selectedCity, selectedTech, professionals])

  const handleRecommend = () => {
    setRecommendModal(false)
    alert(`Você recomendou ${selectedProfessional?.nome}!`)
  }

  const handleSendMessage = () => {
    setMessageModal(false)
    alert(`Mensagem enviada para ${selectedProfessional?.nome}!`)
  }

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <Users className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-foreground">Rede Profissional</h1>
            <p className="text-sm md:text-base text-muted-foreground">Conecte-se com profissionais de diversas áreas</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-card rounded-xl p-4 md:p-6 mb-6 border border-border/50">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar profissionais..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-5 h-5 text-muted-foreground" />
          <span className="font-semibold">Filtros</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Area Filter */}
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Área</label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg"
            >
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          {/* City Filter */}
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Cidade</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Technology Filter */}
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Tecnologia</label>
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg"
            >
              {technologies.slice(0, 20).map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          Mostrando <span className="font-bold text-foreground">{filteredProfessionals.length}</span> profissionais
        </p>
      </div>

      {/* Professional Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredProfessionals.map((prof) => (
          <div
            key={prof.id}
            onClick={() => setSelectedProfessional(prof)}
            className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all cursor-pointer hover:scale-105 hover:shadow-lg min-h-[280px] flex flex-col"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={prof.foto || "/placeholder.svg"}
                alt={prof.nome}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/20"
              />
              <h3 className="font-bold text-lg mb-1">{prof.nome}</h3>
              <p className="text-sm text-muted-foreground mb-2">{prof.cargo}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                <MapPin className="w-3 h-3" />
                {prof.localizacao}
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {prof.habilidadesTecnicas.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {prof.habilidadesTecnicas.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{prof.habilidadesTecnicas.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Professional Detail Modal */}
      <Dialog open={!!selectedProfessional} onOpenChange={() => setSelectedProfessional(null)}>
        <DialogContent className="max-w-4xl h-[85vh] overflow-y-auto">
          {selectedProfessional && (
            <div>
              <DialogHeader>
                <DialogTitle className="text-2xl">Perfil Profissional</DialogTitle>
              </DialogHeader>

              <div className="mt-6">
                {/* Header with photo and basic info */}
                <div className="flex items-start gap-6 mb-6 pb-6 border-b border-border">
                  <img
                    src={selectedProfessional.foto || "/placeholder.svg"}
                    alt={selectedProfessional.nome}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{selectedProfessional.nome}</h2>
                    <p className="text-lg text-muted-foreground mb-2">{selectedProfessional.cargo}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      {selectedProfessional.localizacao}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Briefcase className="w-4 h-4" />
                      {selectedProfessional.area}
                    </div>
                    <p className="text-sm">{selectedProfessional.resumo}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mb-6">
                  <Button onClick={() => setRecommendModal(true)} className="flex-1">
                    Recomendar Profissional
                  </Button>
                  <Button onClick={() => setMessageModal(true)} variant="outline" className="flex-1">
                    Enviar Mensagem
                  </Button>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3">Habilidades Técnicas</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfessional.habilidadesTecnicas.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfessional.softSkills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3">Experiência Profissional</h3>
                  {selectedProfessional.experiencias.map((exp, idx) => (
                    <div key={idx} className="mb-4 pb-4 border-b border-border last:border-0">
                      <p className="font-semibold">{exp.cargo}</p>
                      <p className="text-sm text-muted-foreground">{exp.empresa}</p>
                      <p className="text-xs text-muted-foreground mb-2">
                        {exp.inicio} - {exp.fim || "Atual"}
                      </p>
                      <p className="text-sm">{exp.descricao}</p>
                    </div>
                  ))}
                </div>

                {/* Education */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3">Formação Acadêmica</h3>
                  {selectedProfessional.formacao.map((edu, idx) => (
                    <div key={idx} className="mb-3">
                      <p className="font-semibold">{edu.curso}</p>
                      <p className="text-sm text-muted-foreground">
                        {edu.instituicao} - {edu.ano}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Projects */}
                {selectedProfessional.projetos.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-3">Projetos</h3>
                    {selectedProfessional.projetos.map((proj, idx) => (
                      <div key={idx} className="mb-3">
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                          {proj.titulo}
                        </a>
                        <p className="text-sm text-muted-foreground">{proj.descricao}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Certifications */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3">Certificações</h3>
                  <ul className="list-disc list-inside">
                    {selectedProfessional.certificacoes.map((cert, idx) => (
                      <li key={idx} className="text-sm mb-1">
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-3">Idiomas</h3>
                  {selectedProfessional.idiomas.map((lang, idx) => (
                    <p key={idx} className="text-sm mb-1">
                      <span className="font-semibold">{lang.idioma}:</span> {lang.nivel}
                    </p>
                  ))}
                </div>

                {/* Interests */}
                <div>
                  <h3 className="font-bold text-lg mb-3">Áreas de Interesse</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProfessional.areaInteresses.map((interest) => (
                      <Badge key={interest} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Recommend Modal */}
      <Dialog open={recommendModal} onOpenChange={setRecommendModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Recomendar {selectedProfessional?.nome}</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-4">
              Você está prestes a recomendar este profissional. Sua recomendação será adicionada ao perfil dele.
            </p>
            <Button onClick={handleRecommend} className="w-full">
              Confirmar Recomendação
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Message Modal */}
      <Dialog open={messageModal} onOpenChange={setMessageModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enviar Mensagem para {selectedProfessional?.nome}</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <textarea
              placeholder="Digite sua mensagem..."
              className="w-full h-32 px-3 py-2 bg-background border border-border rounded-lg resize-none"
            />
            <Button onClick={handleSendMessage} className="w-full mt-4">
              Enviar Mensagem
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
