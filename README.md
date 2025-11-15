# LevelUp IA - Gamificação da Aprendizagem Corporativa + Rede Profissional

Plataforma completa que combina gamificação para treinamento profissional corporativo com uma rede social profissional estilo LinkedIn. Transforme o aprendizado em uma jornada de jogo com missões, rankings, conquistas e conecte-se com profissionais de diversas áreas.

## Características Principais

### Sistema de Gamificação
- **Missões Interativas**: 20+ cursos e treinamentos de diferentes categorias e níveis
- **Sistema de Gamificação**: XP, níveis, streaks e rankings competitivos
- **Desafios Dinâmicos**: 15+ desafios limitados no tempo com recompensas exclusivas
- **Conquistas**: 15+ badges desbloqueáveis por progresso
- **Premiações**: 15+ recompensas físicas e digitais
- **Coach IA**: Mentor virtual personalizado para orientação
- **Rankings**: Sistema de leaderboard com pódio e destaques
- **Parceiros**: Integração com plataformas de ensino populares

### Rede Profissional (Global Solution - FIAP 2025)
- **60+ Perfis Profissionais**: Base completa com profissionais de diversas áreas
- **Cards Interativos**: Foto, cargo, localização e principais habilidades
- **Modal Detalhada**: Informações completas de cada profissional
- **Sistema de Busca**: Busca por nome, cargo ou palavras-chave
- **Filtros Funcionais**: Por área, cidade e tecnologia
- **Ações Sociais**: Recomendar profissionais e enviar mensagens
- **Design Responsivo**: Adaptável para todos os dispositivos
- **Dark Mode**: Interface moderna em tema escuro

## ODS Alinhados

- **ODS 4**: Educação de Qualidade
- **ODS 8**: Trabalho Decente e Crescimento Econômico

## Tecnologias

- **Framework**: Next.js 16 com App Router
- **Language**: TypeScript
- **UI**: Tailwind CSS v4 + shadcn/ui
- **State Management**: Zustand com persistência
- **Analytics**: Vercel Analytics
- **Ícones**: Lucide React

## Estrutura do Projeto

