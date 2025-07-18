import Input from "./components/Input";
import Map from "./components/MAP/map";
import CardAddress from "./components/cardAddress/index.tsx";
import { useState } from "react";
import api from "./server/api";
import axios from "axios";
import type { CepDTO } from "./DTO/CepDTO/CepDTO.ts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cep, setCep] = useState<string>("");
  const [lat, setLat] = useState<number>(-23.5505);
  const [lng, setLng] = useState<number>(-46.6333);
  const [addressData, setAddressData] = useState<CepDTO | undefined>(undefined);

  const formatCep = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length > 5) {
      return numbers.slice(0, 5) + "-" + numbers.slice(5, 8);
    }
    return numbers;
  };

  const removeCepMask = (value: string) => {
    return value.replace(/\D/g, "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const formattedValue = formatCep(rawValue);
    setCep(formattedValue);
  };

  const fetchCep = async () => {
    const cleanCep = removeCepMask(cep);
    if (cleanCep.length !== 8) {
      toast.error("CEP inválido. Deve conter 8 dígitos.");
      return;
    }
    try {
      const Response = await axios.get(
        `https://brasilapi.com.br/api/cep/v1/${cleanCep}`
      );
      const data = Response.data;

      if (data.erro) {
        toast.error("Erro ao buscar o CEP");
        console.error("CEP inválido");
        return;
      }

      setAddressData(data);
      const fullAddress = `${data.street}, ${data.neighborhood}, ${data.city}, ${data.state}, Brasil`;

      const response = await api.get("", {
        params: {
          q: fullAddress,
        },
      });
      const location = response.data.results[0]?.geometry;

      setLat(location.lat);
      setLng(location.lng);

      if (!location) {
        toast.error("Localização não encontrada para o endereço fornecido.");
        console.error("Localização não encontrada.");
        return;
      }
    } catch (error) {
      console.error("Erro ao buscar endereço ou coordenadas:", error);
    }
  };

  return (
    <div className="w-full h-screen relative ">
      <div
        className="w-full h-80 flex items-center justify-center bg-[url('images/pattern-bg-mobile.png')]
    sm:bg-[url('images/pattern-bg-desktop.png')] bg-cover bg-center"
      >
        <div className="absolute flex flex-col text-center items-center justify-center gap-5">
          <h2 className=" text-white text-4xl font-bebas font-bold">
            CEP Search
          </h2>
          <Input
            placeholder="Digite seu CEP"
            value={cep}
            onChange={handleChange}
            onClick={fetchCep}
          />
        </div>
      </div>
      <div className="px-10 absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <CardAddress data={addressData} />
      </div>
      <ToastContainer />
      <Map lat={lat} lng={lng} />
    </div>
  );
}

export default App;
