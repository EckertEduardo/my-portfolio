import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Backdrop } from './components/Backdrop'
import { BackToTop } from './components/BackToTop'
import { Home } from './pages/Home'

const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Backdrop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
