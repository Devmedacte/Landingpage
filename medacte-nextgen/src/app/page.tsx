import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import FAQ from '@/components/sections/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FAQ />
      
      {/* Additional sections can be added here */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de sections seront ajoutées bientôt : Services, À propos, Contact, etc.
          </p>
        </div>
      </section>
    </main>
  )
}
