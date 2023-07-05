"use client";
import Form from "../../component/form";
import Input from "../../component/input";
import Cards from "../../component/cards";
import AddMotiristas from "../../hook/motoristas";
export default function Page({ params }) {
  const { id } = params;
  let Title = "Agregar Nuevo Motorista";
  let bottontext = "Agregar";

  if (id !== "nuevo") {
    Title = "Editar Motorista";
    bottontext = "Salvar Cambios";
  }
  const { onSubmitForm, handleChange, formData, isloadin, message } =
    AddMotiristas(id);

  return (
    <Cards
      message={message.message}
      title={Title}
      url={"/admin/config/motoristas"}
      texturl={"Regresar a Motoristas"}
    >
      <Form isloadin={isloadin} bottontext={bottontext} onSubmit={onSubmitForm}>
        <Input
          label={"Nombre"}
          type={"text"}
          name={"motoristaName"}
          placeholder={"Gaspar Tabora Funez"}
          value={formData.motoristaName}
          onChange={handleChange}
        />
        <Input
          label={"Cars"}
          type={"text"}
          name={"cars"}
          placeholder={"Toyota color rojo"}
          value={formData.cars}
          onChange={handleChange}
        />
        <Input
          label={"Placa"}
          type={"text"}
          name={"placa"}
          placeholder={"1052GP"}
          value={formData.placa}
          onChange={handleChange}
        />
      </Form>
    </Cards>
  );
}
