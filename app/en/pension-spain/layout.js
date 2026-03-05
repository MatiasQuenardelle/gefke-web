import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('pension', '/en/pension-spain', 'en')

export default function Layout({ children }) {
  return children
}
