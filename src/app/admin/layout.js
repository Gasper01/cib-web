import UserContextProvider from "@/context/User";
import AdminHeader from "@/components/AdminHeader";
import ProductsContextProvider from "@/context/Products";
export default function AdminLayout({ children }) {
  return (
    <UserContextProvider>
      <div className="h-screen dark:bg-slate-800">
        <AdminHeader />
        <ProductsContextProvider>
          <div className="px-2 py-2 md:ml-64 md:py-4 md:px-4 ">
            <div className="rounded-lg dark:border-gray-700 mt-14">
              {children}
            </div>
          </div>
        </ProductsContextProvider>
      </div>
    </UserContextProvider>
  );
}
