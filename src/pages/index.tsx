import React from 'react'
import { Inter } from 'next/font/google'
import ToggleSwitch from '@/components/ToggleSwitch'
import Button from '@/components/Button'
import DropDownList from '@/components/DropDownList'
import DatePicker from '@/components/DatePicker'
import TimePicker from '@/components/TimePicker'
import TextField from '@/components/TextField'
import SectionCollapsable from '@/components/SectionCollapsable'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <>
      <ToggleSwitch defState={false} />
      <Button label="I am a Button" onClick={() => console.log('clicked')} />
      <DropDownList list={['one', 'two', 'three']} onSelect={(selection) => console.log(selection)} />
      <DatePicker onDateSet={(date) => console.log(date)} />
      <TimePicker onTimeSet={(time) => console.log(time)} />
      <TextField onTextSet={(text) => console.log(text)} />
      <SectionCollapsable title="I am a Section">
        <div className="flex flex-col space-y-2">
          <TextField onTextSet={(text) => console.log(text)} />
          <TextField onTextSet={(text) => console.log(text)} />
          <TextField onTextSet={(text) => console.log(text)} />
        </div>
      </SectionCollapsable>
    </>
  )
}
