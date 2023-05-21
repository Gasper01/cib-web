import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import ProductosSeleccionados from "./productosselecionados.component";
import Search from "@/app/lib/search";

export default function TableProductos(props) {
  const [searchData, setSearchData] = useState("");
  const [productos, setProductos] = useState([]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  useEffect(() => {
    const productosSeleccionadosCookie = Cookies.get("productosSeleccionados");

    if (productosSeleccionadosCookie) {
      setProductosSeleccionados(JSON.parse(productosSeleccionadosCookie));
    } else {
      setProductosSeleccionados([]);
    }
  }, []);

  const onSubmitBuscarProductos = async (e) => {
    e.preventDefault();
    try {
      const res = await Search(searchData);

      if (!res.message) {
        setProductos(res);
      } else {
        setProductos([]);
      }
    } catch (error) {
      return error.message;
    }
  };

  const agregarProducto = (producto) => {
    const productoConProps = { ...producto, ...props };
    const nuevosProductosSeleccionados = [...productosSeleccionados, productoConProps];
    setProductosSeleccionados(nuevosProductosSeleccionados);
    Cookies.set("productosSeleccionados", JSON.stringify(nuevosProductosSeleccionados));
  };

  const aumentarCantidad = (id) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidad: producto.cantidad + 1 };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const disminuirCantidad = (id) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id && producto.cantidad > 0) {
        return { ...producto, cantidad: producto.cantidad - 1 };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const actualizarCantidad = (id, cantidad) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidad: cantidad };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };
    
      return (
<>
         <form onSubmit={onSubmitBuscarProductos}>
         <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
         <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>
        <input onChange={(e)=> setSearchData(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Productos..." required/>
        <button 
        type="submit"
         className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
    </form>
     
      <h1>Productos Seleccionados</h1>
     
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" className="px-6 py-3">
                    Product
                </th>
                <th scope="col" className=" px-20 py-3 text-right">
                    Qty
                </th>
               
                <th scope="col" className="px-6 py-3  text-right">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {productos.map((producto) => (
               <tr key={producto.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                 {producto.nombre}
               </td>
               <td className="px-6 py-4 justify-end space-x-3">
                 <div className="flex items-center justify-end space-x-3">
                   <button onClick={() => disminuirCantidad(producto.id)} className="p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                     <span className="sr-only">Quantity button</span>
                     <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                   </button>
                   <div>
                     <input type="number" value={producto.cantidad}  
                      onChange={(e) => actualizarCantidad(producto.id, parseInt(e.target.value))} className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                   </div>
                   <button onClick={() => aumentarCantidad(producto.id)} className="p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                     <span className="sr-only">Quantity button</span>
                     <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" ></path></svg>
                   </button>
                 </div>
               </td>
               <td className="px-6 py-4 flex items-center justify-end">
                 <button onClick={() => agregarProducto(producto)} className="font-medium text-green-600 dark:text-green-600">Agregar</button>
               </td>
             </tr>
          ))}
    
        </tbody>
    </table>
    </div>
    
         <ProductosSeleccionados productosSeleccionados={productosSeleccionados}setProductosSeleccionados={setProductosSeleccionados} />
           
         </>
      );
              }