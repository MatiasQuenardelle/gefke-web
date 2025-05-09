import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ClientLayout from "@/components/ClientLayout"
import WhatsAppWidget from "@/components/WhatsAppWidget"
import ContactForm from "@/components/ContactForm"
import ContactCTA from "@/components/ContactCTA"
import Script from "next/script" // ✅ Import Script for Google Analytics

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Christian Gefke",
  description: "Danish Lawyer in Spain",
}

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
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
          <ContactCTA />
          <ContactForm />
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
