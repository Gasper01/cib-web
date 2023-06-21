import Allcategory from "@/components/Allcategorys";
import Footer from "@/components/Footer";
import HeadersHome from "@/components/HeadersHome";
import ProductListHome from "@/components/ProductListHome";
import SearchProductsHome from "@/components/SaerchProductHome";
import ProductsContextProvider from "@/context/Products";
export default function Page() {
  return (
    <>
      <HeadersHome />
      <ProductsContextProvider>
        <main className="max-w-2xl px-4 py-2 mx-auto sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
          <div className="flex">
            <Allcategory />
            <SearchProductsHome />
          </div>
          <h2 className="py-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Lista de Productos
          </h2>
          <ProductListHome />
        </main>

        <Footer />
      </ProductsContextProvider>
    </>
  );
}
