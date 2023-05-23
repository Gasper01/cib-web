import { useState } from 'react';
import Cookies from 'js-cookie';
export function SearchProductsController(props) {
  const [searchData, setSearchData] = useState('');
  const [productos, setProductos] = useState([]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [searching, setSearching] = useState(false);

  const agregarProducto = (producto) => {
    const productoConProps = { ...producto, ...props };
    const nuevosProductosSeleccionados = [
      ...productosSeleccionados,
      productoConProps,
    ];
    setProductosSeleccionados(nuevosProductosSeleccionados);
    Cookies.set(
      'productosSeleccionados',
      JSON.stringify(nuevosProductosSeleccionados)
    );
  };

  const aumentarCantidad = (id) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidad: producto.cantidad + 1 };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const disminuirCantidad = (id) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id && producto.cantidad > 0) {
        return { ...producto, cantidad: producto.cantidad - 1 };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const actualizarCantidad = (id, cantidad) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidad: cantidad };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  return {
    searchData,
    setSearchData,
    productos,
    setProductos,
    productosSeleccionados,
    searching,
    setSearching,
    setProductosSeleccionados,
    agregarProducto,
    aumentarCantidad,
    disminuirCantidad,
    actualizarCantidad,
  };
}
