import { useUserStore } from '@/lib/store/user-store'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TrendingUp, Award, Target, Zap, Download, Share2, Calendar, Clock } from 'lucide-react'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

export default function MeuProgressoPage() {
  const { user } = useUserStore()

  // Dados de progresso ao longo do tempo
  const progressData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'XP Ganho',
        data: [100, 250, 400, 650, 900, 1200],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  }

  // Dados de categorias
  const categoryData = {
    labels: ['Liderança', 'Técnico', 'Comunicação', 'Gestão', 'Inovação'],
    datasets: [
      {
        label: 'Missões por Categoria',
        data: [8, 15, 6, 4, 10],
        backgroundColor: [
          'rgba(255, 159, 64, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
      },
    ],
  }

  // Dados de skills
  const skillsData = {
    labels: ['React', 'Python', 'SQL', 'UX/UI', 'Agile'],
    datasets: [
      {
        label: 'Nível de Proficiência',
        data: [85, 70, 65, 90, 75],
        backgroundColor: 'rgba(147, 51, 234, 0.8)',
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      y: {
        ticks: { color: '#9ca3af' },
        grid: { color: '#2a3284' },
      },
      x: {
        ticks: { color: '#9ca3af' },
        grid: { color: '#2a3284' },
      },
    },
  }

  const handleExportProfile = () => {
    alert('Exportando perfil para compartilhar no LinkedIn...')
  }

  const handleDownloadReport = () => {
    alert('Baixando relatório de progresso em PDF...')
  }

  return (
    <div className="min-h-screen bg-[#0a0e27] p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Meu Progresso</h1>
            <p className="text-gray-400">Acompanhe sua evolução e conquistas na plataforma</p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handleDownloadReport}
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
            >
              <Download className="w-4 h-4 mr-2" />
              Baixar Relatório
            </Button>
            <Button
              onClick={handleExportProfile}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Compartilhar no LinkedIn
            </Button>
          </div>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 p-6">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-white" />
              <span className="text-white/80 text-sm">Total</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{user?.xp || 0} XP</h3>
            <p className="text-white/80 text-sm">Experiência Total</p>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0 p-6">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-8 h-8 text-white" />
              <span className="text-white/80 text-sm">Ativas</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">8</h3>
            <p className="text-white/80 text-sm">Missões Ativas</p>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-600 to-orange-600 border-0 p-6">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 text-white" />
              <span className="text-white/80 text-sm">Desbloqueadas</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">12</h3>
            <p className="text-white/80 text-sm">Conquistas</p>
          </Card>

          <Card className="bg-gradient-to-br from-green-600 to-green-700 border-0 p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-white" />
              <span className="text-white/80 text-sm">Posição</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">#15</h3>
            <p className="text-white/80 text-sm">Ranking Geral</p>
          </Card>
        </div>

        {/* Gráfico de Progresso */}
        <Card className="bg-[#1a1f3a] border-[#2a3284] p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-500" />
            Evolução de XP
          </h2>
          <div className="h-[300px]">
            <Line data={progressData} options={chartOptions} />
          </div>
        </Card>

        {/* Gráficos de Análise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Missões por Categoria */}
          <Card className="bg-[#1a1f3a] border-[#2a3284] p-6">
            <h2 className="text-xl font-bold text-white mb-4">Missões por Categoria</h2>
            <div className="h-[300px]">
              <Doughnut 
                data={categoryData} 
                options={{
                  ...chartOptions,
                  scales: undefined,
                }} 
              />
            </div>
          </Card>

          {/* Nível de Skills */}
          <Card className="bg-[#1a1f3a] border-[#2a3284] p-6">
            <h2 className="text-xl font-bold text-white mb-4">Habilidades Desenvolvidas</h2>
            <div className="h-[300px]">
              <Bar data={skillsData} options={chartOptions} />
            </div>
          </Card>
        </div>

        {/* Conquistas Recentes */}
        <Card className="bg-[#1a1f3a] border-[#2a3284] p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            Conquistas Recentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Expert em React', date: '2 dias atrás', icon: '⚛️' },
              { name: 'Streak de 7 dias', date: '1 semana atrás', icon: '🔥' },
              { name: 'Python Master', date: '2 semanas atrás', icon: '🐍' },
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-[#0a0e27] border border-[#2a3284] rounded-lg p-4 hover:border-yellow-500/50 transition-all"
              >
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <h3 className="text-white font-semibold mb-1">{achievement.name}</h3>
                <p className="text-gray-400 text-sm flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {achievement.date}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Metas do Mês */}
        <Card className="bg-[#1a1f3a] border-[#2a3284] p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-500" />
            Metas do Mês
          </h2>
          <div className="space-y-4">
            {[
              { name: 'Completar 10 missões', progress: 80, current: 8, total: 10 },
              { name: 'Ganhar 1000 XP', progress: 65, current: 650, total: 1000 },
              { name: 'Conquistar 3 badges', progress: 33, current: 1, total: 3 },
            ].map((goal, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{goal.name}</span>
                  <span className="text-gray-400 text-sm">
                    {goal.current}/{goal.total}
                  </span>
                </div>
                <div className="w-full bg-[#0a0e27] rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
