import { UserProfile } from "../context/User";

export default function DropdownUser () {
  const user = UserProfile()
  return ( 
    <div  className="drop-down  w-48 overflow-hidden  my-4 text-base list-none bg-white divide-y divide-gray-100  dark:bg-gray-700 dark:divide-gray-600 rounded-md shadow absolute top-12 right-3">
    <div className="px-4 py-3" role="none">
      <p className="text-sm text-gray-900 dark:text-white" role="none">
     {user?.username}
      </p>
      <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
        neil.sims@flowbite.com
      </p>
    </div>
    <ul className="py-1" role="none">
     
      <li>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
      </li>
    </ul>
  </div>
 
  );
};


