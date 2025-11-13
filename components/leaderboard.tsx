import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, TrendingUp } from "lucide-react"

const topUsers = [
  {
    rank: 1,
    name: "Ana Silva",
    points: 3850,
    change: "+125",
    avatar: "/professional-woman.png",
  },
  {
    rank: 2,
    name: "Pedro Santos",
    points: 3420,
    change: "+98",
    avatar: "/professional-man.png",
  },
  {
    rank: 3,
    name: "Maria Costa",
    points: 3120,
    change: "+156",
    avatar: "/business-woman.png",
  },
  {
    rank: 4,
    name: "Carlos (Você)",
    points: 2450,
    change: "+240",
    avatar: "/business-man.png",
    isCurrentUser: true,
  },
  {
    rank: 5,
    name: "Julia Rodrigues",
    points: 2380,
    change: "+87",
    avatar: "/woman-executive.png",
  },
]

const rankIcons = {
  1: Trophy,
  2: Medal,
  3: Medal,
}

const rankColors = {
  1: "text-accent",
  2: "text-muted-foreground",
  3: "text-chart-5",
}

export function Leaderboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Trophy className="h-5 w-5 text-accent" />
          Ranking Semanal
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {topUsers.map((user) => {
          const RankIcon = rankIcons[user.rank as keyof typeof rankIcons]
          const rankColor = rankColors[user.rank as keyof typeof rankColors]

          return (
            <div
              key={user.rank}
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                user.isCurrentUser ? "bg-primary/5 border border-primary/20" : "hover:bg-muted/50"
              }`}
            >
              <div className="flex items-center justify-center w-8 h-8 font-bold text-sm">
                {RankIcon ? (
                  <RankIcon className={`h-5 w-5 ${rankColor}`} />
                ) : (
                  <span className="text-muted-foreground">{user.rank}</span>
                )}
              </div>

              <img
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">
                  {user.name}
                  {user.isCurrentUser && (
                    <Badge variant="secondary" className="ml-2 text-[10px] h-5">
                      Você
                    </Badge>
                  )}
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 text-secondary" />
                  <span className="text-secondary">{user.change}</span>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-sm">{user.points.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">pontos</p>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
