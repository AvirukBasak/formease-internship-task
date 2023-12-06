import React from 'react'
import { Inter } from 'next/font/google'
import Switch from './components/Switch'
import Button from './components/Button'
import Spinner from './components/Spinner'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (<>
    <Switch defState={true} />
    <Button label="I am a Button" onClick={() => console.log('clicked')} />
    <Spinner list={['one', 'two', 'three']} onSelect={(selection) => console.log(selection)} />
  </>)
}
