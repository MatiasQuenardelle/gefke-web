import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('lawChoice', '/en/choice-of-law', 'en')

export default function Layout({ children }) {
  return children
}
