import { ProductsData } from "@/context/ProductContext";
import { useState, useEffect } from "react";
import { CreateProducts } from "@/lib/PostData";
import { UpdateProductById } from "@/lib/PutAndDeleteData";

export function AddProducts(Id) {
  const { setUpdate, selectedCategory, setSelectedCategory, products } =
    ProductsData();
  const [isloading, setLoading] = useState(false);
  const [message, setErrorMessage] = useState([]);
  const Inicialstate = {
    nombre: "",
    ImgUrl: "",
    cantIdad: 0,
    codigo: 0,
    unIdad: "",
    category: selectedCategory,
  };
  const [formData, setFormData] = useState(Inicialstate);

  useEffect(() => {
    if (Id !== "nuevo") {
      const producto = products.find((product) => product.id === Id);

      if (producto) {
        const { nombre, ImgUrl, cantIdad, codigo, unIdad, category } = producto;
        setSelectedCategory(category);
        setFormData({
          ...formData,
          nombre: nombre,
          ImgUrl: ImgUrl,
          cantIdad: cantIdad,
          codigo: codigo,
          unIdad: unIdad,
        });
      }
    }
  }, [Id, products]);

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
      if (Id !== "nuevo") {
        setErrorMessage(await UpdateProductById(Id, formData));
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
