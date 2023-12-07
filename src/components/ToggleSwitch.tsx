import React, { useState } from "react"

interface ToggleSwitchProps {
  onLabel?: string;
  offLabel?: string;
  defState?: boolean;
  onStateChange?: (newState: boolean) => void;
};

export default function ToggleSwitch({ onLabel = "Yes", offLabel = "No", defState = false, onStateChange }: ToggleSwitchProps): JSX.Element {
  const [toggle, setToggle] = useState(defState);
  return (
    <div
      className={
        "text-white w-16 h-8 pl-1 pr-1 flex items-center rounded-full cursor-pointer " +
        (toggle ? "transform bg-green-400" : "bg-red-400")
      }
      onClick={() => {
        setToggle(!toggle);
        onStateChange && onStateChange(!toggle);
      }}>

      {toggle && <span className="text-sm ml-1">{onLabel}</span>}

      <div
        className={
          "h-6 w-6 rounded-full transform duration-200 ease-in-out " +
          (toggle ? "transform translate-x-2 bg-white" : "bg-red-600")
        }
      />

      {!toggle && <span className="text-sm ml-1">{offLabel}</span>}

    </div>
  );
}
