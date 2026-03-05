import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('contact', '/en/contact', 'en')

export default function Layout({ children }) {
  return children
}
