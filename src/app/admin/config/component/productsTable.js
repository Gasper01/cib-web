import { ProductsData } from "@/context/Products";
export default function ProductsTable() {
  const { products } = ProductsData();
  console.log(products);
  return <p>hola</p>;
}
