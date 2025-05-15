"use client"

import { useRouter } from "next/navigation"

const Footer = () => {
  const router = useRouter()

  return (
    <footer className="bg-zinc-900 text-white py-4 rounded-b-lg shadow-inner">
      <div className="container mx-auto text-center text-sm">
        © 2025 Christian Gefke —{" "}
        <button
          onClick={() => router.push("/privacypolicy")}
          className="underline hover:text-gray-300 transition-colors"
        >
          Privacy disclaimer
        </button>
        <button
          onClick={() => router.push("/legalterms")}
          className="underline hover:text-gray-300 transition-colors ml-8"
        >
          Handelsbetingelser
        </button>
      </div>
    </footer>
  )
}

export default Footer
