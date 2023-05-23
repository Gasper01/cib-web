import { useEffect } from 'react';
import Cookies from 'js-cookie';

export function ProductosSeleccionadosController(
  setProductosSeleccionados,
  productosSeleccionados
) {
  useEffect(() => {
    const productosSeleccionadosCookie = Cookies.get('productosSeleccionados');

    if (productosSeleccionadosCookie) {
      setProductosSeleccionados(JSON.parse(productosSeleccionadosCookie));
    } else {
      setProductosSeleccionados([]);
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

  return { eliminarProducto, aumentarCantidad, disminuirCantidad };
}
