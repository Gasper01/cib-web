import Categorys from "../component/Categorys";
import ProductsTable from "../component/ProductsTable";
import SearchProductsHome from "@/components/SaerchProductHome";

export default function Page() {
  return (
    <>
      <div className="flex">
        <Categorys />
        <SearchProductsHome />
      </div>
      <ProductsTable />
    </>
  );
}
