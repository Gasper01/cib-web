import { GetLocation } from '@/lib/GetDataDropdown';
import { useState, useEffect } from 'react';
export default async function GetDataDropdwnLocation(search) {
  const [location, setLocation] = useState([
    { value: 'loading', label: 'loading' },
  ]);
  console.log(search);
  async function getDestinosByLocation() {
    const res = await GetLocation(search);

    console.log(res);
    //setLocation(res);
  }

  useEffect(() => {
    getDestinosByLocation();
  }, []);
  return { location };
}
