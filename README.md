# LevelUp IA - Plataforma Profissionalizante Corporativa

**Transforme o desenvolvimento profissional em uma experiência gamificada e conectada**

Plataforma completa de capacitação e networking corporativo que integra aprendizagem gamificada com rede social profissional. Desenvolvida para empresas que buscam engajar colaboradores no desenvolvimento contínuo, conectar talentos internos e facilitar a gestão de competências pelo RH.

## 🎯 Propósito

O LevelUp IA é uma solução profissionalizante que:
- **Para Colaboradores**: Desenvolva competências através de missões gamificadas, participe de desafios e conecte-se com outros profissionais
- **Para RH**: Gerencie talentos, acompanhe desenvolvimento de competências, identifique skills gaps e promova networking interno
- **Para Empresas**: Aumente engajamento em treinamentos, retenha talentos e construa uma cultura de aprendizado contínuo

## 🌟 Características Principais

### Sistema de Gamificação de Aprendizagem
- **Missões Interativas**: 20+ cursos e treinamentos de diferentes categorias e níveis
- **Sistema de XP e Níveis**: Progresso visual e recompensas por aprendizado
- **Desafios Dinâmicos**: 15+ desafios limitados no tempo com recompensas exclusivas
- **Conquistas**: 15+ badges desbloqueáveis por progresso e marcos alcançados
- **Rankings Competitivos**: Leaderboards para estimular competição saudável
- **Premiações**: 15+ recompensas físicas e digitais (vouchers, cursos, etc)
- **Coach IA**: Mentor virtual personalizado para orientação de carreira
- **Parceiros**: Integração com plataformas de ensino (Alura, Coursera, DIO, etc)

### Rede Social Profissional (Global Solution - FIAP 2025)
- **60+ Perfis Profissionais**: Base de talentos com informações completas
- **Cards Interativos**: Visualização rápida com foto, cargo, localização e skills
- **Perfis Detalhados**: Experiências, formação, projetos, certificações e idiomas
- **Sistema de Busca Inteligente**: Busca por nome, cargo ou palavras-chave
- **Filtros Avançados**: Por área de atuação, cidade e tecnologias/skills
- **Networking Ativo**: Recomendar profissionais e enviar mensagens diretas
- **Indicações Internas**: Colaboradores podem indicar e descobrir talentos
- **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **Dark Mode**: Experiência visual moderna e confortável

## 🎓 ODS Alinhados (Objetivos de Desenvolvimento Sustentável)

- **ODS 4**: Educação de Qualidade - Promove acesso a aprendizado contínuo e desenvolvimento de competências
- **ODS 8**: Trabalho Decente e Crescimento Econômico - Facilita conexões profissionais e crescimento de carreira

## 🛠️ Tecnologias

- **Framework**: Next.js 16 com App Router e React 19
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4 + shadcn/ui components
- **Gerenciamento de Estado**: Zustand com persistência em localStorage
- **Analytics**: Vercel Analytics integrado
- **Ícones**: Lucide React
- **Deploy**: Vercel Platform

## 📁 Estrutura do Projeto

