import Form from './form.component';
export default function Page() {
  return (
    <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        Despacho de materiales
      </h5>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        Optimiza la gestión de materiales con estos pasos.
      </p>
      <div className="mx-auto  text-left  grid grid-cols-1 md:grid-cols-1 gap-4 ">
        <Form />
      </div>
    </div>
  );
}
