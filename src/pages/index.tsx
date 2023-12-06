import React from 'react'
import { Inter } from 'next/font/google'
import Switch from './components/Switch'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <Switch defState={true} />
  )
}
