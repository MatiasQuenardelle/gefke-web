import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('rentalContracts', '/en/rental-contracts-spain', 'en')

export default function Layout({ children }) {
  return children
}
