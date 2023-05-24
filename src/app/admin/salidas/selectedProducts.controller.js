import { useEffect } from 'react';
import Cookies from 'js-cookie';

export function selectedProductsController(
  selectedProducts,
  setselectedProducts
) {
  useEffect(() => {
    const selectedProductsCookie = Cookies.get('selectedProductscookie');

    if (selectedProductsCookie) {
      setselectedProducts(JSON.parse(selectedProductsCookie));
    } else {
      setselectedProducts([]);
    }
  }, [setselectedProducts]);

  const eliminarProducto = (index) => {
    const newselectedProducts = [...selectedProducts];
    newselectedProducts.splice(index, 1);

    setselectedProducts(newselectedProducts);
    Cookies.set('selectedProductscookie', JSON.stringify(newselectedProducts));
  };

  const aumentarCantidad = (index) => {
    const newselectedProducts = [...selectedProducts];
    newselectedProducts[index].cantidad += 1;

    setselectedProducts(newselectedProducts);
    Cookies.set('selectedProductscookie', JSON.stringify(newselectedProducts));
  };

  const disminuirCantidad = (index) => {
    const newselectedProducts = [...selectedProducts];

    if (newselectedProducts[index].cantidad > 0) {
      newselectedProducts[index].cantidad -= 1;

      setselectedProducts(newselectedProducts);
      Cookies.set(
        'selectedProductscookie',
        JSON.stringify(newselectedProducts)
      );
    }
  };

  return { eliminarProducto, aumentarCantidad, disminuirCantidad };
}
