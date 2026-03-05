import ReviewFunnel from "@/components/ReviewFunnel"
import danish from "@/public/locales/da.json"

export default function ReviewsPage() {
  return (
    <section className="min-h-screen mb-80 flex flex-col bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl flex justify-center mx-auto py-6 px-6">
          <h1 className="text-3xl font-bold text-gray-900">{danish.reviews.title}</h1>
        </div>
      </header>

      <div className="flex-1 px-4 sm:px-6 lg:px-8 pb-20">
        <ReviewFunnel />
      </div>
    </section>
  )
}
