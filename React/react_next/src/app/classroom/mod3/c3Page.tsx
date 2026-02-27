"use client"
import { CustumButton } from "@/components/mod3/c3CustumButton";
const Page = () => {
   const handleButton1 = () => alert('clicou no botao 1');
   const handleButton2 = () => alert('clicou no botao 2');
   const handleButton3 = () => alert('clicou no botao 3');
   return (
      <div className="w-screen h-screen flex justify-center items-center">
         <CustumButton label="Click Here1" onClicking={handleButton1}/>
         <CustumButton label="Click Here2" onClicking={handleButton2}/>
         <CustumButton label="Click Here3" onClicking={handleButton3}/>
      </div>
   );
}
export default Page;