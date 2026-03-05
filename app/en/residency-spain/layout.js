import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('residency', '/en/residency-spain', 'en')

export default function Layout({ children }) {
  return children
}
