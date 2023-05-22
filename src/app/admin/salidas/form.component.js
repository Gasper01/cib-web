'use client';
import { useState } from 'react';
import Datepicker from '../datepicker.component';
import Dropdown from '../dropdown.component';
import TableProductos from './tatableproductos.component';
export default function Form() {
  const [formState, setFormState] = useState({
    startDate: new Date().toISOString().split('T')[0],
    selectedMotorista: '',
    selectedDestino: '',
    selectedLabel: '',
    showNextForm: false,
    selectedsistema: '',
  });

  const handleDropdownChange = (event) => {
    const { value, selectedIndex } = event.target;

    setFormState({
      ...formState,
      selectedMotorista: value,
      selectedLabel: event.target[selectedIndex].text,
    });
  };

  const handleClick = () => {
    setFormState({
      ...formState,
      showNextForm: true,
    });
  };

  const countryOptions = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'FR', label: 'France' },
    { value: 'DE', label: 'Germany' },
  ];

  return (
    <>
      {formState.showNextForm ? (
        <>
          <Dropdown
            text={'Selecione un sistema'}
            id="Sistema"
            value={formState.selectedsistema}
            onChange={(e) =>
              setFormState({ ...formState, selectedsistema: e.target.value })
            }
            options={countryOptions}
          />

          <TableProductos
            fecha={formState.startDate}
            motorista={formState.selectedMotorista}
            placaVeiculo={formState.selectedLabel}
            destino={formState.selectedDestino}
            sistema={formState.selectedsistema}
          />
        </>
      ) : (
        <>
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
            onClick={handleClick}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Siguiente
          </button>
        </>
      )}
    </>
  );
}
