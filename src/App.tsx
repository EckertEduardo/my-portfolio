import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Backdrop } from './components/Backdrop'
import { BackToTop } from './components/BackToTop'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Backdrop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
