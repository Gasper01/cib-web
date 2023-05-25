import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

export function outboundFormState() {
  const [formState, setFormState] = useState({
    startDate: new Date().toISOString().split('T')[0],
    selectedMotorista: '',
    selectedDestino: '',
    selectedLabel: '',
    showNextForm: false,
    selectedsistema: '',
  });

  useEffect(() => {
    const productsCookie = Cookies.get('selectedProductscookie');

    if (productsCookie && JSON.parse(productsCookie).length > 0) {
      const [selectProducto] = JSON.parse(productsCookie);
      const { destino, fecha, motorista, placaVeiculo } = selectProducto;

      setFormState((prevState) => ({
        ...prevState,
        startDate: fecha,
        selectedDestino: destino,
        selectedMotorista: motorista,
        selectedLabel: placaVeiculo,
        showNextForm: true,
      }));
    }
  }, []);

  const handleDropdownChange = (event) => {
    const { value, selectedIndex } = event.target;

    setFormState({
      ...formState,
      selectedMotorista: value,
      selectedLabel: event.target[selectedIndex].text,
    });
  };

  const OnClickSiguiente = () => {
    setFormState({
      ...formState,
      showNextForm: true,
    });
  };

  return { formState, setFormState, handleDropdownChange, OnClickSiguiente };
}
