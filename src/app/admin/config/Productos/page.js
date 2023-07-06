import Link from "next/link";
import ProductsTable from "../component/productsTable";
import Allcategory from "@/components/Allcategorys";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 mb-8 xl:grid-cols-4 ">
        <Allcategory />
        <Link
          href="/admin/config/products/nuevo"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Agregar Producto
        </Link>
      </div>

      <ProductsTable />
    </>
  );
}
