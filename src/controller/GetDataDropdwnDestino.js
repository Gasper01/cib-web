import { GetDestinos } from '@/lib/GetDataDropdown';
import { useState, useEffect } from 'react';
export default function GetDataDropdwnDestinos() {
  const [destino, setDestinos] = useState([
    { value: 'loading', label: 'loading' },
  ]);

  async function getDestinos() {
    const res = await GetDestinos();
    const destinations = res.map((dest) => ({
      value: dest.id,
      label: dest.destinationName,
    }));
    setDestinos(destinations);
  }

  useEffect(() => {
    getDestinos();
  }, []);
  return { destino };
}
