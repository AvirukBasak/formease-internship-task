import React from 'react'
import { Inter } from 'next/font/google'
import PagePartyInfo from '@/pages/pagePartyinfo'
import PageLogistics from '@/pages/pageLogistics'
import PageAdditonalSrv from '@/pages/pageAdditionalSrv'
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
          null,
          <div className="md:w-full p-10"><PagePartyInfo /></div>,
          <div className="md:w-full p-10"><PageLogistics /></div>,
          <div className="md:w-full p-10"><PageAdditonalSrv /></div>,
        ]}
        defaultPage={1}
      />
    </div>
  )
}
