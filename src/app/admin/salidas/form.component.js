'use client'
import { useState } from "react";
export default function Form(){
    const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
   
    return(

<>

<div className="relative max-w-sm">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path></svg>
  </div>
  <input   value={startDate} onChange={(event) => setStartDate(event.target.value)}  type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</div>

<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selec Fincas</label>
<select id="fincas" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option defaultValue >finca modelo</option>
  <option value="viilanueva">villanueva</option>
</select>

<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selec sistema</label>
<select id="sistema" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option defaultValue >Mq2</option>
  <option value="mq3">Mq3</option>
</select>

</>       
       
    )
}