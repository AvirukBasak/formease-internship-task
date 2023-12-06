import React from 'react'
import { Inter } from 'next/font/google'
import ToggleSwitch from './components/ToggleSwitch'
import Button from './components/Button'
import DropDownList from './components/DropDownList'
import MyDatePicker from './components/DatePicker'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (<>
    <ToggleSwitch defState={false} />
    <Button label="I am a Button" onClick={() => console.log('clicked')} />
    <DropDownList list={['one', 'two', 'three']} onSelect={(selection) => console.log(selection)} />
    <MyDatePicker onSetDate={(date) => console.log(date)} />
  </>)
}
