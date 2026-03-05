import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('testamenter', '/en/wills-spain', 'en')

export default function Layout({ children }) {
  return children
}
