type Props = {
    label: string;
    onClicking: () => void;
  };
  
  export const CustumButton = ({
    label,
    onClicking,
  }: Props) => {
    return (
      <button
        onClick={onClicking}
        className="rounded-md bg-blue-700 p-3 text-white"
      >
        {label}
      </button>
    );
  };