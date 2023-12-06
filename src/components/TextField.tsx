import { useState } from "react"

interface TextFieldProps {
  placeholder?: string
  onTextSet?: (text: string) => void
}

export default function TextField({ onTextSet, placeholder }: TextFieldProps): JSX.Element {
  const [text, setText] = useState<string>("");
  return (
    <input
      className="
        inline-flex justify-between
        md:w-56
        rounded-md border border-gray-300
        px-3 py-3
        bg-white
        text-gray-700
        hover:bg-gray-50
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
      type="text"
      placeholder={placeholder || "Type here"}
      value={text}
      onChange={e => {
        setText(oldText => e.target.value);
        onTextSet && onTextSet(e.target.value);
      }}
    />
  )
}
