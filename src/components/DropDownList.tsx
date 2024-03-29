import React, { useState, useEffect } from "react"

type DropDownListProps = {
  list: string[];
  defaultSelection?: string;
  onSelect: (selection: string) => void;
};

export default function DropDownList({ list, defaultSelection = "", onSelect }: DropDownListProps): JSX.Element {
  const [selection, setSelection] = useState(defaultSelection);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selection === "") {
      setSelection("Input");
    }
  }, [selection]);

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <span className="rounded-md shadow-sm w-full">
          <button
            type="button"
            className="
              inline-flex justify-between
              w-full
              rounded-md border border-gray-300
              px-2 pl-3 py-3
              bg-white
              text-sm text-gray-700
              hover:bg-gray-50
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selection}
            <i className="ml-2 mt-1 fas fa-chevron-down"></i>
          </button>
        </span>
      </div>

      {isOpen ? (
        <div
          className="
            origin-top-right
            absolute right-0
            z-10
            mt-1 w-full
            rounded-md
            shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu">
          <div className="py-1" role="none">
            {list.map((item) => (
              <div
                key={item}
                className="
                  block
                  px-4 py-2
                  text-sm text-gray-700
                  hover:bg-gray-100 hover:text-gray-900"
                role="menu item"
                onClick={() => {
                  setSelection(item);
                  setIsOpen(false);
                  onSelect(item);
                }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
