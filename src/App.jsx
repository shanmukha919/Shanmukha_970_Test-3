import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'dark'
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)

        // Simulate loading
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className="app">
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <Resume />
                <Skills />
                <Projects />
            </main>
            <Footer />
            <BackToTop />
        </div>
    )
}

export default App
