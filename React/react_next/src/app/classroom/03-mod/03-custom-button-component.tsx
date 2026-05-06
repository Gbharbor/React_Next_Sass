"use client";

import { CustumButton } from "@/components/03-mod/03-custum-button";

const Page = () => {
  const handleButton1 = () => alert("Clicked button 1");

  const handleButton2 = () => alert("Clicked button 2");

  const handleButton3 = () => alert("Clicked button 3");

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <CustumButton
        label="Click Here 1"
        onClicking={handleButton1}
      />

      <CustumButton
        label="Click Here 2"
        onClicking={handleButton2}
      />

      <CustumButton
        label="Click Here 3"
        onClicking={handleButton3}
      />
    </div>
  );
};

export default Page;