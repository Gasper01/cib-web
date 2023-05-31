import { useEffect } from 'react';
import Cookies from 'js-cookie';

export function SelectedProductsController(
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
    if (
      newselectedProducts[index].cantidad >
      newselectedProducts[index].cantidadAdd
    ) {
      newselectedProducts[index].cantidadAdd += 1;

      setselectedProducts(newselectedProducts);
      Cookies.set(
        'selectedProductscookie',
        JSON.stringify(newselectedProducts)
      );
    }
  };

  const disminuirCantidad = (index) => {
    const newselectedProducts = [...selectedProducts];

    if (newselectedProducts[index].cantidadAdd > 1) {
      newselectedProducts[index].cantidadAdd -= 1;

      setselectedProducts(newselectedProducts);
      Cookies.set(
        'selectedProductscookie',
        JSON.stringify(newselectedProducts)
      );
    }
  };

  return { eliminarProducto, aumentarCantidad, disminuirCantidad };
}
