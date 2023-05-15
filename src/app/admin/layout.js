import '../globals.css';
import UserContextProvider from '../context/User';
import UserProfileCard from './userProfileCar.component';
export default function AdminLayout({ children }) {
  return (
  
       <>
         <UserContextProvider>
         <UserProfileCard/> 
         {children}
         </UserContextProvider >
 
       </>
        
  )    
}
