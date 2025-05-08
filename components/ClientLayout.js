"use client"

import I18nProvider from "@/components/i18n-provider"

export default function ClientLayout({ children }) {
  return <I18nProvider>{children}</I18nProvider>
}
