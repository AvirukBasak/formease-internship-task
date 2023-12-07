import React, { useState } from 'react'
import ToggleSwitch from '@/components/ToggleSwitch'
import SectionCollapsable from '@/components/SectionCollapsable'

function AccountInformation(): JSX.Element {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">First Name</label>
            <input type="text" className="mt-1 p-2 rounded-md border border-gray-300" />
          </div>
          <div className="flex flex-col ml-4">
            <label className="text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" className="mt-1 p-2 rounded-md border border-gray-300" />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input type="text" className="mt-1 p-2 rounded-md border border-gray-300" />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium text-gray-700">Phone Number</label>
          <input type="text" className="mt-1 p-2 rounded-md border border-gray-300" />
        </div>
      </div>
    </>
  )
}

export default function PagePartyInfo(): JSX.Element {
  const [useAccountInfo, setUseAccountInfo] = useState(true);
  return (
    <>
      <SectionCollapsable title="Booking Party Information" /*subtitle=""*/>
        <>
          <div className="ml-8 flex items-center">
            <label className="mr-3 text-sm font-medium text-gray-700">Use Information on account?</label>
            <ToggleSwitch defState={useAccountInfo} onStateChange={newState => setUseAccountInfo(newState)} />
          </div>
          {useAccountInfo && <div className="ml-8 mt-4"><AccountInformation /></div>}
        </>
      </SectionCollapsable>
    </>
  )
}
