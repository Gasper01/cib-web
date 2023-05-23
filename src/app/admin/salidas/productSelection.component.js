import Table from './Table.component';
import { ProductosSeleccionadosController } from './productosSeleccionados.controller';
export default function ProductosSeleccionados({
  productosSeleccionados,
  setProductosSeleccionados,
}) {
  const { eliminarProducto, aumentarCantidad, disminuirCantidad } =
    ProductosSeleccionadosController(
      setProductosSeleccionados,
      productosSeleccionados
    );

  return (
    <div>
      <Table title={'Productos Selecionados'}>
        {productosSeleccionados
          .slice()
          .reverse()
          .map((producto, index, array) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {producto.nombre}
              </td>
              <td className="px-6 py-4 justify-end space-x-3">
                <div className="flex items-center justify-end space-x-3">
                  <button
                    onClick={() => disminuirCantidad(array.length - 1 - index)}
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
                    <span className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      {producto.cantidad}
                    </span>
                  </div>
                  <button
                    onClick={() => aumentarCantidad(array.length - 1 - index)}
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
                <button
                  onClick={() => eliminarProducto(array.length - 1 - index)}
                  className="font-medium text-red-600 dark:text-red-500"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
      </Table>
    </div>
  );
}
