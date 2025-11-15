"use client"

import { useState } from "react"
import { Save, Plus, Trash2, Edit2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

export default function MeuCurriculoPage() {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)

  // Mock data - em produção viria do backend
  const [curriculo, setCurriculo] = useState({
    nome: "João Silva Candidato",
    email: "joao.candidato@email.com",
    telefone: "(11) 98765-4321",
    localizacao: "São Paulo/SP",
    cargo: "Desenvolvedor Full Stack",
    resumo: "Desenvolvedor full stack com 3 anos de experiência em React, Node.js e bancos de dados relacionais.",
    habilidadesTecnicas: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
    softSkills: ["Trabalho em equipe", "Comunicação", "Proatividade"],
    experiencias: [
      {
        empresa: "Tech Company",
        cargo: "Desenvolvedor Full Stack",
        inicio: "2022-01",
        fim: null,
        descricao: "Desenvolvimento de aplicações web escaláveis"
      }
    ],
    formacao: [
      {
        curso: "Bacharelado em Ciência da Computação",
        instituicao: "Universidade de São Paulo",
        ano: 2021
      }
    ],
    certificacoes: ["AWS Certified Developer"],
    idiomas: [
      { idioma: "Inglês", nivel: "Avançado" },
      { idioma: "Espanhol", nivel: "Básico" }
    ]
  })

  const handleSave = () => {
    // Simulação de salvamento
    toast({
      title: "Currículo atualizado!",
      description: "Suas informações foram salvas com sucesso.",
    })
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Meu Currículo
            </h1>
            <p className="text-muted-foreground">
              Mantenha suas informações atualizadas para as empresas
            </p>
          </div>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)}>
              <Edit2 className="w-4 h-4 mr-2" />
              Editar
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancelar
              </Button>
              <Button onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Salvar
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Informações Pessoais */}
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>Dados básicos de contato</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Nome Completo</Label>
                  <Input
                    value={curriculo.nome}
                    onChange={(e) => setCurriculo({ ...curriculo, nome: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={curriculo.email}
                    onChange={(e) => setCurriculo({ ...curriculo, email: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label>Telefone</Label>
                  <Input
                    value={curriculo.telefone}
                    onChange={(e) => setCurriculo({ ...curriculo, telefone: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label>Localização</Label>
                  <Input
                    value={curriculo.localizacao}
                    onChange={(e) => setCurriculo({ ...curriculo, localizacao: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div>
                <Label>Cargo Desejado</Label>
                <Input
                  value={curriculo.cargo}
                  onChange={(e) => setCurriculo({ ...curriculo, cargo: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <Label>Resumo Profissional</Label>
                <Textarea
                  value={curriculo.resumo}
                  onChange={(e) => setCurriculo({ ...curriculo, resumo: e.target.value })}
                  disabled={!isEditing}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Habilidades Técnicas */}
          <Card>
            <CardHeader>
              <CardTitle>Habilidades Técnicas</CardTitle>
              <CardDescription>Tecnologias e ferramentas que você domina</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {curriculo.habilidadesTecnicas.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="text-sm">
                    {skill}
                    {isEditing && (
                      <button className="ml-2 hover:text-red-400">×</button>
                    )}
                  </Badge>
                ))}
              </div>
              {isEditing && (
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar habilidade
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
              <CardDescription>Competências comportamentais</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {curriculo.softSkills.map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="text-sm">
                    {skill}
                    {isEditing && (
                      <button className="ml-2 hover:text-red-400">×</button>
                    )}
                  </Badge>
                ))}
              </div>
              {isEditing && (
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar soft skill
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Experiência Profissional */}
          <Card>
            <CardHeader>
              <CardTitle>Experiência Profissional</CardTitle>
              <CardDescription>Histórico de trabalho</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {curriculo.experiencias.map((exp, idx) => (
                <div key={idx} className="p-4 border border-border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{exp.cargo}</h3>
                      <p className="text-sm text-muted-foreground">{exp.empresa}</p>
                      <p className="text-xs text-muted-foreground">
                        {exp.inicio} - {exp.fim || 'Atual'}
                      </p>
                    </div>
                    {isEditing && (
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </Button>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.descricao}</p>
                </div>
              ))}
              {isEditing && (
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar experiência
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Formação Acadêmica */}
          <Card>
            <CardHeader>
              <CardTitle>Formação Acadêmica</CardTitle>
              <CardDescription>Educação e cursos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {curriculo.formacao.map((form, idx) => (
                <div key={idx} className="p-4 border border-border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{form.curso}</h3>
                      <p className="text-sm text-muted-foreground">{form.instituicao}</p>
                      <p className="text-xs text-muted-foreground">Ano: {form.ano}</p>
                    </div>
                    {isEditing && (
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              {isEditing && (
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar formação
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Idiomas */}
          <Card>
            <CardHeader>
              <CardTitle>Idiomas</CardTitle>
              <CardDescription>Idiomas que você fala</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {curriculo.idiomas.map((idioma, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 border border-border rounded">
                  <span>{idioma.idioma}</span>
                  <Badge variant="outline">{idioma.nivel}</Badge>
                </div>
              ))}
              {isEditing && (
                <Button variant="outline" size="sm" className="mt-2">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar idioma
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
