"use client";
import Allcategory from "@/components/Allcategorys";
import { ProductsData } from "@/context/Products";
import Link from "next/link";

export default function Page() {
  const { products } = ProductsData();
  return (
    <div>
      <Link
        href="/admin/config"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg
          className="flex-shrink-0 w-6 h-6 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M8.58598 4.58594L16.0003 12.0002L8.58615 19.4144L8.58608 13.0003L3.00002 13.0004L3 11.0004L8.58605 11.0003L8.58598 4.58594ZM18.0001 19.0002L18.0001 5.00018H20.0001L20.0001 19.0002H18.0001Z"
            fill="rgba(31,179,33,1)"
          ></path>
        </svg>
        <span className="flex-1 ml-3 whitespace-nowrap">
          Regresar a Configuracion
        </span>
      </Link>
      <div className="grid grid-cols-2 gap-6 mb-8 xl:grid-cols-4 ">
        <Allcategory />
        <Link
          href="/admin/config/products/nuevo"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Agregar Producto
        </Link>
      </div>

      <table className="w-full mt-2 text-xs text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Cantidad
            </th>

            <th scope="col" className="px-3 py-3 text-right">
              Opciones
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((res, index) => (
            <tr
              key={index}
              className="font-semibold text-gray-900 bg-white border-b dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{res.nombre}</td>
              <td className="px-6 py-4">{res.cantidad}</td>

              <td className="flex justify-end px-6 py-4">
                <Link
                  className="font-medium text-green-600 dark:text-green-600"
                  href={`/admin/config/products/${res.id}`}
                >
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
