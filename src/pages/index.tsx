import React from 'react'
import { Inter } from 'next/font/google'
import PagePartyInfo from '@/pages/pagePartyinfo'
import Navigator from '@/components/Navigator'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <div className="p-20">
      <Navigator
        labels={[
          "Initial INformation",
          "Party Information",
          "Logistics",
          "Additional Services",
        ]}
        pages={[
          <></>,
          <PagePartyInfo />
        ]} />
    </div>
  )
}
