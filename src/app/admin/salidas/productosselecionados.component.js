import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function ProductosSeleccionados({
  productosSeleccionados,
  setProductosSeleccionados,
}) {
  useEffect(() => {
    const productosSeleccionadosCookie = Cookies.get('productosSeleccionados');

    if (productosSeleccionadosCookie) {
      setProductosSeleccionados(JSON.parse(productosSeleccionadosCookie));
    }
  }, []);

  const eliminarProducto = (index) => {
    const nuevosProductosSeleccionados = [...productosSeleccionados];
    nuevosProductosSeleccionados.splice(index, 1);

    setProductosSeleccionados(nuevosProductosSeleccionados);
    Cookies.set(
      'productosSeleccionados',
      JSON.stringify(nuevosProductosSeleccionados)
    );
  };

  const aumentarCantidad = (index) => {
    const nuevosProductosSeleccionados = [...productosSeleccionados];
    nuevosProductosSeleccionados[index].cantidad += 1;

    setProductosSeleccionados(nuevosProductosSeleccionados);
    Cookies.set(
      'productosSeleccionados',
      JSON.stringify(nuevosProductosSeleccionados)
    );
  };

  const disminuirCantidad = (index) => {
    const nuevosProductosSeleccionados = [...productosSeleccionados];

    if (nuevosProductosSeleccionados[index].cantidad > 0) {
      nuevosProductosSeleccionados[index].cantidad -= 1;

      setProductosSeleccionados(nuevosProductosSeleccionados);
      Cookies.set(
        'productosSeleccionados',
        JSON.stringify(nuevosProductosSeleccionados)
      );
    }
  };

  return (
    <div>
      <h1>Productos Seleccionados</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className=" px-20 py-3 text-right">
                Qty
              </th>

              <th scope="col" className="px-6 py-3  text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productosSeleccionados.map((producto, index) => (
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
                      onClick={() => disminuirCantidad(index)}
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
                      onClick={() => aumentarCantidad(index)}
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
                    onClick={() => eliminarProducto(index)}
                    className="font-medium text-red-600 dark:text-red-500"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}