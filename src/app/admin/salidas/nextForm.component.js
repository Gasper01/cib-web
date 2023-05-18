'use client'
import { useState } from "react";
import Dropdown from "../dropdown.component";
export default function NextForm(props){
  const [selectedMotorista, setMotorista] = useState("");
  
console.log(props);

  const countryOptions = [
    { value: 'United States dddddddd', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'FR', label: 'France' },
    { value: 'DE', label: 'Germany' }
  ];


  return(
 
<>

<div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Despacho de materiales</h5>
  <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Fecha: {props.fecha}, Destino: {props.destino}, Motorista: {props.motorista}</p>
  <div className="mx-auto  text-left  grid grid-cols-1 md:grid-cols-1 gap-4 max-w-lg">
 
 
  <Dropdown
        label={"Selecione un Motorista"}
        id="Motorista"
        value={selectedMotorista}
        onChange={(e)=>setMotorista(e.target.value)}
        options={countryOptions}
      />
     
   
    <button
      type='submit'
      className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
        >
        Finalizar
      </button>
  </div>
</div>       

</>       
     )
}