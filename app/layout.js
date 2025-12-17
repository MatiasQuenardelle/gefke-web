import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ClientLayout from "@/components/ClientLayout"
import dynamic from "next/dynamic"
import Script from "next/script" // ✅ Import Script for Google Analytics

// Lazy load non-critical components for better initial page load
const WhatsAppWidget = dynamic(() => import("@/components/WhatsAppWidget"), {
  ssr: false, // WhatsApp widget doesn't need SSR
})
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
import { getLegalServiceSchema, getPersonSchema } from "@/lib/structuredData"

// Default metadata for homepage - can be overridden by child layouts
export const metadata = getMetadata('homepage', '/', 'da')

// Generate structured data schemas
const legalServiceSchema = getLegalServiceSchema()
const personSchema = getPersonSchema()

export default function RootLayout({ children }) {
  return (
    <html lang="da" suppressHydrationWarning>
      <head>
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
        <ClientLayout>
          <Header />
          {children}
          <ContactForm />
          <ContactCTA />

          <Footer />
        </ClientLayout>

        {/* Fixed bottom-right WhatsApp button */}
        <WhatsAppWidget
          size={72}
          className="fixed md:bottom-14 bottom-8 right-8 md:right-18 z-50"
        />
      </body>
    </html>
  )
}
