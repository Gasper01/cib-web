'use client';
import Datepicker from '../datepicker.component';
import Dropdown from '../dropdown.component';
import SearchProducts from './searchProducts.component';
import { UserProfile } from '@/app/context/User';
import { OutboundFormState } from './outboundFormState.controller';
import OutbondlongCard from './logCardView.component';

export default function OutboundForm() {
  const { formState, setFormState, handleDropdownChange, OnClickSiguiente } =
    OutboundFormState();

  const countryOptions = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'FR', label: 'France' },
    { value: 'DE', label: 'Germany' },
  ];

  const userProfile = UserProfile();
  const setUser = {};

  if (userProfile !== null) {
    const { id, username } = userProfile;
    setUser.Iduser = id;
    setUser.user = username;
  }
  return (
    <>
      {formState.showNextForm ? (
        <>
          <OutbondlongCard
            title={'Encabezados del Despacho'}
            fecha={formState.startDate}
            motorista={formState.selectedMotorista}
            destino={formState.selectedDestino}
          >
            <Dropdown
              text={'Selecione un sistema'}
              id="Sistema"
              value={formState.selectedsistema}
              onChange={(e) =>
                setFormState({ ...formState, selectedsistema: e.target.value })
              }
              options={countryOptions}
            />

            <SearchProducts
              fecha={formState.startDate}
              motorista={formState.selectedMotorista}
              placaVeiculo={formState.selectedLabel}
              destino={formState.selectedDestino}
              sistema={formState.selectedsistema}
              userId={setUser.Iduser}
              username={setUser.user}
            />
          </OutbondlongCard>
        </>
      ) : (
        <>
          <OutbondlongCard
            title={'Despacho de materiales'}
            subtitle={' Optimiza la gestión de materiales con estos pasos.'}
          >
            <Datepicker
              label={'Selecione una Fecha'}
              value={formState.startDate}
              onChange={(e) =>
                setFormState({ ...formState, startDate: e.target.value })
              }
            />
            <Dropdown
              text={'Selecione un Motorista'}
              id="Motorista"
              value={formState.selectedMotorista}
              onChange={handleDropdownChange}
              options={countryOptions}
            />
            <Dropdown
              text={'Selecione un Destino'}
              id="Destino"
              value={formState.selectedDestino}
              onChange={(e) =>
                setFormState({ ...formState, selectedDestino: e.target.value })
              }
              options={countryOptions}
            />

            <button
              type="button"
              onClick={OnClickSiguiente}
              disabled={
                formState.selectedMotorista === '' ||
                formState.selectedDestino === ''
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
