import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('about', '/es/sobre-mi', 'es')

export default function Layout({ children }) {
  return children
}
