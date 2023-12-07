interface LaelWrapperProps {
  label?: string
  children: JSX.Element
  showLabel?: boolean
  width?: string
}

export default function LabelWrapper({ label, children, showLabel = true, width = "w-56" }: LaelWrapperProps): JSX.Element {
  return (
    <>
      <div className={width}>
        {
          showLabel && <label className="mr-auto mb-1 text-sm font-thin text-black block">
            {label || <span>&nbsp;&nbsp;</span>}
          </label>
        }
        {children}
      </div>
    </>
  )
}