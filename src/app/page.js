import Allcategory from "@/components/Allcategorys";
import Footer from "@/components/Footer";
import HeadersHome from "@/components/HeadersHome";
import ProductListHome from "@/components/ProductListHome";
import SearchProductsHome from "@/components/SaerchProductHome";
import ProductsContextProvider from "@/context/Products";
export default function Page() {
  return (
    <ProductsContextProvider>
      <p>hola</p>
    </ProductsContextProvider>
  );
}
