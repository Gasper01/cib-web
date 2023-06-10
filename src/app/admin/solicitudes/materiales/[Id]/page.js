import OutbondlongCard from "@/components/LogCardView";
import { GetSalidasByid } from "@/lib/GetData";
export default async function ListaMateriales({ params }) {
  const { Id } = params;
  const solicitud = await GetSalidasByid(Id);

  return (
    <OutbondlongCard
      title={`${solicitud.destino}`}
      subtitle={`Fecha: ${solicitud.fecha}`}
    >
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-3 py-3">
                Sistema
              </th>
              <th scope="col" className="px-3 py-3 text-right">
                Cantidad
              </th>
            </tr>
          </thead>
          <tbody>
            {solicitud.productos.map((producto) => (
              <tr
                key={producto.id}
                className="font-semibold text-gray-900 bg-white border-b dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 ">{producto.nombre}</td>
                <td className="px-6 py-4">{producto.sistema}</td>
                <td className="flex justify-end px-6 py-4">
                  {producto.cantidadAdd}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </OutbondlongCard>
  );
}
