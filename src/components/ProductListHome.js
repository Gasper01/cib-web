"use client";
import { ProductsData } from "@/context/Products";
import UnoptimizedImage from "./UnoptimizedImage";
import Link from "next/link";
import LoadingSkeleton from "./LoadingSkeleton";
export default function ProductListHome() {
  const { products, isLoading } = ProductsData();

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  return (
    <div className="grid grid-cols-2 mb-24 gap-x-6 gap-y-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.length > 0 ? (
        <>
          {products.map((res) => (
            <Link key={res.id} href="#" className="group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg dark:bg-slate-800 aspect-h-1 aspect-w-1 xl:aspect-h-6 xl:aspect-w-7">
                <UnoptimizedImage
                  src={res.ImgUrl}
                  alt={res.nombre}
                  width="250"
                  height="220"
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 dark:text-white">
                {res.nombre}
              </h3>
              {res.cantidad > 0 ? (
                <p className="mt-1 text-lg font-medium text-green-700 dark:text-green-200">
                  Cantidad: {res.cantidad}
                </p>
              ) : (
                <p className="mt-1 text-lg font-medium text-red-700 dark:text-red-400">
                  Cantidad: {res.cantidad}
                </p>
              )}
            </Link>
          ))}
        </>
      ) : (
        <h2 className="py-8 text-2xl font-bold tracking-tight text-gray-900">
          No hay prodcutos
        </h2>
      )}
    </div>
  );
}
