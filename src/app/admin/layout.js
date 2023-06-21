import Header from "../../components/Header";
import UserContextProvider from "@/context/User";
export default function AdminLayout({ children }) {
  return (
    <div className="h-screen dark:bg-slate-800">
      <UserContextProvider>
        <Header />
        <div className="px-2 py-2 md:ml-64 md:py-4 md:px-4 ">
          <div className="rounded-lg dark:border-gray-700 mt-14">
            {children}
          </div>
        </div>
      </UserContextProvider>
    </div>
  );
}
