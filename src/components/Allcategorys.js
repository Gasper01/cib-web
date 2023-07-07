"use client";
import { ProductsData } from "@/context/ProductContext";
import { useState } from "react";

export default function Allcategory() {
  const [isOpen, setOpen] = useState(false);
  const { selectedCategory, setSelectedCategory, uniqueCategories } =
    ProductsData();

  const onClickSetCategory = (category) => {
    setSelectedCategory(category);
    setOpen(!isOpen);
  };
  console.log(uniqueCategories);
  return <p>hola</p>;
}
