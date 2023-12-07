import React, { useState } from "react"

interface NavigatorProps {
  labels: string[]
  pages: (JSX.Element | null)[]
  defaultPage?: number
}

export default function Navigator({ labels, pages, defaultPage = 0 }: NavigatorProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState(defaultPage);
  return (
    <div className="md:w-full flex flex-col items-center">
      <div className="md:w-full flex flex-row justify-evenly">
        <div className="h-0.5 bg-gray-800 absolute -z-10" style={{ width: "57%", top: "4.5rem" }} />
        {labels.map((label, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center cursor-pointer"
              onClick={() => setCurrentPage(index)}
            >
              <div className={`
                mb-2 w-16 h-16
                flex flex-col items-center justify-center
                rounded-full border-2
                ${index === currentPage ? "bg-white border-blue-800" : "bg-gray-300 border-gray-700"}`}
              >
                <div
                  className={`text-2xl ${index === currentPage ? " text-blue-800" : " text-gray-800"}`}
                >
                  {index + 1}
                </div>
              </div>
              <div
                className={` text-sm ${index === currentPage ? " text-blue-800" : " text-gray-800"}`}
              >
                {label}
              </div>
            </div>
          )
        })}
      </div>
      <div className="md:w-full flex flex-row justify-center">
        {pages.map((page, index) => {
          return (
            <div key={index} className={`md:w-full justify-normal ${index === currentPage ? "" : "hidden"}`}>
              {page}
            </div>
          )
        })}
      </div>
    </div>
  )
}
