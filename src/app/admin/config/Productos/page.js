"use client";
import SearchProductsHome from "@/components/SaerchProductHome";
import ProductsTable from "../components/ProductsTable";
import Categorys from "@/components/Categorys";

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
