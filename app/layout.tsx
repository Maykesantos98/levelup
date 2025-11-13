import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Sidebar } from "@/components/sidebar"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LevelUp IA - Gamificação Corporativa",
  description:
    "Transforme o treinamento profissional em uma jornada de jogo. Missões, ranking, conquistas e recompensas.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${_inter.className} antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
