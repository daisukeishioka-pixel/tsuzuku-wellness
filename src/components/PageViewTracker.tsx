'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export function PageViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return

    // Don't track admin pages
    if (pathname.startsWith('/admin')) return

    supabase.from('tw_page_views').insert({
      path: pathname,
      referrer: typeof document !== 'undefined' ? document.referrer || null : null,
    }).then(() => {
      // fire and forget
    })
  }, [pathname])

  return null
}
