import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('homeownerAssociations', '/en/homeowner-associations', 'en')

export default function Layout({ children }) {
  return children
}
