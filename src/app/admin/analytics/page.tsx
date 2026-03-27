'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Eye, FileText, TrendingUp, Users, ArrowUpRight } from 'lucide-react'

interface ArticleStat {
  title: string
  slug: string
  views: number
  category_slug: string
  published_at: string | null
}

interface PageViewStat {
  path: string
  count: number
}

export default function AnalyticsPage() {
  const [articles, setArticles] = useState<ArticleStat[]>([])
  const [pageViews, setPageViews] = useState<PageViewStat[]>([])
  const [totalViews, setTotalViews] = useState(0)
  const [totalPublished, setTotalPublished] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      // Fetch articles ranked by views
      const { data: articleData } = await supabase
        .from('tw_articles')
        .select('title, slug, views, category_slug, published_at')
        .eq('status', 'published')
        .order('views', { ascending: false })
        .limit(20)

      const arts = (articleData as ArticleStat[]) || []
      setArticles(arts)
      setTotalPublished(arts.length)
      setTotalViews(arts.reduce((sum, a) => sum + (a.views || 0), 0))

      // Simple aggregation from tw_page_views
      const { data: pvRaw } = await supabase
        .from('tw_page_views')
        .select('path')

      if (pvRaw) {
        const counts: Record<string, number> = {}
        pvRaw.forEach((pv: { path: string }) => {
          counts[pv.path] = (counts[pv.path] || 0) + 1
        })
        const sorted = Object.entries(counts)
          .map(([path, count]) => ({ path, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 10)
        setPageViews(sorted)
      }

      setLoading(false)
    }
    fetch()
  }, [])

  if (loading) {
    return <div className="text-gray-400 text-sm">読み込み中...</div>
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-gray-900">分析</h1>
        <p className="text-sm text-gray-500 mt-1">つづくウェルネスのパフォーマンス</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 w-fit mb-3">
            <Eye size={18} strokeWidth={1.5} />
          </div>
          <p className="text-2xl font-semibold text-gray-900">{totalViews.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">累計PV</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="p-2 rounded-lg bg-orange-50 text-orange-600 w-fit mb-3">
            <FileText size={18} strokeWidth={1.5} />
          </div>
          <p className="text-2xl font-semibold text-gray-900">{totalPublished}</p>
          <p className="text-xs text-gray-500 mt-1">公開記事数</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="p-2 rounded-lg bg-green-50 text-green-600 w-fit mb-3">
            <TrendingUp size={18} strokeWidth={1.5} />
          </div>
          <p className="text-2xl font-semibold text-gray-900">
            {totalPublished > 0 ? Math.round(totalViews / totalPublished).toLocaleString() : 0}
          </p>
          <p className="text-xs text-gray-500 mt-1">平均PV/記事</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="p-2 rounded-lg bg-purple-50 text-purple-600 w-fit mb-3">
            <Users size={18} strokeWidth={1.5} />
          </div>
          <p className="text-2xl font-semibold text-gray-900">{pageViews.reduce((s, p) => s + p.count, 0).toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-1">ページビュー合計</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top articles by views */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">人気記事（PV順）</h2>
          {articles.length === 0 ? (
            <p className="text-sm text-gray-400 py-4 text-center">公開記事がありません</p>
          ) : (
            <div className="space-y-2">
              {articles.slice(0, 10).map((a, i) => (
                <div key={a.slug} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                  <span className="text-xs text-gray-400 w-5 shrink-0 text-right">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700 truncate">{a.title}</p>
                    <p className="text-[0.65rem] text-gray-400">{a.category_slug}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500 shrink-0">
                    <Eye size={12} />
                    {a.views?.toLocaleString() || 0}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Page views by path */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">ページ別アクセス</h2>
          {pageViews.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm text-gray-400 mb-2">データがありません</p>
              <p className="text-xs text-gray-300">
                サイトにアクセスがあるとここにデータが表示されます
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {pageViews.map((pv, i) => (
                <div key={pv.path} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                  <span className="text-xs text-gray-400 w-5 shrink-0 text-right">{i + 1}</span>
                  <p className="text-sm text-gray-700 flex-1 truncate font-mono">{pv.path}</p>
                  <span className="text-sm text-gray-500 shrink-0">{pv.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info card */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 lg:col-span-2">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">外部分析ツール</h2>
          <p className="text-sm text-gray-500 mb-4">
            より詳細な分析は以下の外部ツールで確認できます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { name: 'Google Analytics (GA4)', desc: 'ユーザー行動・コンバージョン分析', color: 'bg-orange-50 text-orange-700' },
              { name: 'Search Console', desc: '検索キーワード・インデックス状況', color: 'bg-blue-50 text-blue-700' },
              { name: 'Vercel Analytics', desc: 'ページパフォーマンス・Web Vitals', color: 'bg-gray-50 text-gray-700' },
            ].map((tool) => (
              <div key={tool.name} className={`rounded-lg p-4 ${tool.color}`}>
                <p className="text-sm font-medium">{tool.name}</p>
                <p className="text-xs opacity-70 mt-1">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
