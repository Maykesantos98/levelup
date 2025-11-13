# LevelUp IA - Gamificação da Aprendizagem Corporativa

Plataforma de gamificação para treinamento profissional corporativo. Transforme o aprendizado em uma jornada de jogo com missões, rankings, conquistas e recompensas.

## Características

- **Missões Interativas**: 20+ cursos e treinamentos de diferentes categorias e níveis
- **Sistema de Gamificação**: XP, níveis, streaks e rankings competitivos
- **Desafios Dinâmicos**: 15+ desafios limitados no tempo com recompensas exclusivas
- **Conquistas**: 15+ badges desbloqueáveis por progresso
- **Premiações**: 15+ recompensas físicas e digitais
- **Coach IA**: Mentor virtual personalizado para orientação
- **Rankings**: Sistema de leaderboard com pódio e destaques
- **Parceiros**: Integração com plataformas de ensino populares

## ODS Alinhados

- **ODS 4**: Educação de Qualidade
- **ODS 8**: Trabalho Decente e Crescimento Econômico

## Tecnologias

- **Framework**: Next.js 16 com App Router
- **UI**: Tailwind CSS v4 + shadcn/ui
- **State Management**: Zustand com persistência
- **TypeScript**: Tipagem completa
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
│   ├── store/            # Zustand store
│   ├── hooks/            # Custom hooks
│   └── utils/            # Funções auxiliares
└── public/               # Arquivos estáticos
\`\`\`

## Instalação

\`\`\`bash
# Clone o repositório
git clone <repository-url>

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev

# Build para produção
npm run build

# Execute em produção
npm start
\`\`\`

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

## Estado da Aplicação

O estado global é gerenciado com Zustand e inclui:
- Dados do usuário (XP, nível, streak, etc)
- Missões (ativas, completas, progresso)
- Conquistas (desbloqueadas/bloqueadas)
- Desafios (participação, status)

Dados são persistidos no localStorage automaticamente.

## Melhorias para Produção Futura

1. **Backend Real**: Substituir mock data por API REST/GraphQL
2. **Autenticação**: Implementar login/registro com JWT ou OAuth
3. **Banco de Dados**: Integrar PostgreSQL/MongoDB
4. **Real-time**: WebSockets para rankings e desafios ao vivo
5. **Notificações**: Push notifications para novos desafios
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

Proprietary - Todos os direitos reservados

## Contato

Para dúvidas ou suporte, entre em contato através do sistema.
