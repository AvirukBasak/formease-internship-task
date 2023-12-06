import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

interface DatePickerProps {
  onSetDate: (date: Date) => void;
};

export default function MyDatePicker({ onSetDate }: DatePickerProps) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      showIcon={true}
      selected={startDate}
      onChange={(newDate) => {
        setStartDate(oldDate => newDate as Date);
        onSetDate(newDate || new Date());
      }}
      icon="fa fa-calendar"
    />
  );
};
