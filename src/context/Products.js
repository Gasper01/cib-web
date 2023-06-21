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
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ProductsData] = await Promise.all([GetProducts()]);
        setAllProducts(ProductsData);
        setIsLoading(false); // Marcar como cargado después de recibir los productos
      } catch (error) {
        console.log(error);
        setIsLoading(false); // Marcar como cargado incluso si hay un error para evitar quedar en un estado de carga infinita
      }
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

  const uniqueCategories = [...new Set(allProducts.map((res) => res.category))];

  return (
    <ProductsContext.Provider
      value={{
        products: filteredProducts,
        selectedCategory,
        setSelectedCategory,
        searchValue,
        setSearchValue,
        isLoading,
        uniqueCategories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
