'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { Event } from '@/lib/admin-types'
import { Plus, Pencil, Trash2, X, Save, Eye, MapPin, Calendar } from 'lucide-react'

export default function EventsPage() {
  const [items, setItems] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<Event | null>(null)
  const [isNew, setIsNew] = useState(false)

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [body, setBody] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [location, setLocation] = useState('')
  const [eventType, setEventType] = useState<'offline' | 'online'>('offline')
  const [capacity, setCapacity] = useState('')

  useEffect(() => { fetchEvents() }, [])

  async function fetchEvents() {
    const { data } = await supabase.from('tw_events').select('*').order('event_date', { ascending: false })
    setItems((data as Event[]) || [])
    setLoading(false)
  }

  function resetForm() {
    setTitle(''); setSlug(''); setBody(''); setEventDate(''); setLocation(''); setEventType('offline'); setCapacity('')
  }

  function startNew() {
    setEditing(null); setIsNew(true); resetForm()
  }

  function startEdit(item: Event) {
    setEditing(item); setIsNew(false)
    setTitle(item.title); setSlug(item.slug); setBody(item.body || '')
    setEventDate(item.event_date ? item.event_date.slice(0, 16) : '')
    setLocation(item.location || ''); setEventType(item.event_type); setCapacity(item.capacity?.toString() || '')
  }

  function cancelEdit() { setEditing(null); setIsNew(false) }

  async function handleSave(status: 'draft' | 'published') {
    if (!title || !slug) { alert('タイトルとスラッグは必須です'); return }

    const data: Record<string, unknown> = {
      title, slug, body: body || null, status,
      event_date: eventDate ? new Date(eventDate).toISOString() : null,
      location: location || null,
      event_type: eventType,
      capacity: capacity ? parseInt(capacity) : null,
      updated_at: new Date().toISOString(),
    }
    if (status === 'published') data.published_at = new Date().toISOString()

    if (isNew) {
      await supabase.from('tw_events').insert(data)
    } else if (editing) {
      await supabase.from('tw_events').update(data).eq('id', editing.id)
    }
    cancelEdit(); fetchEvents()
  }

  async function deleteItem(id: string) {
    if (!confirm('このイベントを削除しますか？')) return
    await supabase.from('tw_events').delete().eq('id', id)
    setItems(items.filter(e => e.id !== id))
  }

  if (isNew || editing) {
    return (
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={cancelEdit} className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100">
            <X size={18} />
          </button>
          <h1 className="text-xl font-semibold text-gray-900 flex-1">
            {isNew ? 'イベントを登録' : 'イベントを編集'}
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
              placeholder="イベント名" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">スラッグ *</label>
            <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="event-slug" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">開催日時</label>
              <input type="datetime-local" value={eventDate} onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">形式</label>
              <select value={eventType} onChange={(e) => setEventType(e.target.value as 'offline' | 'online')}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option value="offline">オフライン</option>
                <option value="online">オンライン</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">場所</label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="RESIST 西新宿店" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">定員</label>
              <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="20" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">詳細</label>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={6}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-y"
              placeholder="イベントの詳細を入力" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">イベント管理</h1>
          <p className="text-sm text-gray-500 mt-1">{items.length}件</p>
        </div>
        <button onClick={startNew}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800">
          <Plus size={16} /> 新規登録
        </button>
      </div>

      {loading ? (
        <div className="text-gray-400 text-sm py-8 text-center">読み込み中...</div>
      ) : items.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 py-16 text-center">
          <p className="text-gray-400 text-sm mb-4">イベントがありません</p>
          <button onClick={startNew}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">
            <Plus size={16} /> 最初のイベントを登録
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                  <span className={`text-[0.65rem] px-2 py-0.5 rounded-full font-medium mt-1 inline-block ${
                    item.status === 'published' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {item.status === 'published' ? '公開' : '下書き'}
                  </span>
                </div>
                <div className="flex items-center gap-1 ml-2">
                  <button onClick={() => startEdit(item)} className="p-1.5 text-gray-400 hover:text-orange-600 rounded-md hover:bg-orange-50">
                    <Pencil size={15} />
                  </button>
                  <button onClick={() => deleteItem(item.id)} className="p-1.5 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
              <div className="space-y-1.5 text-xs text-gray-500">
                {item.event_date && (
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {new Date(item.event_date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </div>
                )}
                {item.location && (
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    {item.location}
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <span className="bg-gray-100 px-2 py-0.5 rounded">{item.event_type === 'online' ? 'オンライン' : 'オフライン'}</span>
                  {item.capacity && <span>定員 {item.capacity}名</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
