interface ButtonProps {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
}

export default function Button({ label, onClick, isDisabled = false }: ButtonProps): JSX.Element {
  return (
    <button
      className="bg-black text-white px-10 py-2 active:bg-slate-800 text-sm font-mono"
      onClick={onClick}
      disabled={isDisabled}
    >
      {label.toUpperCase()}
    </button>
  );
}
