export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col rounded-lg mt-26 dark:border-gray-700 ">
      <div className="w-full h-4 mb-2 bg-gray-700 rounded"></div>
      <div className="w-full h-4 mb-2 bg-gray-700 rounded"></div>
      <div className="w-full h-4 mb-2 bg-gray-700 rounded"></div>
    </div>
  );
}