\`\`\`
├── app/                    # Páginas Next.js
│   ├── page.tsx           # Dashboard
│   ├── missoes/           # Explorar missões
│   ├── desafios/          # Desafios dinâmicos
│   ├── rankings/          # Leaderboard
│   ├── premiacoes/        # Conquistas e recompensas
│   ├── rede-profissional/ # Rede social profissional ⭐
│   ├── parceiros/         # Plataformas parceiras
│   ├── coach/             # Coach IA
│   ├── perfil/            # Perfil do usuário
│   └── admin/             # Painel administrativo
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes shadcn/ui
│   ├── sidebar.tsx       # Navegação lateral
│   ├── mission-card.tsx  # Card de missão
│   └── error-boundary.tsx # Error handling
├── lib/                   # Utilitários
│   ├── data/             # Mock data
│   │   ├── mock-data.ts  # Dados de gamificação
│   │   └── professionals.json # 60+ perfis profissionais ⭐
│   ├── store/            # Zustand store
│   ├── hooks/            # Custom hooks
│   └── utils/            # Funções auxiliares
└── public/               # Arquivos estáticos
\`\`\`

## Instalação

\`\`\`bash
# Clone o repositório
git clone https://github.com/Maykesantos98/levelup

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev

# Build para produção
npm run build

# Execute em produção
npm start
\`\`\`

Acesse a aplicação em: http://localhost:3000

## Funcionalidades por Página

### Dashboard
- Visão geral de estatísticas (XP, missões ativas, completas, streak)
- Missões em andamento
- Recomendações da IA
- Conquistas recentes

### Missões
- Filtros por categoria (Liderança, Técnico, Comunicação, Gestão, Inovação)
- Filtros por dificuldade (Iniciante, Intermediário, Avançado, Expert)
- Busca por texto
- Sistema de início de missão com feedback

### Desafios
- Desafios em destaque
- Estatísticas de desafios
- Tabs para filtrar (Ativos, Completados, Ranking)
- Sistema de participação

### Rankings
- Pódio de top 2 jogadores
- Lista completa de rankings
- Destaque para usuário atual
- Animações e interações

### Premiações
- Recompensas desbloqueadas
- Próximas recompensas com progresso
- Sistema de níveis para desbloqueio

### Rede Profissional ⭐ (Novo)
- **Cards de Perfil**: Exibição de 60+ profissionais com foto, cargo e skills
- **Busca Inteligente**: Busca em tempo real por nome, cargo ou descrição
- **Filtros Múltiplos**: 
  - Por área (Desenvolvimento, Design, Dados, Marketing, etc.)
  - Por cidade (São Paulo, Rio de Janeiro, etc.)
  - Por tecnologia (React, Python, AWS, etc.)
- **Modal Completa**: Ao clicar em um card, exibe:
  - Informações pessoais e resumo profissional
  - Experiências profissionais detalhadas com datas
  - Formação acadêmica completa
  - Habilidades técnicas e soft skills
  - Projetos com links
  - Certificações
  - Idiomas com níveis de proficiência
  - Áreas de interesse
- **Botões Funcionais**:
  - "Recomendar Profissional": Modal de confirmação
  - "Enviar Mensagem": Modal para envio de mensagem
- **Design Responsivo**: Grid adaptável (1-4 colunas conforme tela)

### Parceiros
- Filtros por categoria
- Plataformas em destaque
- Benefícios exclusivos por nível

### Coach IA
- Interface de chat
- Mensagens persistentes
- Sugestões contextualizadas

### Perfil
- Estatísticas do usuário
- Edição de perfil
- Banner personalizado

## Estrutura de Dados (Professionals.json)

Cada perfil profissional contém:

\`\`\`typescript
{
  id: number,
  nome: string,
  foto: string,
  cargo: string,
  resumo: string,
  localizacao: string,
  area: string,
  habilidadesTecnicas: string[],
  softSkills: string[],
  experiencias: [{
    empresa: string,
    cargo: string,
    inicio: string,
    fim: string | null,
    descricao: string
  }],
  formacao: [{
    curso: string,
    instituicao: string,
    ano: number
  }],
  projetos: [{
    titulo: string,
    link: string,
    descricao: string
  }],
  certificacoes: string[],
  idiomas: [{
    idioma: string,
    nivel: string
  }],
  areaInteresses: string[]
}
\`\`\`

## Requisitos da Global Solution ✅

- ✅ 60+ perfis profissionais simulados em JSON
- ✅ Cards com nome, foto, cargo e principais skills
- ✅ Modal interativa com dados completos
- ✅ Sistema de busca funcional
- ✅ Filtros por área, cidade e tecnologia
- ✅ Botões "Recomendar" e "Enviar Mensagem" funcionando
- ✅ Design responsivo com Tailwind CSS
- ✅ Dark Mode implementado
- ✅ Built com HTML + React + Tailwind
- ✅ 10+ commits no repositório

## Estado da Aplicação

O estado global é gerenciado com Zustand e inclui:
- Dados do usuário (XP, nível, streak, etc)
- Missões (ativas, completas, progresso)
- Conquistas (desbloqueadas/bloqueadas)
- Desafios (participação, status)

Dados são persistidos no localStorage automaticamente.

## Deploy

**Link do Deploy**: [Será adicionado após deploy na Vercel]

**Repositório GitHub**: https://github.com/Maykesantos98/levelup

## Integrantes do Grupo

- **Mayke Costa Santos** - RM: 200544368

## Usuários e Senhas

Este projeto é um protótipo frontend. Não possui sistema de autenticação real - todos os dados são mockados para demonstração.

## Melhorias para Produção Futura

1. **Backend Real**: Substituir mock data por API REST/GraphQL
2. **Autenticação**: Implementar login/registro com JWT ou OAuth
3. **Banco de Dados**: Integrar PostgreSQL/MongoDB
4. **Real-time**: WebSockets para rankings e networking ao vivo
5. **Notificações**: Push notifications para novos desafios e conexões
6. **Analytics Avançado**: Tracking de eventos e conversões
7. **Testes**: Jest + React Testing Library
8. **CI/CD**: Pipeline automatizado
9. **SEO**: Meta tags dinâmicas e sitemap
10. **PWA**: Service workers para uso offline

## Suporte para Navegadores

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)

## Licença

Projeto Acadêmico - Global Solution FIAP 2025

## Contato

Mayke Costa Santos - maykecostasantos12@gmail.com
