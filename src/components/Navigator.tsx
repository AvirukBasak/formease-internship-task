import React, { useState } from "react"

interface NavigatorProps {
  labels: string[]
  pages: JSX.Element[]
}

export default function Navigator({ labels, pages }: NavigatorProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-center">
        {labels.map((label, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
              onClick={() => setCurrentPage(index)}
            >
              <div
                className={`
                  flex flex-col items-center justify-center
                  rounded-full border-4 border-dodgerBlue
                  w-10 h-10 ${index === currentPage ? "bg-dodgerBlue" : "bg-white"}`
                }
              >
                <div className="text-white font-bold">{index + 1}</div>
              </div>
              <div className="text-dodgerBlue">{label}</div>
            </div>
          )
        })}
      </div>
      <div className="flex flex-row justify-center">
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
