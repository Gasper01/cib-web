import { ProductsData } from "@/context/Products";
import { useState, useEffect } from "react";
import { CreateProducts } from "@/lib/PostData";
import { UpdateProductById } from "@/lib/PutAndDeleteData";

export function AddProducts(id) {
  const { setUpdate, selectedCategory, setSelectedCategory, products } =
    ProductsData();
  const [isloading, setLoading] = useState(false);
  const [message, setErrorMessage] = useState([]);
  const Inicialstate = {
    nombre: "",
    ImgUrl: "",
    cantidad: 0,
    codigo: 0,
    unidad: "",
    category: selectedCategory,
  };
  const [formData, setFormData] = useState(Inicialstate);

  useEffect(() => {
    if (id !== undefined) {
      const producto = products.find((product) => product.id === id);

      if (producto) {
        const { nombre, ImgUrl, cantidad, codigo, unidad, category } = producto;
        setSelectedCategory(category);
        setFormData({
          ...formData,
          nombre: nombre,
          ImgUrl: ImgUrl,
          cantidad: cantidad,
          codigo: codigo,
          unidad: unidad,
        });
      }
    }
  }, [id, products]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: selectedCategory,
    }));
  }, [selectedCategory]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (id !== "nuevo") {
        setErrorMessage(await UpdateProductById(id, formData));
      } else {
        setErrorMessage(await CreateProducts(formData));
      }
      if (!message == "ok") {
        setLoading(false);
      }
      setUpdate(true);
      setLoading(false);
      setFormData(Inicialstate);
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    handleChange,
    formData,
    isloading,
    message,
    setFormData,
    onSubmitForm,
  };
}
