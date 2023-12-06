import React, { useState } from "react";

interface ToggleSwitchProps {
  onLabel?: string;
  offLabel?: string;
  defState?: boolean;
};

export default function ToggleSwitch({ onLabel = "Yes", offLabel = "No", defState = false }: ToggleSwitchProps): JSX.Element {
  const [toggle, setToggle] = useState(!defState);
  const toggleClassBg = " transform bg-green-400";
  const toggleClassFg = " transform translate-x-2 bg-white";
  return (
    <div
      className={
        "text-white w-16 h-8 pl-1 pr-1 flex items-center rounded-full cursor-pointer " +
        (toggle ? "bg-red-400" : toggleClassBg)
      }
      onClick={() => {
        setToggle(!toggle);
      }}>

      {!toggle ? <span className="text-sm ml-1">{onLabel}</span> : ""}

      <div
        className={
          "h-6 w-6 rounded-full transform duration-200 ease-in-out " +
          (toggle ? "bg-red-600" : toggleClassFg)
        }
      />

      {toggle ? <span className="text-sm ml-1">{offLabel}</span> : ""}

    </div>
  );
}