\`\`\`
├── app/                    # Páginas Next.js (App Router)
│   ├── page.tsx           # Dashboard principal
│   ├── missoes/           # Explorar missões de aprendizado
│   ├── desafios/          # Desafios dinâmicos temporários
│   ├── rankings/          # Leaderboard competitivo
│   ├── premiacoes/        # Conquistas e recompensas
│   ├── rede-profissional/ # Rede social profissional ⭐
│   ├── parceiros/         # Plataformas parceiras de ensino
│   ├── coach/             # Chat com Coach IA
│   ├── perfil/            # Perfil pessoal do usuário
│   └── admin/             # Painel administrativo (RH)
├── components/            # Componentes React reutilizáveis
│   ├── ui/               # Componentes shadcn/ui base
│   ├── sidebar.tsx       # Navegação lateral fixa
│   ├── mission-card.tsx  # Card de missão/curso
│   └── error-boundary.tsx # Tratamento de erros
├── lib/                   # Biblioteca de utilitários
│   ├── data/             # Dados mockados para demonstração
│   │   ├── mock-data.ts  # Dados de gamificação
│   │   └── professionals.json # 60+ perfis profissionais ⭐
│   ├── store/            # Zustand state management
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Funções auxiliares
│   └── constants.ts      # Constantes da aplicação
└── public/               # Arquivos estáticos (imagens, etc)
\`\`\`

## 🚀 Instalação e Execução

\`\`\`bash
# 1. Clone o repositório
git clone https://github.com/Maykesantos98/levelup
cd levelup

# 2. Instale as dependências
npm install

# 3. Execute em modo desenvolvimento
npm run dev

# 4. Acesse no navegador
# http://localhost:3000

# Para produção:
npm run build    # Build otimizado
npm start        # Servidor de produção
\`\`\`

## 📱 Funcionalidades por Página

### 🏠 Dashboard
- Boas-vindas personalizadas com nome do usuário
- Cards de estatísticas (Total XP, Missões Ativas, Completas, Streak de Dias)
- Missões em andamento com botão de acesso rápido
- Recomendações da IA baseadas no perfil
- Conquistas recentes desbloqueadas

### 🎯 Missões
- **Busca em tempo real** por nome de missão ou conteúdo
- **Filtros de Categoria**: Liderança, Técnico, Comunicação, Gestão, Inovação
- **Filtros de Dificuldade**: Iniciante, Intermediário, Avançado, Expert
- Cards com informações da plataforma (Escola DT, Alura, Coursera, etc)
- Indicadores de duração e XP ganho
- Botão "Iniciar Missão" com feedback visual

### 🔥 Desafios
- **Estatísticas**: Desafios ativos, completados, disponíveis, XP bônus
- **Tabs de Filtro**: Ativos, Completados, Ranking
- Desafios em destaque com badge especial
- Informações de dificuldade, tipo e recompensa
- Tempo restante e número de participantes
- Sistema de participação com confirmação

### 🏆 Rankings
- **Pódio visual** destacando top 2 jogadores
- Lista completa com posição, avatar, nome, nível e XP
- Destaque especial para o usuário atual
- Indicador de você ("Você") na sua posição
- Animações suaves em hover

### 🎁 Premiações
- **Recompensas Desbloqueadas**: Badges e prêmios já conquistados
- **Próximas Recompensas**: Progresso visual até o desbloqueio
- Categorias: common, rare, epic, legendary
- Tipos: Vale-cafés, cursos premium, certificações, etc
- Barra de progresso de XP necessário

### 👥 Rede Profissional ⭐ (Global Solution)
- **Grid Responsivo**: 1-4 colunas conforme tamanho da tela
- **Cards de Perfil**: 
  - Foto profissional
  - Nome completo e cargo atual
  - Localização (cidade/estado)
  - Top 3 habilidades técnicas em pills
  - Resumo profissional truncado
- **Busca Inteligente**: Filtro em tempo real por nome, cargo ou bio
- **Filtros Múltiplos**:
  - **Por Área**: Desenvolvimento, Design, Dados, Marketing, Produto, Negócios, Cloud, QA, Segurança
  - **Por Cidade**: São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, Curitiba, etc
  - **Por Tecnologia**: React, Python, AWS, TypeScript, Docker, etc (extraído das skills)
- **Modal Completa**: Ao clicar em um perfil, exibe:
  - Header com foto, nome, cargo, localização
  - Resumo profissional completo
  - **Experiências Profissionais**: Empresa, cargo, datas (início - fim/atual), descrição
  - **Formação Acadêmica**: Curso, instituição, ano de conclusão
  - **Habilidades Técnicas**: Tags clicáveis
  - **Soft Skills**: Tags coloridas
  - **Projetos**: Título, descrição e link externo
  - **Certificações**: Lista completa
  - **Idiomas**: Idioma e nível de proficiência
  - **Áreas de Interesse**: Tags de tópicos
- **Botões de Ação Funcionais**:
  - **"Recomendar Profissional"**: Abre modal para confirmar recomendação com feedback de sucesso
  - **"Enviar Mensagem"**: Abre modal de composição de mensagem com validação

### 🤝 Parceiros
- Integração com plataformas de ensino (DIO, Alura, Rocketseat, etc)
- Filtros por categoria (Tecnologia, Dados, Negócios, Design)
- Benefícios exclusivos por nível de usuário
- Botões de acesso às plataformas
- Badges de "Destaque" para parceiros premium

### 💬 Coach IA
- Interface de chat interativa
- Mensagens do Coach IA personalizadas
- Status online do coach
- Campo de input para enviar mensagens
- Histórico de conversas (mockado)

### 👤 Meu Perfil
- Banner colorido com gradiente
- Avatar com inicial do nome
- Email e nível do usuário
- **Tabs de Navegação**:
  - Visão Geral: Missões completas, ativas, conquistas
  - Conquistas: Badges desbloqueados
  - Personalizar: Edição de perfil
  - Privacidade: Configurações
- Estatísticas em cards com ícones
- Seção "Sobre Mim" editável

### 🛠️ Admin (Painel Gestor)
- Visão para RH e gestores
- Métricas de usuários ativos, missões completas, desafios ativos
- Gráficos de progresso
- Tabela de usuários com status
- Analytics da plataforma

## 📊 Estrutura de Dados (professionals.json)

Cada perfil na rede profissional contém os seguintes campos conforme especificação da Global Solution:

\`\`\`typescript
{
  id: number,                    // Identificador único
  nome: string,                  // Nome completo
  foto: string,                  // URL da foto de perfil
  cargo: string,                 // Cargo/título profissional atual
  resumo: string,                // Bio/headline profissional
  localizacao: string,           // Cidade/Estado
  area: string,                  // Área de atuação
  habilidadesTecnicas: string[], // Hard skills e tecnologias
  softSkills: string[],          // Competências comportamentais
  experiencias: [{               // Histórico profissional
    empresa: string,
    cargo: string,
    inicio: string,              // Data YYYY-MM
    fim: string | null,          // null = emprego atual
    descricao: string
  }],
  formacao: [{                   // Formação acadêmica
    curso: string,
    instituicao: string,
    ano: number
  }],
  projetos: [{                   // Portfólio de projetos
    titulo: string,
    link: string,
    descricao: string
  }],
  certificacoes: string[],       // Certificações relevantes
  idiomas: [{                    // Idiomas e fluência
    idioma: string,
    nivel: string                // Básico, Intermediário, Avançado, Fluente, Nativo
  }],
  areaInteresses: string[]       // Tópicos de interesse/hobbies profissionais
}
\`\`\`

**Total**: 60 perfis completos simulando profissionais de diversas áreas e níveis de senioridade.

## ✅ Requisitos da Global Solution Atendidos

- ✅ **60+ perfis profissionais** simulados em arquivo JSON local
- ✅ **Cards informativos** com nome, foto, cargo e principais skills
- ✅ **Modal interativa** com dados detalhados ao clicar no card
- ✅ **Sistema de busca** funcional em tempo real
- ✅ **Filtros múltiplos** por área, cidade e tecnologia
- ✅ **Botões de ação funcionais**: "Recomendar Profissional" e "Enviar Mensagem"
- ✅ **Design responsivo** adaptável a mobile, tablet e desktop
- ✅ **Dark Mode** implementado em toda aplicação
- ✅ **Tecnologias**: HTML + React + Tailwind CSS
- ✅ **SPA** (Single Page Application) com Next.js App Router
- ✅ **10+ commits** no repositório Git

## 🔐 Estado da Aplicação

O estado global é gerenciado com **Zustand** e persiste automaticamente no **localStorage**:

- **Dados do Usuário**: Nome, email, nível, XP total, streak de dias
- **Missões**: Lista de missões ativas, completas e disponíveis
- **Conquistas**: Badges desbloqueadas e próximas a desbloquear
- **Desafios**: Participação, status e progresso
- **Recompensas**: Prêmios desbloqueados e disponíveis

## 🌐 Deploy

**Link do Deploy**: [Em breve - será adicionado após deploy na Vercel]

**Repositório GitHub**: https://github.com/Maykesantos98/levelup

## 👥 Integrantes do Grupo

- **Mayke Costa Santos** - RM: 200544368
- Email: maykecostasantos12@gmail.com

## 🔑 Usuários e Senhas

Este é um **protótipo frontend** para fins acadêmicos. Não possui sistema de autenticação real - todos os dados são mockados localmente para demonstração das funcionalidades.

## 🚧 Roadmap - Melhorias Futuras para Produção

### Fase 1 - Backend e Autenticação
1. **API REST/GraphQL**: Substituir mock data por backend real
2. **Autenticação**: Sistema de login/registro com JWT ou Auth0
3. **Banco de Dados**: PostgreSQL para dados estruturados
4. **Upload de Arquivos**: S3/Cloudinary para fotos de perfil

### Fase 2 - Features Avançadas
5. **Real-time**: WebSockets para chat, notificações e rankings ao vivo
6. **Sistema de Mensagens**: Chat interno funcional entre usuários
7. **Recomendações Inteligentes**: ML para sugerir cursos e conexões
8. **Notificações Push**: Alertas de novos desafios, mensagens e conquistas

### Fase 3 - Analytics e Gestão
9. **Dashboard RH Avançado**: Relatórios de competências, gaps e evolução de equipe
10. **Analytics Detalhado**: Tracking de eventos, conversões e engajamento
11. **Integrações**: APIs de Alura, Coursera, LinkedIn para dados reais
12. **Certificados Digitais**: Emissão de certificados de conclusão

### Fase 4 - Qualidade e Performance
13. **Testes Automatizados**: Jest + React Testing Library + Playwright
14. **CI/CD Pipeline**: GitHub Actions para deploy automatizado
15. **SEO Otimizado**: Meta tags dinâmicas, sitemap e SSR
16. **PWA**: Service workers para funcionamento offline
17. **Acessibilidade**: WCAG 2.1 AA compliance
18. **Performance**: Lazy loading, code splitting, cache otimizado

## 🌍 Suporte para Navegadores

- ✅ Chrome (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Edge (últimas 2 versões)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 📄 Licença

**Projeto Acadêmico** - Global Solution FIAP 2025  
Desenvolvido para fins educacionais e demonstração de competências técnicas.

## 📞 Contato

**Mayke Costa Santos**  
Email: maykecostasantos12@gmail.com  
LinkedIn: [Em breve]  
GitHub: https://github.com/Maykesantos98

---

**Transformando aprendizado em jornada, competências em conquistas, e conexões em oportunidades.** 🚀
