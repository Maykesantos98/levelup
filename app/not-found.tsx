import { FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <FileQuestion className="w-20 h-20 text-muted-foreground/50 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-xl font-semibold mb-3">Página não encontrada</h2>
        <p className="text-muted-foreground mb-6">A página que você está procurando não existe ou foi movida.</p>
        <Link href="/">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Voltar ao Dashboard
          </Button>
        </Link>
      </div>
    </div>
  )
}
