'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'
import {
  LayoutDashboard,
  FileText,
  Megaphone,
  CalendarDays,
  BarChart3,
  LogOut,
  Menu,
  X,
} from 'lucide-react'

const AuthContext = createContext<{ user: User | null }>({ user: null })
export const useAuth = () => useContext(AuthContext)

const navItems = [
  { href: '/admin', label: 'ダッシュボード', icon: LayoutDashboard },
  { href: '/admin/articles', label: '記事管理', icon: FileText },
  { href: '/admin/news', label: 'ニュース', icon: Megaphone },
  { href: '/admin/events', label: 'イベント', icon: CalendarDays },
  { href: '/admin/analytics', label: '分析', icon: BarChart3 },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-400 text-sm">読み込み中...</div>
      </div>
    )
  }

  // Show login page without sidebar
  if (pathname === '/admin/login') {
    return (
      <>
        <head>
          <title>ログイン | つづく Admin</title>
          <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23374151'/><text x='16' y='22' text-anchor='middle' font-family='sans-serif' font-weight='700' font-size='14' fill='%23f97316'>A</text></svg>" />
        </head>
        {children}
      </>
    )
  }

  // Redirect to login if not authenticated
  if (!user) {
    if (typeof window !== 'undefined') {
      router.push('/admin/login')
    }
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-400 text-sm">ログインページに移動中...</div>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ user }}>
      <head>
        <title>つづく Admin</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23374151'/><text x='16' y='22' text-anchor='middle' font-family='sans-serif' font-weight='700' font-size='14' fill='%23f97316'>A</text></svg>" />
      </head>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-white border-r border-gray-200 flex flex-col
          transition-transform duration-200 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="h-16 flex items-center px-6 border-b border-gray-100">
            <Link href="/admin" className="flex items-center gap-2" onClick={() => setSidebarOpen(false)}>
              <span className="text-lg font-semibold text-gray-900">つづく</span>
              <span className="text-[0.6rem] tracking-wider text-gray-400 uppercase">Admin</span>
            </Link>
          </div>

          <nav className="flex-1 px-3 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href ||
                (item.href !== '/admin' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-orange-50 text-orange-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon size={18} strokeWidth={1.5} />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="px-3 py-4 border-t border-gray-100">
            <div className="px-3 py-2 text-xs text-gray-400 truncate mb-2">
              {user.email}
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors w-full"
            >
              <LogOut size={18} strokeWidth={1.5} />
              ログアウト
            </button>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top bar */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 lg:px-8 shrink-0">
            <button
              className="lg:hidden p-2 -ml-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            <div className="flex-1" />
            <Link
              href="/"
              target="_blank"
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              サイトを表示 →
            </Link>
          </header>

          {/* Page content */}
          <main className="flex-1 p-4 lg:p-8 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </AuthContext.Provider>
  )
}
