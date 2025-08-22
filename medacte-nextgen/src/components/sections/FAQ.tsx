'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, MessageCircle, Shield, Clock, Users, Smartphone, Pill } from 'lucide-react'

const faqData = [
  {
    id: 1,
    category: 'Télémedecine',
    question: 'Comment fonctionne la télémedecine sur Medacte ?',
    answer: 'La télémedecine sur Medacte vous permet de consulter des médecins certifiés en ligne via vidéo, chat ou appel. Vous pouvez prendre rendez-vous, partager vos symptômes et recevoir un diagnostic et une prescription si nécessaire. Notre plateforme utilise une technologie de pointe pour assurer une qualité de consultation optimale.',
    icon: MessageCircle,
    tags: ['consultation', 'vidéo', 'diagnostic']
  },
  {
    id: 2,
    category: 'Sécurité',
    question: 'Mes données médicales sont-elles sécurisées ?',
    answer: 'Absolument. Nous utilisons un cryptage de niveau bancaire et respectons toutes les normes de protection des données médicales. Vos informations sont stockées de manière sécurisée et ne sont accessibles qu\'aux professionnels de santé autorisés. Nous respectons également le RGPD et les réglementations marocaines.',
    icon: Shield,
    tags: ['sécurité', 'cryptage', 'RGPD']
  },
  {
    id: 3,
    category: 'Disponibilité',
    question: 'Quels sont les horaires de consultation ?',
    answer: 'Nos services sont disponibles 24h/24 et 7j/7. Vous pouvez prendre rendez-vous à tout moment et consulter des médecins selon leurs disponibilités. Pour les urgences, nous avons des médecins de garde. Notre plateforme s\'adapte à votre emploi du temps.',
    icon: Clock,
    tags: ['24/7', 'urgences', 'disponibilité']
  },
  {
    id: 4,
    category: 'Médecins',
    question: 'Quels types de médecins sont disponibles ?',
    answer: 'Nous proposons des médecins généralistes et spécialistes : cardiologues, dermatologues, pédiatres, gynécologues, psychiatres et bien d\'autres. Tous nos médecins sont certifiés et expérimentés. Nous vérifions rigoureusement leurs qualifications et expériences.',
    icon: Users,
    tags: ['spécialistes', 'certifiés', 'qualifications']
  },
  {
    id: 5,
    category: 'Application',
    question: 'Comment télécharger l\'application Medacte ?',
    answer: 'L\'application Medacte est disponible sur iOS et Android. Vous pouvez la télécharger depuis l\'App Store ou Google Play Store. L\'application est intuitive et vous guide à travers toutes les fonctionnalités. Elle est également optimisée pour une utilisation hors ligne.',
    icon: Smartphone,
    tags: ['iOS', 'Android', 'téléchargement']
  },
  {
    id: 6,
    category: 'Pharmacie',
    question: 'Comment puis-je commander des médicaments ?',
    answer: 'Après votre consultation, si une prescription est nécessaire, vous pouvez commander vos médicaments directement sur la plateforme. Nous livrons à domicile dans les principales villes du Maroc. Tous nos médicaments sont authentiques et respectent les normes de qualité.',
    icon: Pill,
    tags: ['commande', 'livraison', 'prescription']
  },
  {
    id: 7,
    category: 'Assurance',
    question: 'Comment fonctionne l\'assurance maladie ?',
    answer: 'Nous travaillons avec les principales compagnies d\'assurance au Maroc. Vous pouvez saisir vos informations d\'assurance lors de la consultation et nous nous occupons du remboursement automatiquement. Nous supportons également les mutuelles et assurances privées.',
    icon: Shield,
    tags: ['assurance', 'remboursement', 'mutuelle']
  },
  {
    id: 8,
    category: 'Urgences',
    question: 'Que faire en cas d\'urgence médicale ?',
    answer: 'En cas d\'urgence médicale, contactez immédiatement les services d\'urgence (15) ou rendez-vous aux urgences les plus proches. Medacte n\'est pas destiné aux urgences vitales. Pour les urgences non-vitales, nos médecins de garde peuvent vous aider.',
    icon: Clock,
    tags: ['urgences', '15', 'garde']
  }
]

const categories = [
  { name: 'Tous', icon: MessageCircle, count: faqData.length },
  { name: 'Télémedecine', icon: MessageCircle, count: faqData.filter(f => f.category === 'Télémedecine').length },
  { name: 'Sécurité', icon: Shield, count: faqData.filter(f => f.category === 'Sécurité').length },
  { name: 'Disponibilité', icon: Clock, count: faqData.filter(f => f.category === 'Disponibilité').length },
  { name: 'Médecins', icon: Users, count: faqData.filter(f => f.category === 'Médecins').length },
  { name: 'Application', icon: Smartphone, count: faqData.filter(f => f.category === 'Application').length },
  { name: 'Pharmacie', icon: Pill, count: faqData.filter(f => f.category === 'Pharmacie').length },
  { name: 'Assurance', icon: Shield, count: faqData.filter(f => f.category === 'Assurance').length },
  { name: 'Urgences', icon: Clock, count: faqData.filter(f => f.category === 'Urgences').length },
]

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [openItems, setOpenItems] = useState<number[]>([])

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'Tous' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur Medacte
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 glass rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
                selectedCategory === category.name
                  ? 'bg-blue-600 text-white'
                  : 'glass hover:bg-white/20'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
              <span className="text-xs opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredFAQ.length > 0 ? (
              <motion.div
                key={`${searchTerm}-${selectedCategory}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredFAQ.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <item.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-lg">{item.question}</h3>
                          <p className="text-sm text-gray-600 mt-1">{item.category}</p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          openItems.includes(item.id) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {openItems.includes(item.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {item.tags.map(tag => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="glass p-8 rounded-xl">
                  <Search className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Aucune question trouvée</h3>
                  <p className="text-gray-600">
                    Essayez de modifier vos critères de recherche ou contactez-nous directement.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-gray-600 mb-6">
              Notre équipe est là pour vous aider. Contactez-nous directement.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Contactez-nous
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}