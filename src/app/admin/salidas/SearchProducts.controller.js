import { useState } from 'react';
import Cookies from 'js-cookie';
export function SearchProductsController(props) {
  const [searchData, setSearchData] = useState('');
  const [productos, setProductos] = useState([]);
  const [selectedProducts, setselectedProducts] = useState([]);
  const [searching, setSearching] = useState(false);

  const agregarProducto = (producto) => {
    const productoConProps = { ...producto, ...props };
    const newselectedProducts = [...selectedProducts, productoConProps];
    setselectedProducts(newselectedProducts);
    Cookies.set('selectedProductscookie', JSON.stringify(newselectedProducts));
  };

  const aumentarCantidad = (id) => {
    const newProducts = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidad: producto.cantidad + 1 };
      }
      return producto;
    });
    setProductos(newProducts);
  };

  const disminuirCantidad = (id) => {
    const newProducts = productos.map((producto) => {
      if (producto.id === id && producto.cantidad > 0) {
        return { ...producto, cantidad: producto.cantidad - 1 };
      }
      return producto;
    });
    setProductos(newProducts);
  };

  const actualizarCantidad = (id, cantidad) => {
    const newProducts = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidad: cantidad };
      }
      return producto;
    });
    setProductos(newProducts);
  };

  return {
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
  };
}
