import Allcategory from "@/components/Allcategorys";
import SearchProductsHome from "@/components/SaerchProductHome";
import ProductsTable from "../component/productsTable";

export default function Page() {
  return (
    <>
      <div className="flex">
        <Allcategory />
        <SearchProductsHome />
      </div>
      <ProductsTable />
    </>
  );
}
