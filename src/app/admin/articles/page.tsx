'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import type { Article } from '@/lib/admin-types'
import { Plus, Pencil, Trash2, Eye, Search } from 'lucide-react'

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all')

  useEffect(() => {
    fetchArticles()
  }, [])

  async function fetchArticles() {
    const { data } = await supabase
      .from('tw_articles')
      .select('*')
      .order('updated_at', { ascending: false })
    setArticles((data as Article[]) || [])
    setLoading(false)
  }

  async function deleteArticle(id: string) {
    if (!confirm('この記事を削除しますか？')) return
    await supabase.from('tw_article_sections').delete().eq('article_id', id)
    await supabase.from('tw_article_takeaways').delete().eq('article_id', id)
    await supabase.from('tw_articles').delete().eq('id', id)
    setArticles(articles.filter(a => a.id !== id))
  }

  async function toggleStatus(article: Article) {
    const newStatus = article.status === 'published' ? 'draft' : 'published'
    const updates: Record<string, unknown> = { status: newStatus }
    if (newStatus === 'published' && !article.published_at) {
      updates.published_at = new Date().toISOString()
    }
    await supabase.from('tw_articles').update(updates).eq('id', article.id)
    setArticles(articles.map(a => a.id === article.id ? { ...a, status: newStatus, ...updates } as Article : a))
  }

  const filtered = articles.filter(a => {
    if (filter !== 'all' && a.status !== filter) return false
    if (search && !a.title.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">記事管理</h1>
          <p className="text-sm text-gray-500 mt-1">{articles.length}件の記事</p>
        </div>
        <Link
          href="/admin/articles/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Plus size={16} />
          新しい記事を作成
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="記事を検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          {([['all', 'すべて'], ['published', '公開'], ['draft', '下書き']] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                filter === key ? 'bg-white text-gray-900 shadow-sm font-medium' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="text-gray-400 text-sm py-8 text-center">読み込み中...</div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 py-16 text-center">
          <p className="text-gray-400 text-sm mb-4">記事がありません</p>
          <Link
            href="/admin/articles/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800"
          >
            <Plus size={16} />
            最初の記事を作成
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">タイトル</th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">カテゴリ</th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">ステータス</th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">PV</th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">更新日</th>
                  <th className="text-right px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((article) => (
                  <tr key={article.id} className="hover:bg-gray-50/50">
                    <td className="px-5 py-3.5">
                      <p className="font-medium text-gray-900 truncate max-w-[250px]">{article.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5 md:hidden">{article.category_slug}</p>
                    </td>
                    <td className="px-5 py-3.5 hidden md:table-cell">
                      <span className="text-xs text-gray-500">{article.category_slug}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <button
                        onClick={() => toggleStatus(article)}
                        className={`text-[0.65rem] px-2.5 py-1 rounded-full font-medium cursor-pointer ${
                          article.status === 'published'
                            ? 'bg-green-50 text-green-600 hover:bg-green-100'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                      >
                        {article.status === 'published' ? '公開' : '下書き'}
                      </button>
                    </td>
                    <td className="px-5 py-3.5 hidden lg:table-cell">
                      <span className="text-gray-500">{article.views?.toLocaleString() || 0}</span>
                    </td>
                    <td className="px-5 py-3.5 hidden lg:table-cell">
                      <span className="text-xs text-gray-400">
                        {new Date(article.updated_at).toLocaleDateString('ja-JP')}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {article.status === 'published' && (
                          <Link
                            href={`/article/${article.slug}`}
                            target="_blank"
                            className="p-1.5 text-gray-400 hover:text-blue-600 rounded-md hover:bg-blue-50"
                            title="プレビュー"
                          >
                            <Eye size={15} />
                          </Link>
                        )}
                        <Link
                          href={`/admin/articles/${article.id}/edit`}
                          className="p-1.5 text-gray-400 hover:text-orange-600 rounded-md hover:bg-orange-50"
                          title="編集"
                        >
                          <Pencil size={15} />
                        </Link>
                        <button
                          onClick={() => deleteArticle(article.id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50"
                          title="削除"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
