export type UserRole = 'candidate' | 'employee' | 'manager' | 'hr'

export interface AuthUser {
  id: string
  email: string
  name: string
  role: UserRole
  avatar: string
  company?: string
}

export interface LoginCredentials {
  email: string
  password: string
}

// Demo users for testing
export const demoUsers: Array<AuthUser & { password: string }> = [
  {
    id: '1',
    email: 'candidato@exemplo.com',
    password: 'candidato123',
    name: 'João Silva',
    role: 'candidate',
    avatar: 'J',
  },
  {
    id: '2',
    email: 'funcionario@empresa.com',
    password: 'func123',
    name: 'Maria Santos',
    role: 'employee',
    avatar: 'M',
    company: 'Tech Corp',
  },
  {
    id: '3',
    email: 'gestor@empresa.com',
    password: 'gestor123',
    name: 'Carlos Oliveira',
    role: 'manager',
    avatar: 'C',
    company: 'Tech Corp',
  },
  {
    id: '4',
    email: 'rh@empresa.com',
    password: 'rh123',
    name: 'Ana Costa',
    role: 'hr',
    avatar: 'A',
    company: 'Tech Corp',
  },
]
