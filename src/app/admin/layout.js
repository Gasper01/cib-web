import Header from "../../components/Header";
import UserContextProvider from "@/context/User";
export default function AdminLayout({ children }) {
  return (
    <div>
      <UserContextProvider>
        <Header />
        <div className="md:ml-64 md:py-4 md:px-4">
          <div className="rounded-lg dark:border-gray-700 mt-14">
            {children}
          </div>
        </div>
      </UserContextProvider>
    </div>
  );
}
