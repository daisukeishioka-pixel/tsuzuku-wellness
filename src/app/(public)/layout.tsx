import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { GoogleAnalytics } from '@/components/Analytics'
import { PageViewTracker } from '@/components/PageViewTracker'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GoogleAnalytics />
      <PageViewTracker />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}
