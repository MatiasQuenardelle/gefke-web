import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('goldenVisa', '/golden-visa-spanien', 'da')

export default function GoldenVisaLayout({ children }) {
  return children
}
