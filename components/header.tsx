"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false)
    }
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm py-3' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="block z-50">
          <img 
            src="/logo2.png" 
            alt="Dyoma Labs Logo" 
            className="h-8 md:h-10 w-auto"
            width={147}
            height={40}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {['Features', 'Projects', 'About Us', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white/80 hover:text-white text-xs font-light px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 p-2 text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 flex flex-col gap-1.5 transition-all duration-300 ${isMenuOpen ? 'transform rotate-180' : ''}`}>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
          </div>
        </button>

        {/* Connect Button - Desktop */}
        <div className="hidden md:flex items-center">
          <a 
            href="#contact" 
            className="relative group px-6 py-2 rounded-full bg-white text-black font-medium text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-9 flex items-center overflow-visible"
          >
            <span className="relative z-10">Connect</span>
            <span className="ml-2 w-0 group-hover:w-3 transition-all duration-300 overflow-hidden flex items-center">
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg px-4 py-6"
          >
            <nav className="flex flex-col space-y-4">
              {['Features', 'Projects', 'About Us', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white/80 hover:text-white text-base py-3 px-4 hover:bg-white/10 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact" 
                className="mt-4 px-6 py-3 rounded-full bg-white text-black font-normal text-sm text-center transition-all duration-200 hover:bg-white/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Connect with Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
