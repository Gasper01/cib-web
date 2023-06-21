"use client";
import { GetProducts } from "@/lib/GetData";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext(null);
export const ProductsData = () => {
  return useContext(ProductsContext);
};

export default function ProductsContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  useEffect(() => {
    const fetchData = () => {
      GetProducts()
        .then((productsData) => {
          setAllProducts(productsData);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  const filteredProducts = allProducts.filter(
    (product) =>
      (selectedCategory === "Todas" || product.category === selectedCategory) &&
      product.nombre.includes(searchValue)
  );

  const uniqueCategories = [...new Set(allProducts.map((res) => res.category))];

  return (
    <ProductsContext.Provider
      value={{
        products: filteredProducts,
        selectedCategory,
        uniqueCategories,
        setSelectedCategory,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
