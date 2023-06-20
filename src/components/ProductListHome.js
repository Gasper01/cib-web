"use client";
import { ProductsData } from "@/context/Products";
import UnoptimizedImage from "./UnoptimizedImage";
import Link from "next/link";
export default function ProductListHome() {
  const { products } = ProductsData();
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.length > 0 ? (
        <>
          {products.map((res) => (
            <Link key={res.id} href="#" className="group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                <UnoptimizedImage
                  src={res.ImgUrl}
                  alt={res.nombre}
                  width={"450"}
                  height={"450"}
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{res.nombre}</h3>
              <p className="mt-1 text-lg font-medium text-gray-600">
                <span className="text-lg font-medium text-gray-900 ">
                  Cantidad:
                </span>
                {res.cantidad}
              </p>
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
