//usando cleanUp
"use client"
import { Square } from "@/components/mod4/c5Square";
import { useState } from "react";

const Page = () => {
   const [show, setShow] = useState(false);


   return(
      <div className="">
         <button onClick={()=> setShow(!show)} >Mostrar/ocular</button>
         {show && <Square/>}
      </div>
   )
}

export default Page;