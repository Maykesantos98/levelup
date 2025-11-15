export interface Job {
  id: number
  titulo: string
  empresa: string
  logo: string
  localizacao: string
  tipo: 'Remoto' | 'Híbrido' | 'Presencial'
  nivel: 'Júnior' | 'Pleno' | 'Sênior' | 'Especialista'
  area: string
  descricao: string
  requisitos: string[]
  diferenciais: string[]
  beneficios: string[]
  salario?: string
  publicadoEm: string
}

export const mockJobs: Job[] = [
  {
    id: 1,
    titulo: "Engenheiro de Software Senior",
    empresa: "Tech Solutions",
    logo: "/placeholder.svg?height=60&width=60",
    localizacao: "São Paulo/SP",
    tipo: "Híbrido",
    nivel: "Sênior",
    area: "Desenvolvimento",
    descricao: "Buscamos engenheiro(a) de software senior para liderar desenvolvimento de aplicações escaláveis usando React e Node.js.",
    requisitos: [
      "5+ anos de experiência com desenvolvimento web",
      "Domínio de React e Node.js",
      "Experiência com AWS e Docker",
      "Conhecimento em metodologias ágeis"
    ],
    diferenciais: [
      "Experiência com TypeScript",
      "Contribuições open source",
      "Inglês fluente"
    ],
    beneficios: [
      "Vale refeição/alimentação",
      "Plano de saúde e odontológico",
      "Auxílio home office",
      "Day off no aniversário",
      "Cursos e certificações"
    ],
    salario: "R$ 12.000 - R$ 18.000",
    publicadoEm: "2025-01-10"
  },
  {
    id: 2,
    titulo: "Product Manager",
    empresa: "StartupXYZ",
    logo: "/placeholder.svg?height=60&width=60",
    localizacao: "Rio de Janeiro/RJ",
    tipo: "Remoto",
    nivel: "Pleno",
    area: "Gestão de Produtos",
    descricao: "Product Manager para gerenciar roadmap de produtos digitais com foco em growth.",
    requisitos: [
      "3+ anos como Product Manager",
      "Experiência com produtos digitais",
      "Conhecimento de métricas e analytics",
      "Facilidade de comunicação"
    ],
    diferenciais: [
      "Certificação CSPO",
      "Experiência em startups",
      "Background técnico"
    ],
    beneficios: [
      "Trabalho 100% remoto",
      "Horário flexível",
      "Stock options",
      "Budget para cursos",
      "Equipamentos fornecidos"
    ],
    salario: "R$ 9.000 - R$ 13.000",
    publicadoEm: "2025-01-12"
  },
  {
    id: 3,
    titulo: "UX/UI Designer",
    empresa: "Design Studio",
    logo: "/placeholder.svg?height=60&width=60",
    localizacao: "Belo Horizonte/MG",
    tipo: "Presencial",
    nivel: "Pleno",
    area: "Design",
    descricao: "Designer de experiência para criar interfaces intuitivas e acessíveis para produtos digitais.",
    requisitos: [
      "3+ anos de experiência em UX/UI",
      "Domínio de Figma e Adobe XD",
      "Portfólio consistente",
      "Conhecimento de design systems"
    ],
    diferenciais: [
      "Certificação Google UX",
      "Experiência com acessibilidade",
      "Conhecimento de HTML/CSS"
    ],
    beneficios: [
      "Vale transporte",
      "Plano de saúde",
      "Gym pass",
      "Frutas e café no escritório",
      "Ambiente criativo"
    ],
    salario: "R$ 7.000 - R$ 10.000",
    publicadoEm: "2025-01-08"
  },
  {
    id: 4,
    titulo: "Data Scientist",
    empresa: "Data Corp",
    logo: "/placeholder.svg?height=60&width=60",
    localizacao: "São Paulo/SP",
    tipo: "Híbrido",
    nivel: "Sênior",
    area: "Dados",
    descricao: "Cientista de dados para desenvolvimento de modelos de ML e análise preditiva.",
    requisitos: [
      "5+ anos em ciência de dados",
      "Python, TensorFlow, PyTorch",
      "SQL e data warehouses",
      "Experiência com modelos de ML em produção"
    ],
    diferenciais: [
      "PhD ou mestrado",
      "Publicações científicas",
      "Experiência com Big Data"
    ],
    beneficios: [
      "Salário competitivo",
      "Bônus anual",
      "Plano de saúde premium",
      "Participação em conferências",
      "Equipamentos de última geração"
    ],
    salario: "R$ 15.000 - R$ 22.000",
    publicadoEm: "2025-01-11"
  },
  {
    id: 5,
    titulo: "DevOps Engineer",
    empresa: "Cloud Services",
    logo: "/placeholder.svg?height=60&width=60",
    localizacao: "Brasília/DF",
    tipo: "Remoto",
    nivel: "Sênior",
    area: "Desenvolvimento",
    descricao: "Engenheiro DevOps para implementação de infraestrutura cloud e automação de processos.",
    requisitos: [
      "5+ anos em DevOps",
      "Kubernetes e Docker",
      "AWS ou Azure",
      "Terraform e CI/CD"
    ],
    diferenciais: [
      "Certificações cloud",
      "Experiência com multi-cloud",
      "Conhecimento de segurança"
    ],
    beneficios: [
      "100% remoto",
      "Auxílio internet",
      "Plano de saúde",
      "Certificações pagas",
      "Horário flexível"
    ],
    salario: "R$ 14.000 - R$ 20.000",
    publicadoEm: "2025-01-09"
  },
  {
    id: 6,
    titulo: "Mobile Developer",
    empresa: "Mobile Apps Co",
    logo: "/placeholder.svg?height=60&width=60",
    localizacao: "Florianópolis/SC",
    tipo: "Híbrido",
    nivel: "Pleno",
    area: "Desenvolvimento",
    descricao: "Desenvolvedor mobile para aplicativos híbridos com React Native.",
    requisitos: [
      "3+ anos com mobile",
      "React Native",
      "iOS e Android",
      "APIs RESTful"
    ],
    diferenciais: [
      "Experiência com Flutter",
      "Apps publicados nas stores",
      "Conhecimento de UX mobile"
    ],
    beneficios: [
      "Vale refeição",
      "Plano de saúde",
      "Day off aniversário",
      "Ambiente descontraído",
      "Café e snacks"
    ],
    salario: "R$ 8.000 - R$ 12.000",
    publicadoEm: "2025-01-13"
  },
  {
    id: 7,
    titulo: "Gerente de Marketing Digital",
    empresa: "Marketing Pro",
    logo: "/placeholder.svg?height=60&width=60",
    localizacao: "Curitiba/PR",
    tipo: "Presencial",
    nivel: "Sênior",
    area: "Marketing",
    descricao: "Gerente para liderar estratégias digitais e gestão de campanhas.",
    requisitos: [
      "5+ anos em marketing digital",
      "Google Ads e Facebook Ads",
      "Gestão de equipes",
      "Analytics e métricas"
    ],
    diferenciais: [
      "MBA em Marketing",
      "Certificações Google",
      "Experiência em e-commerce"
    ],
    beneficios: [
      "Salário compatível com mercado",
      "Bônus por resultados",
      "Plano de saúde",
      "Vale alimentação",
      "Estacionamento"
    ],
    salario: "R$ 10.000 - R$ 15.000",
    publicadoEm: "2025-01-07"
  },
  {
    id: 8,
    titulo: "Frontend Developer",
    empresa: "Frontend Studio",
    logo: "/placeholder.svg?height=60&width=60",
    localizacao: "Vitória/ES",
    tipo: "Remoto",
    nivel: "Júnior",
    area: "Desenvolvimento",
    descricao: "Desenvolvedor frontend para criar interfaces web modernas e responsivas.",
    requisitos: [
      "1+ ano com frontend",
      "HTML, CSS, JavaScript",
      "React ou Vue.js",
      "Git"
    ],
    diferenciais: [
      "TypeScript",
      "Testes automatizados",
      "Design responsivo"
    ],
    beneficios: [
      "Trabalho remoto",
      "Horário flexível",
      "Mentoria técnica",
      "Cursos pagos",
      "Ambiente jovem"
    ],
    salario: "R$ 4.000 - R$ 6.000",
    publicadoEm: "2025-01-14"
  }
]
