
import '../globals.css';
import UserContextProvider from '../context/User';
import Header from './header.component';
export default function AdminLayout({ children }) {
  
  return (
  <>
 <UserContextProvider>
 <Header/>
   {children}
 </UserContextProvider >
  </>
         
  )    
}
