import { LinkIcon, Laptop, BarChart, Briefcase, Palette, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const partners = [
  {
    id: 1,
    name: "DIO",
    logo: "💻",
    logoBg: "from-purple-500 to-indigo-500",
    category: "Bootcamps",
    categoryBadge: { icon: Laptop, color: "purple" },
    featured: true,
    description:
      "Digital Innovation One - Conectando talentos às oportunidades. Bootcamps gratuitos, desafios de código e mentorias com grandes empresas de tecnologia.",
    benefit: "Acesso prioritário a bootcamps exclusivos",
  },
  {
    id: 2,
    name: "Alura",
    logo: "💻",
    logoBg: "from-blue-500 to-cyan-500",
    category: "Cursos",
    categoryBadge: { icon: BarChart, color: "blue" },
    featured: true,
    description:
      "Escola online de tecnologia com mais de 1.500 cursos em programação, UX, design, data science, DevOps e muito mais. Aprenda com instrutores experientes e projetos práticos.",
    benefit: "15% de desconto para usuários LevelUp IA nível 5+",
  },
  {
    id: 3,
    name: "Rocketseat",
    logo: "🚀",
    logoBg: "from-purple-500 to-pink-500",
    category: "Cursos",
    categoryBadge: { icon: Laptop, color: "purple" },
    featured: true,
    description:
      "Plataforma de ensino de programação focada em JavaScript, React, Node.js e tecnologias modernas. Aprenda na prática com projetos reais e comunidade ativa.",
    benefit: "10% off em planos anuais",
  },
]

const categories = [
  { id: "all", label: "Todas", icon: null },
  { id: "tech", label: "Tecnologia", icon: Laptop },
  { id: "data", label: "Dados", icon: BarChart },
  { id: "business", label: "Negócios", icon: Briefcase },
  { id: "design", label: "Design", icon: Palette },
]

export default function ParceirosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[oklch(0.35_0.2_265)] to-[oklch(0.25_0.15_240)] px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <LinkIcon className="w-10 h-10 text-purple-400" />
            <h1 className="text-4xl font-bold text-white">Parceiros</h1>
          </div>
          <p className="text-blue-100 text-lg">Acesse plataformas parceiras com benefícios exclusivos</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {/* Exclusive Benefits Banner */}
        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold mb-2">Benefícios Exclusivos</h2>
              <p className="text-muted-foreground">
                Como usuário do LevelUp IA, você tem acesso a descontos especiais e conteúdos exclusivos em todas as
                plataformas parceiras. Quanto maior seu nível, maiores os benefícios!
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={cat.id === "all" ? "default" : "outline"}
              className={cat.id === "all" ? "bg-primary" : "border-border"}
            >
              {cat.icon && <cat.icon className="w-4 h-4 mr-2" />}
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Partners in Spotlight */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <h2 className="text-2xl font-bold">Parceiros em Destaque</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${partner.logoBg} rounded-2xl flex items-center justify-center text-3xl`}
                  >
                    {partner.logo}
                  </div>
                  {partner.featured && (
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Destaque
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-xl">{partner.name}</h3>
                  <Badge
                    variant="outline"
                    className={`border-${partner.categoryBadge.color}-500/50 text-${partner.categoryBadge.color}-400`}
                  >
                    {partner.category}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex-1">{partner.description}</p>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                  <p className="text-sm text-green-400 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    {partner.benefit}
                  </p>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Acessar Plataforma →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
