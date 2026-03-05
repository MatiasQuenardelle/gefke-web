import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('homepage', '/es', 'es')

export default function SpanishLayout({ children }) {
  return (
    <div lang="es">
      {children}
    </div>
  )
}
