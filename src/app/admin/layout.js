
import '../globals.css';
import UserContextProvider from '../context/User';
import Header from './header.component';
export default function AdminLayout({ children }) {
  
  return (
  <>
 <UserContextProvider>
 <Header/>
 <div className="sm:ml-64 sm:py-4 sm:px-4">
        <div className="rounded-lg dark:border-gray-700 mt-14">
     
   {children}
   </div>
     </div>
      
 </UserContextProvider >
  </>
         
  )    
}
