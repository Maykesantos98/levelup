"use client"

import { useState } from "react"
import { Search, MapPin, Briefcase, DollarSign, Clock, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { mockJobs, type Job } from "@/lib/data/jobs"

export default function VagasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArea, setSelectedArea] = useState<string>("Todas")
  const [selectedTipo, setSelectedTipo] = useState<string>("Todos")
  const [selectedNivel, setSelectedNivel] = useState<string>("Todos")

  const areas = ["Todas", ...Array.from(new Set(mockJobs.map(job => job.area)))]
  const tipos = ["Todos", "Remoto", "Híbrido", "Presencial"]
  const niveis = ["Todos", "Júnior", "Pleno", "Sênior", "Especialista"]

  const filteredJobs = mockJobs.filter(job => {
    const matchSearch = job.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       job.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       job.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchArea = selectedArea === "Todas" || job.area === selectedArea
    const matchTipo = selectedTipo === "Todos" || job.tipo === selectedTipo
    const matchNivel = selectedNivel === "Todos" || job.nivel === selectedNivel

    return matchSearch && matchArea && matchTipo && matchNivel
  })

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Vagas Disponíveis
          </h1>
          <p className="text-muted-foreground">
            Encontre oportunidades que combinam com seu perfil
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Buscar por cargo, empresa ou palavra-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 bg-card border-border"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          {/* Area Filter */}
          <div className="flex gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground self-center">Área:</span>
            {areas.map(area => (
              <Button
                key={area}
                variant={selectedArea === area ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedArea(area)}
              >
                {area}
              </Button>
            ))}
          </div>

          {/* Tipo Filter */}
          <div className="flex gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground self-center">Tipo:</span>
            {tipos.map(tipo => (
              <Button
                key={tipo}
                variant={selectedTipo === tipo ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTipo(tipo)}
              >
                {tipo}
              </Button>
            ))}
          </div>

          {/* Nivel Filter */}
          <div className="flex gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground self-center">Nível:</span>
            {niveis.map(nivel => (
              <Button
                key={nivel}
                variant={selectedNivel === nivel ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedNivel(nivel)}
              >
                {nivel}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-4">
          Mostrando {filteredJobs.length} {filteredJobs.length === 1 ? 'vaga' : 'vagas'}
        </p>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhuma vaga encontrada com os filtros selecionados.</p>
          </div>
        )}
      </div>
    </div>
  )
}

function JobCard({ job }: { job: Job }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="hover:border-primary/50 transition-all cursor-pointer hover:scale-[1.02]">
          <CardHeader>
            <div className="flex items-start gap-4">
              <img src={job.logo || "/placeholder.svg"} alt={job.empresa} className="w-12 h-12 rounded-lg" />
              <div className="flex-1">
                <CardTitle className="text-xl mb-1">{job.titulo}</CardTitle>
                <CardDescription>{job.empresa}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{job.area}</Badge>
              <Badge variant="outline">{job.nivel}</Badge>
              <Badge className={
                job.tipo === 'Remoto' ? 'bg-green-500/20 text-green-400' :
                job.tipo === 'Híbrido' ? 'bg-blue-500/20 text-blue-400' :
                'bg-orange-500/20 text-orange-400'
              }>{job.tipo}</Badge>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {job.localizacao}
              </div>
              {job.salario && (
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  {job.salario}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Publicado em {new Date(job.publicadoEm).toLocaleDateString('pt-BR')}
              </div>
            </div>
            <p className="text-sm line-clamp-2">{job.descricao}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Ver detalhes
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4 mb-4">
            <img src={job.logo || "/placeholder.svg"} alt={job.empresa} className="w-16 h-16 rounded-lg" />
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{job.titulo}</DialogTitle>
              <DialogDescription className="text-lg">{job.empresa}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Info Badges */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{job.area}</Badge>
            <Badge variant="outline">{job.nivel}</Badge>
            <Badge className={
              job.tipo === 'Remoto' ? 'bg-green-500/20 text-green-400' :
              job.tipo === 'Híbrido' ? 'bg-blue-500/20 text-blue-400' :
              'bg-orange-500/20 text-orange-400'
            }>{job.tipo}</Badge>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              {job.localizacao}
            </div>
            {job.salario && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="w-4 h-4" />
                {job.salario}
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">Sobre a vaga</h3>
            <p className="text-muted-foreground">{job.descricao}</p>
          </div>

          {/* Requisitos */}
          <div>
            <h3 className="font-semibold mb-2">Requisitos</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {job.requisitos.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Diferenciais */}
          <div>
            <h3 className="font-semibold mb-2">Diferenciais</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {job.diferenciais.map((dif, idx) => (
                <li key={idx}>{dif}</li>
              ))}
            </ul>
          </div>

          {/* Benefícios */}
          <div>
            <h3 className="font-semibold mb-2">Benefícios</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {job.beneficios.map((ben, idx) => (
                <li key={idx}>{ben}</li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button className="flex-1">Candidatar-se</Button>
            <Button variant="outline">Salvar vaga</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
