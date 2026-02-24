import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ClientLayout from "@/components/ClientLayout"
import WhatsAppWidgetWrapper from "@/components/WhatsAppWidgetWrapper"
import dynamic from "next/dynamic"
import Script from "next/script" // ✅ Import Script for Google Analytics

// Lazy load non-critical components for better initial page load
const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => <div className="min-h-[400px]" />, // Placeholder to prevent layout shift
})
const ContactCTA = dynamic(() => import("@/components/ContactCTA"), {
  loading: () => <div className="min-h-[300px]" />, // Placeholder to prevent layout shift
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

import { getMetadata } from "@/lib/metadata"
import { getLegalServiceSchema, getPersonSchema, getLocalBusinessSchema } from "@/lib/structuredData"

// Set the base URL for all metadata - required for canonical URLs to work
export const metadataBase = new URL('https://www.buxtongefke.es')

// Default metadata for homepage - can be overridden by child layouts
export const metadata = getMetadata('homepage', '/', 'da')

// Generate structured data schemas
const legalServiceSchema = getLegalServiceSchema()
const personSchema = getPersonSchema()
const localBusinessSchema = getLocalBusinessSchema()

export default function RootLayout({ children }) {
  return (
    <html lang="da" suppressHydrationWarning>
      <head>
        {/* ✅ Resource Hints - Preconnect to third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://hcaptcha.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />

        {/* ✅ Structured Data - LegalService Schema */}
        <Script
          id="legal-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceSchema, null, 2),
          }}
        />
        {/* ✅ Structured Data - Person Schema */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema, null, 2),
          }}
        />
        {/* ✅ Structured Data - LocalBusiness Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema, null, 2),
          }}
        />
        {/* ✅ Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-6YTG17N2VR"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6YTG17N2VR');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ClientLayout>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <ContactForm />
          <ContactCTA />

          <Footer />
        </ClientLayout>

        {/* Fixed bottom-right WhatsApp button */}
        <WhatsAppWidgetWrapper
          size={72}
          className="fixed md:bottom-14 bottom-8 right-8 md:right-18 z-50"
        />
      </body>
    </html>
  )
}
