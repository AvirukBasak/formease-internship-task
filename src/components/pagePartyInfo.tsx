import React, { useState } from 'react'
import ToggleSwitch from '@/components/ToggleSwitch'
import SectionCollapsable from '@/components/SectionCollapsable'
import DropDownList from '@/components/DropDownList';
import LabelWrapper from '@/components/LabelWrapper';
import TextField from '@/components/TextField';

function AccountInformation(): JSX.Element {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row justify-evenly">

          <LabelWrapper label="Firm Name" width="w-80">
            <DropDownList list={
              "Lorem ipsum dolor sit amet consectetur adipiscing elit"
                .split(" ")
                .map(word => word[0].toUpperCase() + word.slice(1))
            } onSelect={() => null} />
          </LabelWrapper>

          <LabelWrapper label="Booking Contact Name" width="w-80">
            <TextField type="text" />
          </LabelWrapper>

          <LabelWrapper label="Phone Number (No spaces)" width="w-80">
            <TextField type="tel" />
          </LabelWrapper>

        </div>
      </div>

      <div className="justify-around">
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
          {useAccountInfo && <div className="md:w-full ml-8 mt-4"><AccountInformation /></div>}
        </>
      </SectionCollapsable>
    </>
  )
}
