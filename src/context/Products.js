"use client";
import { GetProducts } from "@/lib/GetData";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext(null);
export const ProductsData = () => {
  return useContext(ProductsContext);
};

export default function ProductsContextProvider({ children }) {
  // Define el estado inicial de los productos
  const [allProducts, setAllProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // Define el estado para almacenar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  useEffect(() => {
    const fetchData = async () => {
      const [ProductsData] = await Promise.all([GetProducts()]);
      setAllProducts(ProductsData);
    };
    fetchData();
  }, []);

  const filteredProducts =
    selectedCategory !== "Todas"
      ? allProducts.filter(
          (product) =>
            product.category === selectedCategory &&
            product.nombre.includes(searchValue)
        )
      : allProducts.filter((product) => product.nombre.includes(searchValue));

  return (
    <ProductsContext.Provider
      value={{
        products: filteredProducts,
        selectedCategory,
        setSelectedCategory,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
