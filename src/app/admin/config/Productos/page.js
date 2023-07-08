import Categorys from "../components/ProdutsCategorys";
import ProductsTable from "../components/ProductsTable";
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
