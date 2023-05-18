'use client'
import DropdownUser from "./dropdownUser.component";
import { useState,useEffect,useRef } from "react";
import Sidebar from "./sidebar.component";
import Link from "next/link";
export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [SidebarOpen, setSidebarOpen] = useState(true);
 
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdownOpen(false);
        
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button onClick={()=>setSidebarOpen(!SidebarOpen)} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path   d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
             </button>
             <Link href="/admin" className="flex ml-2 md:mr-24">
          <svg className="h-8 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 11V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11H22ZM22 9H2V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V9Z "fill="rgba(31,179,33,1)"></path></svg>
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">CIB</span>
        </Link>
          </div>
          <div ref={ref} className="flex items-center">
          <div className="flex items-center ml-3">
            <div>
            <button onClick={()=>setDropdownOpen(!dropdownOpen)} type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-600" aria-expanded="false" >
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                  </button>
            </div>
                 {dropdownOpen && <DropdownUser />}
              </div>
            </div>
        </div>   
      </div>
    </nav>
     <Sidebar dropdownOpen={SidebarOpen} />
    </>
      );
    };
    

