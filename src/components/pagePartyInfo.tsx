import React, { useState } from 'react'
import ToggleSwitch from '@/components/ToggleSwitch'
import SectionCollapsable from '@/components/SectionCollapsable'
import DropDownList from '@/components/DropDownList';
import LabelWrapper from '@/components/LabelWrapper';
import TextField from '@/components/TextField';
import Button from '@/components/Button';

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

          <span>&nbsp;</span>

          <LabelWrapper label="Booking Contact Name" width="w-72">
            <TextField type="text" />
          </LabelWrapper>

          <span>&nbsp;</span>

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

          <span>&nbsp;</span>

          <LabelWrapper label="ZIP/Postal Code" width="w-72">
            <TextField type="pin" placeholder="Input" />
          </LabelWrapper>

          <span>&nbsp;</span>

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

  const [listOfCounsel, setListOfCounsel] = useState([] as JSX.Element[]);

  const CounselInfo = function (): JSX.Element {
    return (
      <>
        <div className="mt-2 w-full" />
        <div className="flex flex-row justify-evenly">
          <LabelWrapper showLabel={false} width="w-72">
            <TextField type="text" placeholder="Name" />
          </LabelWrapper>

          <span className="mt-3" ><img src="/elipsis.svg" /></span>

          <LabelWrapper showLabel={false} width="w-72">
            <TextField type="email" placeholder="Email" />
          </LabelWrapper>
        </div>
      </>
    )
  }

  const PlaceHolderForAdditionalCounsel = function (): JSX.Element {
    return (
      <>
        <div className="mt-2 w-full" />
        <div className="flex flex-row justify-evenly">

          <LabelWrapper showLabel={false} width="w-72">
            <span className="flex">
              <img src="/plus.svg" className="absolute mt-3 cursor-pointer inline" style={{ left: "16%" }} onClick={() => {
                setListOfCounsel(oldList => [...oldList, <CounselInfo />]);
              }} />
              <TextField type="text" placeholder="Add additional counsel" disabled={true} />
            </span>
          </LabelWrapper>

          <span className="mt-3" ><img src="/elipsis.svg" /></span>

          <LabelWrapper showLabel={false} width="w-72">
            <TextField type="text" placeholder=" " disabled={true} />
          </LabelWrapper>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="mt-4 w-full">
        <div className="flex flex-row justify-evenly">
          <LabelWrapper label="Role" width="w-72">
            <TextField type="text" placeholder="Input" />
          </LabelWrapper>

          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

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

          <span className="mt-8" ><img src="/elipsis.svg" /></span>

          <LabelWrapper width="w-72">
            <TextField type="email" placeholder="Email" />
          </LabelWrapper>
        </div>

        {listOfCounsel.length > 0 && listOfCounsel}

        <PlaceHolderForAdditionalCounsel />

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

function AdditionalOpposingParties({ isVisible = true }: { isVisible?: boolean }): JSX.Element {

  const [visible, setVisible] = useState(isVisible);

  return (
    <>
      <img
        src="/additionalParties.svg"
        className="h-10 mt-12 mb-8 ml-8 cursor-pointer inline z-10"
        style={{ display: visible ? "inline" : "none" }}
        onClick={() => setVisible(false)} />
      {visible && <AccountInformation />}
    </>
  )
}

function OpposingPartyInformation(): JSX.Element {

  const [listOfOpposingParties, setListOfOpposingParties] = useState([] as JSX.Element[]);

  return (
    <>
      <SectionCollapsable title="Opposing Party Information" /*subtitle=""*/>
        <>
          <div className="md:w-full ml-8 mt-4"><AccountInformation /></div>
          {listOfOpposingParties.length > 0 && listOfOpposingParties}
        </>
      </SectionCollapsable>
      <div className="ml-8 mt-12">
        <Button label="+ Additional Parties" onClick={() => {
          setListOfOpposingParties(oldList => [...oldList, <AdditionalOpposingParties />]);
        }} />
      </div>
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
