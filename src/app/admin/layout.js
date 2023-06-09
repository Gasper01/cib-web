import UserContextProvider from "../../context/User";
import Header from "../../components/Header";
import LoadingSkeleton from "./LoadingSkeleton";
import { Suspense } from "react";

export default function AdminLayout({ children }) {
  return (
    <UserContextProvider>
      <Header />
      <div className="md:ml-64 md:py-4 md:px-4">
        <div className="rounded-lg dark:border-gray-700 mt-14">
          <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
        </div>
      </div>
    </UserContextProvider>
  );
}
