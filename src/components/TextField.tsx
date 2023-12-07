import React, { useState } from "react"

interface TextFieldProps {
  placeholder?: string
  onTextSet?: (text: string) => void
  type?: string
}

export default function TextField({ onTextSet, placeholder, type = "text" }: TextFieldProps): JSX.Element {
  const [text, setText] = useState<string>("");
  return (
    <input
      className="
        inline-flex justify-between
        w-full
        rounded-md border border-gray-300
        px-3 py-3
        bg-white
        text-sm text-gray-700
        hover:bg-gray-50
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
      type={type}
      placeholder={placeholder || "Type here"}
      value={text}
      onChange={e => {
        setText(oldText => e.target.value);
        onTextSet && onTextSet(e.target.value);
      }}
    />
  )
}
