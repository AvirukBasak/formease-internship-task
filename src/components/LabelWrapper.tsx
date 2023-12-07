interface LaelWrapperProps {
  label?: string
  children: JSX.Element
  showLabel?: boolean
  width?: string
}

export default function LabelWrapper({ label = "&nbsp;", children, showLabel = true, width = "w-56" }: LaelWrapperProps): JSX.Element {
  return (
    <>
      <div className={width}>
        {showLabel && <label className="mr-auto text-sm font-thin text-black block">{label}</label>}
        {children}
      </div>
    </>
  )
}