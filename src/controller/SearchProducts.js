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
        return { ...producto, cantidadAdd: producto.cantidadAdd + 1 };
      }
      console.log(producto.cantidadAdd);
      return producto;
    });
    setProductos(newProducts);
  };

  const disminuirCantidad = (id) => {
    const newProducts = productos.map((producto) => {
      if (producto.id === id && producto.cantidadAdd > 0) {
        return { ...producto, cantidadAdd: producto.cantidadAdd - 1 };
      }
      return producto;
    });
    setProductos(newProducts);
  };

  const actualizarCantidad = (id, cantidad) => {
    const newProducts = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidadAdd: cantidad };
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
