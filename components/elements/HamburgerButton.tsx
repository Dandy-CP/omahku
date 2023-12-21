import React from "react";

interface IProps {
  isShow: boolean;
  setShow: (value: React.SetStateAction<boolean>) => void;
}

const HamburgerButton = ({ isShow, setShow }: IProps) => {
  return (
    <button
      onClick={() => {
        isShow ? setShow(false) : setShow(true);
      }}
      className="flex flex-col justify-center items-center tablet:block phone:block laptop:hidden desktop:hidden large:hidden"
    >
      <span
        className={`bg-black block transition-all duration-300 ease-out 
          h-0.5 w-6 rounded-sm ${
            isShow ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
      />
      <span
        className={`bg-black block transition-all duration-300 ease-out 
          h-0.5 w-6 rounded-sm my-0.5 ${isShow ? "opacity-0" : "opacity-100"}`}
      />

      <span
        className={`bg-black block transition-all duration-300 ease-out 
          h-0.5 w-6 rounded-sm ${
            isShow ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
      />
    </button>
  );
};

export default HamburgerButton;
