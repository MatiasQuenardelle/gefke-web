"use client"

import { Suspense } from "react"
import ContactCTA from "./ContactCTA"

export default function ContactCTAWrapper() {
  return (
    <Suspense fallback={null}>
      <ContactCTA />
    </Suspense>
  )
}
