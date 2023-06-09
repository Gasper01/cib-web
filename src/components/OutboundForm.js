"use client";
import Datepicker from "./Datepicker";
import Dropdown from "./Dropdown";
import SearchProducts from "./SearchProducts";
import { UserProfile } from "../context/User";
import { OutboundFormState } from "../controller/OutboundFormState";
import OutbondlongCard from "./LogCardView";

export default function OutboundForm() {
  const {
    formState,
    setFormState,
    handleDropdownChange,
    onClickSiguiente,
    dataDestinations,
    dataMotoristas,
    dataLocations,
  } = OutboundFormState();
  const { user } = UserProfile();
  const setUser = {};

  if (user !== null) {
    const { id, username } = user;
    setUser.Iduser = id;
    setUser.user = username;
  }
  return (
    <>
      {formState.showNextForm ? (
        <>
          <OutbondlongCard
            title={"Encabezados del Despacho"}
            fecha={formState.startDate}
            motorista={formState.selectedMotorista}
            destino={formState.selectedDestino}
          >
            <Dropdown
              text={"Selecione un sistema"}
              id="Sistema"
              value={formState.selectedSistema}
              onChange={(e) =>
                setFormState({ ...formState, selectedSistema: e.target.value })
              }
              options={dataLocations}
            />

            <SearchProducts
              fecha={formState.startDate}
              motorista={formState.selectedMotorista}
              placaVeiculo={formState.selectedLabel}
              destino={formState.selectedDestino}
              sistema={formState.selectedSistema}
              userId={setUser.Iduser}
              username={setUser.user}
            />
          </OutbondlongCard>
        </>
      ) : (
        <>
          <OutbondlongCard
            title={"Despacho de materiales"}
            subtitle={" Optimiza la gestión de materiales con estos pasos."}
          >
            <Datepicker
              label={"Selecione una Fecha"}
              value={formState.startDate}
              onChange={(e) =>
                setFormState({ ...formState, startDate: e.target.value })
              }
            />

            <Dropdown
              text={"Selecione un Destino"}
              id="Destino"
              value={formState.selectedDestino}
              onChange={(e) =>
                setFormState({ ...formState, selectedDestino: e.target.value })
              }
              options={dataDestinations}
            />
            <Dropdown
              text={"Selecione un Motorista"}
              id="Motorista"
              value={formState.selectedMotorista}
              onChange={handleDropdownChange}
              options={dataMotoristas}
            />

            <button
              type="button"
              onClick={onClickSiguiente}
              disabled={
                formState.selectedMotorista === "" ||
                formState.selectedDestino === ""
              }
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Siguiente
            </button>
          </OutbondlongCard>
        </>
      )}
    </>
  );
}
