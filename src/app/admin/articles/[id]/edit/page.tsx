'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { Article, ArticleSection, ArticleTakeaway, Category } from '@/lib/admin-types'
import { ArrowLeft, Save, Eye, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function EditArticlePage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState<Category[]>([])

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [categorySlug, setCategorySlug] = useState('')
  const [tags, setTags] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [author, setAuthor] = useState('')
  const [readingTime, setReadingTime] = useState(5)
  const [status, setStatus] = useState<'draft' | 'published'>('draft')
  const [seoTitle, setSeoTitle] = useState('')
  const [seoDescription, setSeoDescription] = useState('')

  const [sections, setSections] = useState<{ heading: string; body: string }[]>([])
  const [takeaways, setTakeaways] = useState<string[]>([])

  useEffect(() => {
    async function load() {
      const [articleRes, sectionsRes, takeawaysRes, catsRes] = await Promise.all([
        supabase.from('tw_articles').select('*').eq('id', params.id).single(),
        supabase.from('tw_article_sections').select('*').eq('article_id', params.id).order('sort_order'),
        supabase.from('tw_article_takeaways').select('*').eq('article_id', params.id).order('sort_order'),
        supabase.from('tw_categories').select('*').order('sort_order'),
      ])

      const a = articleRes.data as Article | null
      if (!a) { router.push('/admin/articles'); return }

      setTitle(a.title)
      setSlug(a.slug)
      setExcerpt(a.excerpt || '')
      setCategorySlug(a.category_slug)
      setTags(a.tags?.join(', ') || '')
      setImageUrl(a.image_url || '')
      setAuthor(a.author || '')
      setReadingTime(a.reading_time || 5)
      setStatus(a.status)
      setSeoTitle(a.seo_title || '')
      setSeoDescription(a.seo_description || '')

      const secs = (sectionsRes.data as ArticleSection[]) || []
      setSections(secs.length > 0 ? secs.map(s => ({ heading: s.heading, body: s.body })) : [{ heading: '', body: '' }])

      const tks = (takeawaysRes.data as ArticleTakeaway[]) || []
      setTakeaways(tks.length > 0 ? tks.map(t => t.content) : [''])

      setCategories((catsRes.data as Category[]) || [])
      setLoading(false)
    }
    load()
  }, [params.id])

  async function handleSave(newStatus?: 'draft' | 'published') {
    if (!title || !slug || !categorySlug) {
      alert('タイトル、スラッグ、カテゴリは必須です')
      return
    }

    setSaving(true)
    const finalStatus = newStatus || status

    const articleData: Record<string, unknown> = {
      title, slug,
      excerpt: excerpt || null,
      category_slug: categorySlug,
      tags: tags ? tags.split(',').map(t => t.trim()) : [],
      image_url: imageUrl || null,
      author,
      reading_time: readingTime,
      status: finalStatus,
      seo_title: seoTitle || null,
      seo_description: seoDescription || null,
      updated_at: new Date().toISOString(),
    }

    if (finalStatus === 'published' && status !== 'published') {
      articleData.published_at = new Date().toISOString()
    }

    const { error } = await supabase.from('tw_articles').update(articleData).eq('id', params.id)
    if (error) { alert('保存に失敗: ' + error.message); setSaving(false); return }

    // Replace sections
    await supabase.from('tw_article_sections').delete().eq('article_id', params.id)
    const validSections = sections.filter(s => s.heading || s.body)
    if (validSections.length > 0) {
      await supabase.from('tw_article_sections').insert(
        validSections.map((s, i) => ({ article_id: params.id, heading: s.heading, body: s.body, sort_order: i }))
      )
    }

    // Replace takeaways
    await supabase.from('tw_article_takeaways').delete().eq('article_id', params.id)
    const validTakeaways = takeaways.filter(t => t.trim())
    if (validTakeaways.length > 0) {
      await supabase.from('tw_article_takeaways').insert(
        validTakeaways.map((t, i) => ({ article_id: params.id, content: t, sort_order: i }))
      )
    }

    router.push('/admin/articles')
  }

  if (loading) return <div className="text-gray-400 text-sm">読み込み中...</div>

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/articles" className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100">
          <ArrowLeft size={18} />
        </Link>
        <div className="flex-1">
          <h1 className="text-xl font-semibold text-gray-900">記事を編集</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={() => handleSave('draft')} disabled={saving}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-sm text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50">
            <Save size={15} /> 下書き保存
          </button>
          <button onClick={() => handleSave('published')} disabled={saving}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50">
            <Eye size={15} /> 公開する
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Basic info */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <h2 className="text-sm font-semibold text-gray-900">基本情報</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">タイトル *</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">スラッグ *</label>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">/article/</span>
              <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)}
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">概要</label>
            <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">カテゴリ *</label>
              <select value={categorySlug} onChange={(e) => setCategorySlug(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                {categories.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">著者</label>
              <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">サムネイル画像URL</label>
              <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="https://..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">読了時間（分）</label>
              <input type="number" value={readingTime} onChange={(e) => setReadingTime(parseInt(e.target.value) || 5)} min={1}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">タグ（カンマ区切り）</label>
            <input type="text" value={tags} onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="睡眠, 健康, 習慣" />
          </div>
        </div>

        {/* Sections */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900">本文セクション</h2>
            <button onClick={() => setSections([...sections, { heading: '', body: '' }])}
              className="inline-flex items-center gap-1 text-xs text-orange-600 hover:text-orange-700">
              <Plus size={14} /> セクション追加
            </button>
          </div>
          {sections.map((section, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">セクション {i + 1}</span>
                {sections.length > 1 && (
                  <button onClick={() => setSections(sections.filter((_, j) => j !== i))} className="text-gray-400 hover:text-red-500">
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
              <input type="text" value={section.heading} placeholder="見出し"
                onChange={(e) => { const s = [...sections]; s[i].heading = e.target.value; setSections(s) }}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
              <textarea value={section.body} rows={6} placeholder="本文（段落は空行で区切る）"
                onChange={(e) => { const s = [...sections]; s[i].body = e.target.value; setSections(s) }}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-y" />
            </div>
          ))}
        </div>

        {/* Takeaways */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900">この記事のポイント</h2>
            <button onClick={() => setTakeaways([...takeaways, ''])}
              className="inline-flex items-center gap-1 text-xs text-orange-600 hover:text-orange-700">
              <Plus size={14} /> 追加
            </button>
          </div>
          {takeaways.map((t, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-orange-400 mt-2.5 shrink-0">—</span>
              <input type="text" value={t}
                onChange={(e) => { const u = [...takeaways]; u[i] = e.target.value; setTakeaways(u) }}
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="ポイントを入力" />
              {takeaways.length > 1 && (
                <button onClick={() => setTakeaways(takeaways.filter((_, j) => j !== i))} className="text-gray-400 hover:text-red-500 mt-2">
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* SEO */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
          <h2 className="text-sm font-semibold text-gray-900">SEO設定</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">SEOタイトル</label>
            <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
            <textarea value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} rows={2}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none" />
          </div>
        </div>
      </div>
    </div>
  )
}
