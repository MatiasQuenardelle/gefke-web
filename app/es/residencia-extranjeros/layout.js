import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('residency', '/es/residencia-extranjeros', 'es')

export default function Layout({ children }) {
  return children
}
