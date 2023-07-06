import ProductsTable from "../component/productsTable";
import Allcategory from "@/components/Allcategorys";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 mb-8 xl:grid-cols-4 ">
        <Allcategory />
      </div>

      <ProductsTable />
    </>
  );
}
