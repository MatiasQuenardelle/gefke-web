import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('skat', '/es/impuestos-espana', 'es')

export default function Layout({ children }) {
  return children
}
