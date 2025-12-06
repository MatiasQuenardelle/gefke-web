"use client"

import ReviewFunnel from "@/components/ReviewFunnel"
import { useTranslation } from "react-i18next"

export default function ReviewsPage() {
  const { t } = useTranslation()
  return (
    <main className="min-h-screen mb-80 flex flex-col bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl flex justify-center mx-auto py-6 px-6">
          <h1 className="text-3xl  font-bold text-gray-900">{t("reviews.title")}</h1>
        </div>
      </header>

      <div className="flex-1 px-4 sm:px-6 lg:px-8 pb-20">
        {" "}
        {/* <-- Important */}
        <ReviewFunnel />
      </div>
    </main>
  )
}
