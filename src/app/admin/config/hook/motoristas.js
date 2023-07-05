import { GetMotoristas } from "@/lib/GetData";
import { CreateMotoristas } from "@/lib/PostData";
import { UpdateMotoristas } from "@/lib/PutAndDeleteData";
import { useState, useEffect } from "react";
export default function AddMotiristas(id) {
  const [isloading, setLoading] = useState(false);
  const [message, setErrorMessage] = useState("");
  const [motoristas, setMotoristas] = useState([]);
  const [isUpdate, setUpdate] = useState(false);

  const [formData, setFormData] = useState({
    motoristaName: "",
    cars: "",
    placa: "",
  });

  useEffect(() => {
    async function GetDataMotorista() {
      setMotoristas(await GetMotoristas());
      setUpdate(false);
    }
    GetDataMotorista();
  }, [isUpdate]);

  useEffect(() => {
    if (id !== "nuevo") {
      const motorista = motoristas.find((motorista) => motorista.id === id);

      if (motorista) {
        const { motoristaName, cars, placa } = motorista;

        setFormData({
          ...formData,
          motoristaName: motoristaName,
          cars: cars,
          placa: placa,
        });
      }
    }
  }, [id, motoristas]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (id !== "nuevo") {
        setErrorMessage(await UpdateMotoristas(id, formData));
      } else {
        setErrorMessage(await CreateMotoristas(formData));
      }

      if (!message == "ok") {
        setLoading(false);
      }
      setUpdate(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    handleChange,
    formData,
    isloading,
    message,
    setFormData,
    motoristas,
    onSubmitForm,
  };
}
