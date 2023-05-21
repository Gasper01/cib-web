'use client'
import { useState } from "react";
import Datepicker from "../datepicker.component";
import Dropdown from "../dropdown.component";
import NextForm from "./nextForm.component";
export default function Form(){
  const [formState, setFormState] = useState({
    startDate: new Date().toISOString().split('T')[0],
    selectedMotorista: "",
    selectedDestino: "",
    selectedLabel:"",
    showNextForm: false
  });


  const handleDropdownChange = (event) => {
    const { value, selectedIndex } = event.target;

    setFormState({
      ...formState,
      selectedMotorista: value,
      selectedLabel: event.target[selectedIndex].text
    });
  };


  const handleClick = () => {
    setFormState({
      ...formState,
      showNextForm: true
    });
  };

  const countryOptions = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'FR', label: 'France' },
    { value: 'DE', label: 'Germany' }
  ];


  return(
 
<>
   {formState.showNextForm ? (
        <NextForm 
           fecha={formState.startDate}  
           motorista={formState.selectedMotorista}
            placaVeiculo={formState.selectedLabel}
            destino={formState.selectedDestino} />
      ) : (
     <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Despacho de materiales</h5>
  <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Optimiza la gestión de materiales con estos pasos.</p>
  <div className="mx-auto  text-left  grid grid-cols-1 md:grid-cols-1 gap-4 ">
 
  <Datepicker 
   label={"Selecione una Fecha"}
   value={formState.startDate}
   onChange={(e)=>setFormState({ ...formState, startDate: e.target.value })}
  
  />
  <Dropdown
        text={"Selecione un Motorista"}
        id="Motorista"
        value={formState.selectedMotorista}
        onChange={handleDropdownChange}
        options={countryOptions}
      />
        <Dropdown
        text={"Selecione un Destino"}
        id="Destino"
        value={formState.selectedDestino}
        onChange={(e)=>setFormState({ ...formState, selectedDestino: e.target.value })}
        options={countryOptions}
      />
   
    <button
      type='button'
      onClick={handleClick}
      className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
        >
        Siguiente
      </button>
  </div>
  </div>       
) } 

</>    
       
    )
}