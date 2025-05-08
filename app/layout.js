import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ClientLayout from "@/components/ClientLayout"
import WhatsAppWidget from "@/components/WhatsAppWidget"
import ContactCTAWrapper from "@/components/ContactCTAWrapper"
import ContactForm from "@/components/ContactForm"
import dynamic from "next/dynamic"

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>
          <Header />
          {children}

          <ContactForm />
          <ContactCTAWrapper />
          <Footer />
        </ClientLayout>
        {/* fixed bottom-right button */}
        <WhatsAppWidget
          size={72} // large on home
          className="fixed md:bottom-14 bottom-8 right-8 md:right-18 z-50"
        />
      </body>
    </html>
  )
}
