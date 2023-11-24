import CategoriesRow from "./components/CategoriesRow"
import DashboardAds from "./components/DashboardAds"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-12 lg:px-20 xl:px-24 py-24 z-0">
      <div className="my-4 w-full">
        <CategoriesRow />
      </div>
      <div className="w-full">
        <DashboardAds />
      </div>
    </main>
  )
}
