export default function OutbondlongCard({
  children,
  fecha,
  title,
  subtitle,
  destino,
  motorista,
}) {
  return (
    <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h5>
      {subtitle ? (
        <>{subtitle}</>
      ) : (
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          <div>
            <p className="text-green-600">
              Fecha: <span className="underline">{fecha}</span>
            </p>
            <p className="text-green-600">
              Destino: <span className="underline">{destino}</span>
            </p>
            <p className=" text-green-600">
              Motorista: <span className="underline">{motorista}</span>
            </p>
          </div>
        </p>
      )}

      <div className="mx-auto  text-left  grid grid-cols-1 md:grid-cols-1 gap-4 ">
        {children}
      </div>
    </div>
  );
}
