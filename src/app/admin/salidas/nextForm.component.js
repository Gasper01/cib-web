'use client'
import { useState } from "react";
import Dropdown from "../dropdown.component";
import TableProductos from "./tatableproductos.component";
export default function NextForm(props){

  const [selectedsistema, setsistema] = useState("");
  
  const countryOptions = [
    { value: 'United States dddddddd', label: 'United States' },
    
  ];


  return(
 
<>

<div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Despacho de materiales</h5>
  <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Fecha: {props.fecha}, Destino: {props.destino}, Motorista: {props.motorista}</p>
  <div className="mx-auto  text-left  grid grid-cols-1 md:grid-cols-1 gap-4 ">
 
 
  <Dropdown
        text={"Selecione un sistema"}
        id="Sistema"
        value={selectedsistema}
        onChange={(e)=>setsistema(e.target.value)}
        options={countryOptions}
      />
     
   
   <TableProductos fecha={props.fecha}  Destino={props.destino} Motorista={props.motorista} sistema={selectedsistema}/>
  </div>
</div>       

</>       
     )
}