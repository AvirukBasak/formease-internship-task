import React, { useState } from 'react'
import ToggleSwitch from '@/components/ToggleSwitch'
import SectionCollapsable from '@/components/SectionCollapsable'
import DropDownList from '@/components/DropDownList';
import LabelWrapper from '@/components/LabelWrapper';
import TextField from '@/components/TextField';

function BasicInformation(): JSX.Element {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-row justify-evenly">
          <LabelWrapper label="Firm Name" width="w-72">
            <DropDownList list={
              "Lorem ipsum dolor sit amet consectetur adipiscing elit"
                .split(" ")
                .map(word => word[0].toUpperCase() + word.slice(1))
            } onSelect={() => null} />
          </LabelWrapper>

          <LabelWrapper label="Booking Contact Name" width="w-72">
            <TextField type="text" />
          </LabelWrapper>

          <LabelWrapper label="Phone Number (No spaces)" width="w-72">
            <TextField type="tel" />
          </LabelWrapper>
        </div>
      </div>
      <div className="mt-5 w-full">
        <div className="flex flex-row justify-evenly">
          <LabelWrapper label="Billing Address" width="w-72">
            <TextField type="text" />
          </LabelWrapper>

          <LabelWrapper label="ZIP/Postal Code" width="w-72">
            <TextField type="pin" placeholder="Input" />
          </LabelWrapper>

          <LabelWrapper label="Country/City" width="w-72">
            <DropDownList defaultSelection="Canada" list={
              "Lorem ipsum dolor amet consectetur adipiscing elit Canada"
                .split(" ")
                .map(word => word[0].toUpperCase() + word.slice(1))
            } onSelect={() => null} />
          </LabelWrapper>
        </div>
      </div>
    </>
  )
}

function RoleInformation(): JSX.Element {
  return (
    <>
      <div className="mt-4 w-full">
        <div className="flex flex-row justify-evenly">
          <LabelWrapper label="Role" width="w-72">
            <TextField type="text" placeholder="Input" />
          </LabelWrapper>

          <LabelWrapper label="Name of represented client" width="w-72">
            <TextField type="text" placeholder=" " />
          </LabelWrapper>
        </div>
      </div>
      <div className="mt-5 w-full">
        <div className="flex flex-row justify-evenly">
          <LabelWrapper label="Lead Counsel(s) Information" width="w-72">
            <TextField type="text" placeholder="Name" />
          </LabelWrapper>

          <LabelWrapper width="w-72">
            <TextField type="email" placeholder="Email" />
          </LabelWrapper>
        </div>
      </div>
    </>
  )
}

function AccountInformation(): JSX.Element {
  return (
    <>
      <BasicInformation />
      <RoleInformation />
    </>
  )
}

function BookingPartyInformation(): JSX.Element {
  const [useAccountInfo, setUseAccountInfo] = useState(true);
  return (
    <>
      <SectionCollapsable title="Booking Party Information" /*subtitle=""*/>
        <>
          <div className="ml-12 flex items-center">
            <label className="mr-3 text-sm font-medium text-gray-700">Use Information on account?</label>
            <ToggleSwitch defState={useAccountInfo} onStateChange={newState => setUseAccountInfo(newState)} />
          </div>
          {useAccountInfo && <div className="md:w-full ml-8 mt-4"><AccountInformation /></div>}
        </>
      </SectionCollapsable>
    </>
  )
}

function OpposingPartyInformation(): JSX.Element {
  return (
    <>
      <SectionCollapsable title="Opposing Party Information" /*subtitle=""*/>
          <div className="md:w-full ml-8 mt-4"><AccountInformation /></div>
      </SectionCollapsable>
    </>
  )
}

export default function PagePartyInfo(): JSX.Element {
  return (
    <>
      <BookingPartyInformation />
      <OpposingPartyInformation />
    </>
  )
}
