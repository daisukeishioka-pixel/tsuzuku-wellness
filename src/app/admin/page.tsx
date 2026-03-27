'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import {
  FileText,
  Eye,
  Megaphone,
  CalendarDays,
  TrendingUp,
  Users,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'

interface DashboardStats {
  totalArticles: number
  publishedArticles: number
  draftArticles: number
  totalViews: number
  totalNews: number
  totalEvents: number
}

function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  trendLabel,
  color = 'gray',
}: {
  label: string
  value: string | number
  icon: React.ElementType
  trend?: 'up' | 'down'
  trendLabel?: string
  color?: string
}) {
  const colorMap: Record<string, string> = {
    orange: 'bg-orange-50 text-orange-600',
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    gray: 'bg-gray-50 text-gray-600',
  }
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg ${colorMap[color]}`}>
          <Icon size={18} strokeWidth={1.5} />
        </div>
        {trend && (
          <span className={`flex items-center gap-0.5 text-xs font-medium ${
            trend === 'up' ? 'text-green-600' : 'text-red-500'
          }`}>
            {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            {trendLabel}
          </span>
        )}
      </div>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  )
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [recentArticles, setRecentArticles] = useState<{ title: string; status: string; updated_at: string }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const [articlesRes, newsRes, eventsRes] = await Promise.all([
        supabase.from('tw_articles').select('id, status, views, title, updated_at').order('updated_at', { ascending: false }),
        supabase.from('tw_news').select('id', { count: 'exact', head: true }),
        supabase.from('tw_events').select('id', { count: 'exact', head: true }),
      ])

      const articles = articlesRes.data || []
      const published = articles.filter(a => a.status === 'published')
      const drafts = articles.filter(a => a.status === 'draft')
      const totalViews = articles.reduce((sum, a) => sum + (a.views || 0), 0)

      setStats({
        totalArticles: articles.length,
        publishedArticles: published.length,
        draftArticles: drafts.length,
        totalViews,
        totalNews: newsRes.count || 0,
        totalEvents: eventsRes.count || 0,
      })

      setRecentArticles(
        articles.slice(0, 5).map(a => ({
          title: a.title,
          status: a.status,
          updated_at: a.updated_at,
        }))
      )

      setLoading(false)
    }
    fetchData()
  }, [])

  if (loading) {
    return <div className="text-gray-400 text-sm">読み込み中...</div>
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-gray-900">ダッシュボード</h1>
        <p className="text-sm text-gray-500 mt-1">つづくウェルネスの概要</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="公開記事数"
          value={stats?.publishedArticles ?? 0}
          icon={FileText}
          color="orange"
        />
        <StatCard
          label="累計PV"
          value={stats?.totalViews?.toLocaleString() ?? '0'}
          icon={Eye}
          color="blue"
        />
        <StatCard
          label="ニュース"
          value={stats?.totalNews ?? 0}
          icon={Megaphone}
          color="green"
        />
        <StatCard
          label="イベント"
          value={stats?.totalEvents ?? 0}
          icon={CalendarDays}
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent articles */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">最近の記事</h2>
          {recentArticles.length === 0 ? (
            <p className="text-sm text-gray-400 py-4 text-center">記事がありません</p>
          ) : (
            <div className="space-y-3">
              {recentArticles.map((a, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <span className="text-sm text-gray-700 truncate mr-3">{a.title}</span>
                  <span className={`text-[0.65rem] px-2 py-0.5 rounded-full shrink-0 ${
                    a.status === 'published'
                      ? 'bg-green-50 text-green-600'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {a.status === 'published' ? '公開' : '下書き'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">クイックアクション</h2>
          <div className="grid grid-cols-1 gap-2">
            {[
              { label: '新しい記事を作成', href: '/admin/articles/new', icon: FileText, color: 'text-orange-600 bg-orange-50' },
              { label: 'ニュースを投稿', href: '/admin/news', icon: Megaphone, color: 'text-green-600 bg-green-50' },
              { label: 'イベントを登録', href: '/admin/events', icon: CalendarDays, color: 'text-purple-600 bg-purple-50' },
              { label: '分析を確認', href: '/admin/analytics', icon: BarChart3, color: 'text-blue-600 bg-blue-50' },
            ].map((action) => (
              <a
                key={action.href}
                href={action.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className={`p-1.5 rounded-md ${action.color}`}>
                  <action.icon size={16} strokeWidth={1.5} />
                </span>
                <span className="text-sm text-gray-700">{action.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Draft articles */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">概要</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">総記事数</span>
              <span className="text-sm font-medium text-gray-900">{stats?.totalArticles ?? 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">下書き</span>
              <span className="text-sm font-medium text-gray-900">{stats?.draftArticles ?? 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">公開済み</span>
              <span className="text-sm font-medium text-gray-900">{stats?.publishedArticles ?? 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
