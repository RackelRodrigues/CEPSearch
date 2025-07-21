import { MdArrowForwardIos } from "react-icons/md";

interface Props {
  placeholder?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input: React.FC<Props> = ({ onClick, onChange, value, placeholder }) => {
  return (
    <div className=" w-60 sm:w-80 md:w-md lg:w-lg lg:max-w-lg h-13 bg-white flex flex-row rounded-lg">
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className=" w-full h-full flex-1 bg-transparent text-black placeholder:text-black outline-none"
      />

      <button
        onClick={onClick}
        className="bg-black w-10 h-full flex items-center justify-center cursor-pointer rounded-r-lg"
      >
        <MdArrowForwardIos size={25} color="#fff" />
      </button>
    </div>
  );
};
export default Input;
