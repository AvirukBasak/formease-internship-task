import { useState } from "react"

interface DatePickerProps {
  onDateSet?: (date: Date) => void
}

export default function DatePicker({ onDateSet }: DatePickerProps): JSX.Element {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <input
      className="
          md:w-56
          rounded-md border border-gray-300
          px-3 pt-3 pb-4
          bg-white
          text-sm text-gray-700
          hover:bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
      type="date"
      value={date?.toISOString().split("T")[0] || ""}
      onChange={e => {
        setDate(oldDate => new Date(e.target.value));
        onDateSet && onDateSet(new Date(e.target.value));
      }}
    />
  )
}
