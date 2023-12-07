import React from 'react'
import ToggleSwitch from '@/components/ToggleSwitch'
import SectionCollapsable from '@/components/SectionCollapsable'

export default function PageLogistics(): JSX.Element {
  return (
    <>
      <SectionCollapsable title="Booking Party Information" /*subtitle=""*/>
        <>
          <div className="ml-12 flex items-center">
            <label className="mr-3 text-sm font-medium text-gray-700">Use Information on account?</label>
            <ToggleSwitch defState={true} onStateChange={state => {
              console.log(state);
            }} />
          </div>
        </>
      </SectionCollapsable>
    </>
  )
}
