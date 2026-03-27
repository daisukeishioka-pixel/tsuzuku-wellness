'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { News } from '@/lib/admin-types'
import { Plus, Pencil, Trash2, X, Save, Eye } from 'lucide-react'

export default function NewsPage() {
  const [items, setItems] = useState<News[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<News | null>(null)
  const [isNew, setIsNew] = useState(false)

  // Form state
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    fetchNews()
  }, [])

  async function fetchNews() {
    const { data } = await supabase.from('tw_news').select('*').order('created_at', { ascending: false })
    setItems((data as News[]) || [])
    setLoading(false)
  }

  function startNew() {
    setEditing(null)
    setIsNew(true)
    setTitle('')
    setSlug('')
    setBody('')
  }

  function startEdit(item: News) {
    setEditing(item)
    setIsNew(false)
    setTitle(item.title)
    setSlug(item.slug)
    setBody(item.body || '')
  }

  function cancelEdit() {
    setEditing(null)
    setIsNew(false)
  }

  async function handleSave(status: 'draft' | 'published') {
    if (!title || !slug) { alert('タイトルとスラッグは必須です'); return }

    const data: Record<string, unknown> = {
      title, slug, body: body || null, status,
      updated_at: new Date().toISOString(),
    }
    if (status === 'published') data.published_at = new Date().toISOString()

    if (isNew) {
      await supabase.from('tw_news').insert(data)
    } else if (editing) {
      await supabase.from('tw_news').update(data).eq('id', editing.id)
    }
    cancelEdit()
    fetchNews()
  }

  async function deleteItem(id: string) {
    if (!confirm('このニュースを削除しますか？')) return
    await supabase.from('tw_news').delete().eq('id', id)
    setItems(items.filter(n => n.id !== id))
  }

  async function toggleStatus(item: News) {
    const newStatus = item.status === 'published' ? 'draft' : 'published'
    const updates: Record<string, unknown> = { status: newStatus }
    if (newStatus === 'published') updates.published_at = new Date().toISOString()
    await supabase.from('tw_news').update(updates).eq('id', item.id)
    fetchNews()
  }

  // Show form
  if (isNew || editing) {
    return (
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={cancelEdit} className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100">
            <X size={18} />
          </button>
          <h1 className="text-xl font-semibold text-gray-900 flex-1">
            {isNew ? 'ニュースを作成' : 'ニュースを編集'}
          </h1>
          <div className="flex gap-2">
            <button onClick={() => handleSave('draft')}
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-sm text-gray-700 rounded-lg hover:bg-gray-50">
              <Save size={15} /> 下書き
            </button>
            <button onClick={() => handleSave('published')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800">
              <Eye size={15} /> 公開
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">タイトル *</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="ニュースのタイトル" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">スラッグ *</label>
            <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="news-slug" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">本文</label>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={8}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-y"
              placeholder="ニュースの本文を入力" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">ニュース</h1>
          <p className="text-sm text-gray-500 mt-1">{items.length}件</p>
        </div>
        <button onClick={startNew}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800">
          <Plus size={16} /> 新規作成
        </button>
      </div>

      {loading ? (
        <div className="text-gray-400 text-sm py-8 text-center">読み込み中...</div>
      ) : items.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 py-16 text-center">
          <p className="text-gray-400 text-sm mb-4">ニュースがありません</p>
          <button onClick={startNew}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">
            <Plus size={16} /> 最初のニュースを作成
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-50">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between px-5 py-4 hover:bg-gray-50/50">
              <div className="flex-1 min-w-0 mr-4">
                <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {new Date(item.created_at).toLocaleDateString('ja-JP')}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => toggleStatus(item)}
                  className={`text-[0.65rem] px-2.5 py-1 rounded-full font-medium ${
                    item.status === 'published' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
                  }`}>
                  {item.status === 'published' ? '公開' : '下書き'}
                </button>
                <button onClick={() => startEdit(item)} className="p-1.5 text-gray-400 hover:text-orange-600 rounded-md hover:bg-orange-50">
                  <Pencil size={15} />
                </button>
                <button onClick={() => deleteItem(item.id)} className="p-1.5 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
