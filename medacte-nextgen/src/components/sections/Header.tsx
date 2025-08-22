'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import MedacteLogo from '../3d/MedacteLogo'

const navigation = [
  { name: 'Accueil', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'À propos', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇲🇦' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass backdrop-blur-md bg-white/80 border-b border-white/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16">
              <MedacteLogo />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold gradient-text">
                Medacte
              </h1>
              <p className="text-xs lg:text-sm text-gray-600">
                Next Generation Health
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden lg:relative">
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="flex items-center space-x-2 glass px-4 py-2 rounded-xl hover:bg-white/20 transition-all"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{currentLanguage.flag}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {isLanguageMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 glass rounded-xl p-2 min-w-[150px]"
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setCurrentLanguage(language)
                        setIsLanguageMenuOpen(false)
                      }}
                      className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/20 transition-all text-left"
                    >
                      <span>{language.flag}</span>
                      <span className="text-sm">{language.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden glass p-2 rounded-lg"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass rounded-xl mt-2 overflow-hidden"
            >
              <div className="p-4 space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile Language Switcher */}
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm text-gray-600 mb-2">Language</p>
                  <div className="flex space-x-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setCurrentLanguage(language)
                          setIsMobileMenuOpen(false)
                        }}
                        className={`px-3 py-1 rounded-lg text-sm transition-all ${
                          currentLanguage.code === language.code
                            ? 'bg-blue-600 text-white'
                            : 'bg-white/20 hover:bg-white/30'
                        }`}
                      >
                        {language.flag} {language.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}