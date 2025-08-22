import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Medacte - Next Generation Health Platform | Morocco',
  description: 'The first next-generation digital health platform in Morocco. Telemedicine, online pharmacy, AI-powered healthcare, and comprehensive medical services.',
  keywords: 'telemedicine Morocco, digital health Morocco, AI healthcare, online pharmacy Morocco, medical consultation Morocco, santé digitale Maroc',
  authors: [{ name: 'Medacte Team' }],
  creator: 'Medacte',
  publisher: 'Medacte',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://medacte.com'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr',
      'ar-MA': '/ar',
    },
  },
  openGraph: {
    title: 'Medacte - Next Generation Health Platform',
    description: 'The first next-generation digital health platform in Morocco',
    url: 'https://medacte.com',
    siteName: 'Medacte',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Medacte - Next Generation Health Platform',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medacte - Next Generation Health Platform',
    description: 'The first next-generation digital health platform in Morocco',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4F46E5" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Medacte",
              "description": "Next Generation Digital Health Platform in Morocco",
              "url": "https://medacte.com",
              "logo": "https://medacte.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MA",
                "addressRegion": "Casablanca"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+212-773-125597",
                "contactType": "customer service",
                "availableLanguage": ["French", "Arabic"]
              },
              "sameAs": [
                "https://facebook.com/medacte",
                "https://instagram.com/medacte",
                "https://linkedin.com/company/medacte"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="relative min-h-screen">
          {/* Background Effects */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]" />
          </div>
          
          {children}
        </div>
      </body>
    </html>
  )
}
