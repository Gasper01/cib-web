import { GetMotoristas } from "@/lib/GetData";
import { CreateMotoristas } from "@/lib/PostData";
import { UpdateMotoristas } from "@/lib/PutAndDeleteData";
import { useState, useEffect } from "react";
export default function AddMotiristas(Id) {
  const [isloading, setLoading] = useState(false);
  const [message, setErrorMessage] = useState("");
  const [motoristas, setMotoristas] = useState([]);
  const [formData, setFormData] = useState({
    motoristaName: "",
    cars: "",
    placa: "",
  });

  useEffect(() => {
    async function GetDataMotorista() {
      setMotoristas(await GetMotoristas());
    }
    GetDataMotorista();
  }, [Id]);

  useEffect(() => {
    if (Id !== "nuevo") {
      const motorista = motoristas.find((motorista) => motorista.id === Id);

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
  }, [Id, motoristas]);

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
      if (Id !== "nuevo") {
        setErrorMessage(await UpdateMotoristas(Id, formData));
      } else {
        setErrorMessage(await CreateMotoristas(formData));
      }

      if (!message == "ok") {
        setLoading(false);
      }
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
