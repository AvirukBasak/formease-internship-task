import React, { useState } from "react"

interface SectionCollapsableProps {
  title: string
  children: JSX.Element
  defaultCollapsed?: boolean
  onCollapseChange?: (collapsed: boolean) => void
}

export default function SectionCollapsable({ title, children, defaultCollapsed = false, onCollapseChange }: SectionCollapsableProps): JSX.Element {
  const [collapsed, setCollapsed] = useState<boolean>(defaultCollapsed || false);
  return (
    <>
      <div className="mt-4 flex text-left items-center cursor-pointer"
        onClick={() => {
          setCollapsed(oldCollapsed => !oldCollapsed);
          onCollapseChange && onCollapseChange(!collapsed);
        }}
      >
        <button
          className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          {collapsed ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
        </button>
        <h2 className="ml-2 text-lg font-medium text-gray-900">{title}</h2>
      </div>
      <div className={`w-full ${collapsed ? "hidden" : "block"} mt-4`}>
        {children}
      </div>
    </>
  )
}
