import { useState } from 'react'
import { useUserStore } from '@/lib/store/user-store'
import { MessageCircle, Heart, Share2, Award, TrendingUp, Briefcase, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

export default function FeedSocialPage() {
  const { user } = useUserStore()
  const [newPost, setNewPost] = useState('')
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Ana Silva',
      avatar: 'A',
      role: 'Desenvolvedora Front-end',
      time: '2h atrás',
      type: 'achievement',
      content: 'Acabei de conquistar a badge "Expert em React"! 🎉',
      achievement: 'Expert em React',
      likes: 24,
      comments: 5,
      liked: false
    },
    {
      id: 2,
      user: 'Carlos Mendes',
      avatar: 'C',
      role: 'Analista de Dados',
      time: '5h atrás',
      type: 'mission',
      content: 'Completei a missão "Python para Data Science" em tempo recorde! Recomendo muito para quem está começando.',
      mission: 'Python para Data Science',
      xp: 300,
      likes: 18,
      comments: 3,
      liked: false
    },
    {
      id: 3,
      user: 'Mariana Costa',
      avatar: 'M',
      role: 'Product Manager',
      time: '1d atrás',
      type: 'post',
      content: 'Compartilhando minha experiência com metodologias ágeis. Alguém mais trabalhando com Scrum na equipe? 🚀',
      likes: 32,
      comments: 12,
      liked: true
    },
    {
      id: 4,
      user: 'Pedro Santos',
      avatar: 'P',
      role: 'Designer UX/UI',
      time: '2d atrás',
      type: 'certificate',
      content: 'Certificado conquistado: Design Thinking! Muito feliz com esse aprendizado.',
      certificate: 'Design Thinking',
      likes: 45,
      comments: 8,
      liked: false
    }
  ])

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked }
        : post
    ))
  }

  const handlePost = () => {
    if (newPost.trim()) {
      const newPostObj = {
        id: posts.length + 1,
        user: user?.name || 'Você',
        avatar: user?.name?.[0] || 'U',
        role: user?.role || 'Profissional',
        time: 'agora',
        type: 'post' as const,
        content: newPost,
        likes: 0,
        comments: 0,
        liked: false
      }
      setPosts([newPostObj, ...posts])
      setNewPost('')
    }
  }

  const getPostIcon = (type: string) => {
    switch (type) {
      case 'achievement': return <Award className="w-5 h-5 text-yellow-500" />
      case 'mission': return <TrendingUp className="w-5 h-5 text-blue-500" />
      case 'certificate': return <BookOpen className="w-5 h-5 text-green-500" />
      default: return <Briefcase className="w-5 h-5 text-purple-500" />
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0e27] p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Feed Social</h1>
          <p className="text-gray-400">Acompanhe as conquistas e atividades da comunidade</p>
        </div>

        {/* Nova Postagem */}
        <Card className="bg-[#1a1f3a] border-[#2a3284] p-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              {user?.name?.[0] || 'U'}
            </div>
            <div className="flex-1 space-y-3">
              <Textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Compartilhe suas conquistas, aprendizados ou experiências..."
                className="bg-[#0a0e27] border-[#2a3284] text-white min-h-[100px] resize-none"
              />
              <div className="flex justify-end">
                <Button
                  onClick={handlePost}
                  disabled={!newPost.trim()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Publicar
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Feed de Posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="bg-[#1a1f3a] border-[#2a3284] p-6 hover:border-blue-500/50 transition-all">
              {/* Header do Post */}
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold">{post.user}</h3>
                    {getPostIcon(post.type)}
                  </div>
                  <p className="text-gray-400 text-sm">{post.role}</p>
                  <p className="text-gray-500 text-xs">{post.time}</p>
                </div>
              </div>

              {/* Conteúdo */}
              <p className="text-gray-300 mb-4">{post.content}</p>

              {/* Badge/Info Extra */}
              {post.achievement && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-yellow-500 font-semibold">{post.achievement}</span>
                  </div>
                </div>
              )}

              {post.mission && (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-500" />
                      <span className="text-blue-500 font-semibold">{post.mission}</span>
                    </div>
                    {post.xp && (
                      <span className="text-yellow-500 font-bold">+{post.xp} XP</span>
                    )}
                  </div>
                </div>
              )}

              {post.certificate && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-green-500" />
                    <span className="text-green-500 font-semibold">{post.certificate}</span>
                  </div>
                </div>
              )}

              {/* Ações */}
              <div className="flex items-center gap-6 pt-4 border-t border-[#2a3284]">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-2 transition-colors ${
                    post.liked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${post.liked ? 'fill-current' : ''}`} />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Compartilhar</span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
