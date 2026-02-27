type Props = {
    label: string;
    onClicking: () => void;
}
export const CustumButton = ({ label, onClicking}:Props) => {
    return (
        <button onClick={onClicking} className="p-3 text-white bg-blue-700 rounded-md">{label}</button>
    );
}