import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('divorce', '/en/divorce-spain', 'en')

export default function Layout({ children }) {
  return children
}
