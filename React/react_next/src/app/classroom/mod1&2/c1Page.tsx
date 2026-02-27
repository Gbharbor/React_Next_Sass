import React from "react";
import { Card } from "@/components/mod1_2/c1card";
import { CardWithAnd } from "@/components/mod1_2/c1CardWithAnd";
import { CardWithTernary } from '@/components/mod1_2/c1CardWithTernary'
import { CardWithDynamicStyles } from '@/components/mod1_2/c1CardWithDynamicStyle'
//definicao dos componentes fornecidos
const Page = () => {
   return (
      <div className='flex flex-col gap-8 items-center p-8'>
         <h1 className="text-2xl font-bold">Ex with props components</h1>
         <div>
            <h2 className="text-xl font-semibold">1.Ex Basic</h2>
            <Card phrase="A persistencia e o caminho do exito" author="Charles Chaplin"/>
         </div>
         <div>
            <h2 className="text-xl font-semibold">2.Ex com &&</h2>
            <CardWithAnd phrase="A simplicidade e a sofisticacao final"/>
         </div>
         <div>
            <h2 className="text-xl font-semibold">3.Ex with ternary operator</h2>
            <CardWithTernary phrase="you cant imagine how much i still need to learn" author="have no idea"/>
         </div>
         <div>
            <h2 className="text-xl font-semibold">4.Ex advanced with Styles</h2>
            <CardWithDynamicStyles phrase="A coragem é a resistencia ao medo" author="have no clue" />
         </div>
      </div>
   );
};
export default Page;