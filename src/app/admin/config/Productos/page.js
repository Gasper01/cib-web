import Categorys from "@/components/Categorys";
import ProductsTable from "../component/productsTable";

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
