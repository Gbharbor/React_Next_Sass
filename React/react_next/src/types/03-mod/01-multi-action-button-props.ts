export interface MultiActionButtonProps {
    // Function executed on button click
    Click: () => void;
  
    // Button label
    buttonText: string;
  
    // Optional extra Tailwind classes
    twcss?: string;
  }