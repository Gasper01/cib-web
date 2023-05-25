import { Suspense } from 'react';
import ProductSelection from './selectedProducts.component';
import Search from '@/app/lib/search';
import Searchbotton from '../search.component';
import Table from '../Table.component';
import { searchProductsController } from './searchProducts.controller';

export default function searchProducts(props) {
  const {
    searchData,
    setSearchData,
    productos,
    setProductos,
    selectedProducts,
    searching,
    setSearching,
    setselectedProducts,
    agregarProducto,
    aumentarCantidad,
    disminuirCantidad,
    actualizarCantidad,
  } = searchProductsController(props);

  const onSubmitSearchProducts = async (e) => {
    e.preventDefault();
    setSearching(true);
    try {
      const res = await Search(searchData);
      if (!res.message) {
        setProductos(res);
      } else {
        setProductos([]);
      }
    } catch (error) {
      return error.message;
    }
    setSearching(false);
  };

  return (
    <>
      <Searchbotton
        onSubmitSearchProducts={onSubmitSearchProducts}
        setSearchData={setSearchData}
        searching={searching}
      />
      <Suspense fallback={'Loading..'}>
        <Table title={'Productos Encontrados'}>
          {productos.map((producto) => (
            <tr
              key={producto.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {producto.nombre}
              </td>
              <td className="px-6 py-4 justify-end space-x-3">
                <div className="flex items-center justify-end space-x-3">
                  <button
                    onClick={() => disminuirCantidad(producto.id)}
                    className="p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span className="sr-only">Quantity button</span>
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                    </svg>
                  </button>
                  <div>
                    <input
                      type="number"
                      value={producto.cantidad}
                      onChange={(e) =>
                        actualizarCantidad(
                          producto.id,
                          parseInt(e.target.value)
                        )
                      }
                      className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <button
                    onClick={() => aumentarCantidad(producto.id)}
                    className="p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                  >
                    <span className="sr-only">Quantity button</span>
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
                    </svg>
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 flex items-center justify-end">
                {producto.cantidad === 0 ? (
                  <p>Producto agotado</p>
                ) : (
                  <button
                    onClick={() => agregarProducto(producto)}
                    className="font-medium text-green-600 dark:text-green-600"
                  >
                    Agregar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </Table>
      </Suspense>

      <ProductSelection
        selectedProducts={selectedProducts}
        setselectedProducts={setselectedProducts}
      />
    </>
  );
}
