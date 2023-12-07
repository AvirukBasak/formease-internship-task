import React, { useState } from "react"

interface NavigatorProps {
  labels: string[]
  pages: JSX.Element[]
}

export default function Navigator({ labels, pages }: NavigatorProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="md:w-full flex flex-col items-center">
      <div className="flex flex-row justify-evenly w-full">
        <div className="h-0.5 bg-gray-800 absolute top-20 -z-10" style={{ width: "60%" }} />
        {labels.map((label, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center cursor-pointer"
              onClick={() => setCurrentPage(index)}
            >
              <div className={`
                mb-2 w-20 h-20
                flex flex-col items-center justify-center
                rounded-full border-2
                ${index === currentPage ? "bg-white border-blue-800" : "bg-gray-300 border-gray-700"}`}
              >
                <div
                  className={`text-xl ${index === currentPage ? " text-blue-800" : " text-gray-800"}`}
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
            <div key={index} className={`${index === currentPage ? "" : "hidden"}`}>
              {page}
            </div>
          )
        })}
      </div>
    </div>
  )
}
