import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('pension', '/es/pension-espana', 'es')

export default function Layout({ children }) {
  return children
}
