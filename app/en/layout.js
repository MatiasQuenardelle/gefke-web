import { getMetadata } from "@/lib/metadata"

export const metadata = getMetadata('homepage', '/en', 'en')

export default function EnglishLayout({ children }) {
  return (
    <div lang="en">
      {children}
    </div>
  )
}
