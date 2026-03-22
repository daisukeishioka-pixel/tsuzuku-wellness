import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* TODO: Add more routes */}
            {/* <Route path="/category/:slug" element={<CategoryPage />} /> */}
            {/* <Route path="/article/:slug" element={<ArticlePage />} /> */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/resist" element={<ResistPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
