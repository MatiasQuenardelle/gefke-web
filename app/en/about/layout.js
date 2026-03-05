import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('about', '/en/about', 'en')

export default function Layout({ children }) {
  return children
}
