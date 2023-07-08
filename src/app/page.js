import Allcategirys from "@/components/Category";
import Footer from "@/components/Footer";
import HeadersHome from "@/components/HeadersHome";
import ProductListHome from "@/components/ProductListHome";
import SearchProductsHome from "@/components/SaerchProductHome";
export default function Home() {
  return (
    <>
      <HeadersHome />
      <main className="max-w-2xl px-4 py-2 mx-auto sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <div className="flex">
          <Allcategirys />
          <SearchProductsHome />
        </div>
        <h2 className="py-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Lista de Productos
        </h2>
        <ProductListHome />
      </main>
      <Footer />
    </>
  );
}
