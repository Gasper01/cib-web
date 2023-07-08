"use client";

import Cards from "../../component/Cards";
import Form from "../../component/Form";
import Input from "../../component/Input";
import { AddProducts } from "../../hook/addProduct";

export default function Page({ params }) {
  const { Id } = params;

  let Title = "Agregar Nuevo Producto";
  let bottontext = "Agregar";

  if (Id !== "nuevo") {
    Title = "Editar Producto";
    bottontext = "Salvar Cambios";
  }
  const { onSubmitForm, handleChange, formData, isloadin, message } =
    AddProducts(Id);

  return (
    <Cards
      message={message.message}
      title={Title}
      url={"/admin/config/Productos"}
      texturl={"Regresar a Productos"}
    >
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
          label={"CantIdad"}
          type={"number"}
          name={"cantIdad"}
          placeholder={""}
          value={formData.cantIdad}
          onChange={handleChange}
        />
        <Input
          label={"UND"}
          type={"text"}
          name={"unIdad"}
          placeholder={"UND, GALONES, LITROS, CUARTOS"}
          value={formData.unIdad}
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
