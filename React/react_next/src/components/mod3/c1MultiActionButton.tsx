"use client"
import { MultiActionButtonProps } from "@/types/mod3/c1"
const MultiActionButton = ({Click, buttonText, twcss }: MultiActionButtonProps) => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <button
                onClick={Click}
                className={`p-3 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition${twcss}`}
            >
                {buttonText}
            </button>
        </div>
    );
};
export default MultiActionButton;