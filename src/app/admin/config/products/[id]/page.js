"use client";

import Form from "../../component/form";
import { AddProducts } from "../../hook/addProduct";
import Input from "../../component/input";
import Allcategory from "@/components/Allcategorys";
import Cards from "../../component/cards";

export default function page({ params }) {
  const { id } = params;
  let Title = "Agregar Nuevo Producto";
  let bottontext = "Agregar";

  if (id !== "nuevo") {
    Title = "Editar Producto";
    bottontext = "Salvar Cambios";
  }
  const { onSubmitForm, handleChange, formData, isloadin, message } =
    AddProducts(id);

  return (
    <Cards
      message={message.message}
      title={Title}
      url={"/admin/config/products"}
      texturl={"Regresar a Productos"}
    >
      <Allcategory />
      <Form isloadin={isloadin} bottontext={bottontext} onSubmit={onSubmitForm}>
        <Input
          label={"nombre"}
          type={"text"}
          name={"nombre"}
          placeholder={'Tubos de 4"'}
          value={formData.nombre}
          onChange={handleChange}
        />
        <Input
          label={"Codigo"}
          type={"text"}
          name={"codigo"}
          placeholder={""}
          value={formData.codigo}
          onChange={handleChange}
        />
        <Input
          label={"Cantidad"}
          type={"number"}
          name={"cantidad"}
          placeholder={""}
          value={formData.cantidad}
          onChange={handleChange}
        />
        <Input
          label={"UND"}
          type={"text"}
          name={"unidad"}
          placeholder={"UND, GALONES, LITROS, CUARTOS"}
          value={formData.unidad}
          onChange={handleChange}
        />
        <Input
          label={"Imagen"}
          type={"text"}
          name={"ImgUrl"}
          placeholder={"www.pictures/tubos.jpg"}
          value={formData.ImgUrl}
          onChange={handleChange}
        />
      </Form>
    </Cards>
  );
}
