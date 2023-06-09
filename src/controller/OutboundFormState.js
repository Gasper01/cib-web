import Cookies from 'js-cookie';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { GetDestinos, GetLocation, GetMotoristas } from '@/lib/DbData';

export function OutboundFormState() {
  const initialState = {
    startDate: new Date().toISOString().split('T')[0],
    selectedMotorista: '',
    selectedDestino: '',
    selectedLabel: '',
    showNextForm: false,
    selectedSistema: '',
    datadestino: [],
    datamotorista: [],
    datalocation: [],
  };

  const [formState, setFormState] = useState(initialState);

  const handleDropdownChange = useCallback((event) => {
    const { value, selectedIndex } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      selectedMotorista: value,
      selectedLabel: event.target[selectedIndex].text,
    }));
  }, []);

  const onClickSiguiente = useCallback(() => {
    setFormState((prevState) => ({
      ...prevState,
      showNextForm: true,
    }));
  }, []);

  useEffect(() => {
    const getDestinos = async () => {
      const res = await GetDestinos();
      setFormState((prevState) => ({
        ...prevState,
        datadestino: res,
      }));
    };
    getDestinos();
  }, []);
  useEffect(() => {
    const getMotoristas = async () => {
      const res = await GetMotoristas();

      setFormState((prevState) => ({
        ...prevState,
        datamotorista: res,
      }));
    };
    getMotoristas();
  }, []);

  useEffect(() => {
    const getDestinosByLocation = async () => {
      const res = await GetLocation(formState.selectedDestino);
      setFormState((prevState) => ({
        ...prevState,
        datalocation: res,
      }));
    };

    getDestinosByLocation();
  }, [formState.selectedDestino]);

  useEffect(() => {
    const productsCookie = Cookies.get('selectedProductscookie');
    if (productsCookie) {
      const selectProducto = JSON.parse(productsCookie);
      const { destino, fecha, motorista, placaVeiculo, productos } =
        selectProducto ?? {};
      if (productos?.length) {
        setFormState((prevState) => ({
          ...prevState,
          startDate: fecha,
          selectedDestino: destino,
          selectedMotorista: motorista,
          selectedLabel: placaVeiculo,
          showNextForm: true,
        }));
      }
    }
  }, []);

  const dataDestinations = useMemo(
    () =>
      formState.datadestino.map((dest) => ({
        value: dest.id,
        label: dest.destinationName,
      })),
    [formState.datadestino]
  );
  const dataMotoristas = useMemo(
    () =>
      formState.datamotorista.map((dest) => ({
        value: dest.id,
        label: dest.motoristaName,
      })),
    [formState.datamotorista]
  );

  const dataLocations = useMemo(
    () =>
      formState.datalocation.map((dest) => ({
        value: dest.id,
        label: dest.locationName,
      })),
    [formState.datalocation]
  );

  return {
    formState,
    setFormState,
    handleDropdownChange,
    onClickSiguiente,
    dataDestinations,
    dataMotoristas,
    dataLocations,
  };
}
