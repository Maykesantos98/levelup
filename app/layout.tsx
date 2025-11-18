import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { Sidebar } from "@/components/sidebar"
import { ErrorBoundary } from "@/components/error-boundary"
import { AuthGuard } from "@/components/auth-guard"
import { Toaster } from "@/components/ui/toaster"
import { PageTracker } from "@/components/page-tracker"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LevelUp IA - Gamificação Corporativa",
  description:
    "Transforme o treinamento profissional em uma jornada de jogo. Missões, ranking, conquistas e recompensas.",
  generator: "v0.app",
  keywords: ["gamificação", "treinamento", "corporativo", "aprendizagem", "educação"],
  authors: [{ name: "LevelUp Team" }],
  openGraph: {
    title: "LevelUp IA - Gamificação Corporativa",
    description: "Transforme o treinamento profissional em uma jornada de jogo",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${_inter.className} antialiased`}>
        <ErrorBoundary>
          <PageTracker />
          <AuthGuard>
            <LayoutContent>{children}</LayoutContent>
          </AuthGuard>
          <Toaster />
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto ml-0 md:ml-72 min-h-screen">{children}</main>
    </div>
  )
}
