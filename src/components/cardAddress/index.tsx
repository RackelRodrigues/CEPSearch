import type { CepDTO } from "../../DTO/CepDTO/CepDTO.ts";

interface Props {
  data?: CepDTO;
}

const CardAddress = ({ data }: Props) => {
  if (!data) return null;

  const formatarCep = (cep: string) => {
    return cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
  };

  return (
    <div className="w-78 h-20 xl:w-3xl sm:gap-8 xl:gap-0 sm:p-5  sm:w-lg bg-white md:py-4  xl:h-32 grid grid-cols-4 flex items-center justify-center rounded-lg shadow-md text-center">
      <div className="flex flex-col items-center justify-center ">
        <p className="font-light text-[hsl(0,0%,58%)] font-rubik xl:text-md sm:text-sm text-xs  ">
          CEP:
        </p>
        <h3 className="font-bold text-[hsl(0,0%,17%)] font-rubik xl:text-lg sm:text-md  text-xs">
          {formatarCep(data.cep)}
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <p className="font-light text-[hsl(0,0%,58%)] font-rubik xl:text-md sm:text-sm text-xs">
          Street:
        </p>
        <h3 className="font-bold text-[hsl(0,0%,17%)] font-rubik xl:text-lg sm:text-md text-xs">
          {data.street.replace("Rua ", "")}
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <p className="font-light text-[hsl(0,0%,58%)] font-rubik xl:text-md sm:text-sm  text-xs">
          Neighborhood:
        </p>
        <h3 className="font-bold text-[hsl(0,0%,17%)] font-rubik xl:text-lg sm:text-sm text-xs">
          {data.neighborhood}
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-[hsl(0,0%,58%)] font-rubik xl:text-md sm:text-sm text-xs">
          City/State:
        </p>
        <h3 className="font-bold text-[hsl(0,0%,17%)] font-rubik xl:text-lg sm: text-md text-xs">
          {data.city} - {data.state}
        </h3>
      </div>
    </div>
  );
};

export default CardAddress;
