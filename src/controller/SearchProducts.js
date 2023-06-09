import { useState } from 'react';
import Cookies from 'js-cookie';
import enviarDatos from '@/lib/DbData';
export function SearchProductsController({
  fecha,
  motorista,
  destino,
  sistema,
  userId,
}) {
  const [searchData, setSearchData] = useState('');
  const [productos, setProductos] = useState([]);
  const [selectedProducts, setselectedProducts] = useState([]);
  const [searching, setSearching] = useState(false);
  const [selctAdd, setSelectAdd] = useState([]);
  const [message, setMessage] = useState([]);

  const agregarProducto = (producto) => {
    const select = { ...producto, sistema };
    const produtosselecte = [...selctAdd, select];

    const newProductsAdd = {
      fecha,
      motorista,
      destino,
      userId,
      productos: [...produtosselecte],
    };

    setSelectAdd(produtosselecte);
    setselectedProducts(newProductsAdd);
    Cookies.set('selectedProductscookie', JSON.stringify(newProductsAdd));
  };

  const aumentarCantidad = (id) => {
    const newProducts = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidadAdd: producto.cantidadAdd + 1 };
      }
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

  const CreateNewsalida = async () => {
    try {
      const response = await enviarDatos(selectedProducts);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      Cookies.remove('selectedProductscookie');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return {
    searchData,
    setSearchData,
    productos,
    setProductos,
    selectedProducts,
    setSelectAdd,
    searching,
    setSearching,
    setselectedProducts,
    agregarProducto,
    aumentarCantidad,
    disminuirCantidad,
    actualizarCantidad,
    CreateNewsalida,
    message,
  };
}
