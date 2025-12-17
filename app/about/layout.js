import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('about', '/about', 'da')

export default function AboutLayout({ children }) {
  return children
}

