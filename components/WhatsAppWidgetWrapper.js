"use client"

import dynamic from "next/dynamic"

// Client Component wrapper for WhatsAppWidget with ssr: false
const WhatsAppWidget = dynamic(() => import("@/components/WhatsAppWidget"), {
  ssr: false, // WhatsApp widget doesn't need SSR
})

export default function WhatsAppWidgetWrapper(props) {
  return <WhatsAppWidget {...props} />
}

