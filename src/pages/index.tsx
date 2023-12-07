import React from 'react'
import { Inter } from 'next/font/google'
import PagePartyInfo from '@/pages/pagePartyinfo'
import Navigator from '@/components/Navigator'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <div className="p-10">
      <Navigator
        labels={[
          "Initial Information",
          "Party Information",
          "Logistics",
          "Additional Services",
        ]}
        pages={[
          <></>,
          <div className="p-10 md:w-full"><PagePartyInfo /></div>
        ]}
      />
    </div>
  )
}
