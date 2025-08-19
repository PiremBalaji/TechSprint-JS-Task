import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Contact from './pages/Contact.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

export default function App() {
  const [isDark, setIsDark] = useState(false)
  const onToggleTheme = () => setIsDark((v) => !v)
  const location = useLocation()
  return (
    <div className={`flex min-h-full flex-col bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 ${isDark ? 'dark' : ''}`}>
      <Navbar onToggleTheme={onToggleTheme} isDark={isDark} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

