export default function Table() {
  return (
    <table className="w-full mt-2 text-xs text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            fechas
          </th>

          <th scope="col" className="px-6 py-3">
            Destinos
          </th>
          <th scope="col" className="px-3 py-3 ">
            Estado
          </th>

          <th scope="col" className="px-3 py-3 text-right">
            Opciones
          </th>
        </tr>
      </thead>
      <tbody>
        {salidas.map((res, index) => (
          <tr
            key={index}
            className="font-semibold text-gray-900 bg-white border-b dark:text-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-4">{res.fecha}</td>
            <td className="px-6 py-4">{res.destino}</td>

            {res.aprobada == false ? (
              <>
                <td className="px-3 py-3">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                    Sin Aprobar
                  </div>
                </td>
                <td className="flex justify-end px-6 py-4">
                  <Link
                    className="font-medium text-green-600 dark:text-green-600"
                    href={`/admin/solicitudes/materiales/${res.id}`}
                  >
                    Ver
                  </Link>
                </td>
              </>
            ) : (
              <>
                <td className="px-3 py-3">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    Aprobada
                  </div>
                </td>
                <td className="flex justify-end px-6 py-4">
                  <Link
                    className="font-medium text-green-600 dark:text-green-600"
                    href={`/admin/`}
                  >
                    Generar pdf
                  </Link>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
