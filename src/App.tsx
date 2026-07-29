import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import StatusBar from './components/layout/StatusBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BootScreen from './components/ui/BootScreen'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import AboutPage from './pages/AboutPage'
import BlogPostPage from './pages/BlogPostPage'
import NotFoundPage from './pages/NotFoundPage'
import { useScrollToTop } from './hooks/useScrollToTop'

export default function App() {
  const location = useLocation()
  const [booted, setBooted] = useState(false)
  useScrollToTop()

  return (
    <>
      <AnimatePresence>
        {!booted && <BootScreen onComplete={() => setBooted(true)} />}
      </AnimatePresence>

      <div className="relative flex flex-col min-h-screen grain">
        <StatusBar />
        <Navbar />

        <main className="relative flex-grow pt-[6.5rem] md:pt-28">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  )
}
