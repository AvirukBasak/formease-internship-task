import React, { useState } from "react"

interface TimePickerProps {
  onTimeSet?: (time: string) => void
}

export default function TimePicker({ onTimeSet }: TimePickerProps): JSX.Element {
  const [time, setTime] = useState<string>("");
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
      type="time"
      value={time}
      onChange={e => {
        setTime(oldTime => e.target.value);
        onTimeSet && onTimeSet(e.target.value);
      }}
    />
  )
}
