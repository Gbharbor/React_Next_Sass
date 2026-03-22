"use client"

import { Header } from "@/components/mod4/c12Header";
import { CountContext, CountInitialData } from "@/contexts/mod4/c12CountContext";

const Page = () => {
   return (
   <div className="container mx-auto">

      {/* 
         Provider do Context:

         - "abre" o contexto para os componentes filhos
         - o valor passado em "value" será compartilhado
         - qualquer componente dentro (Header e seus filhos)
           pode acessar esse valor com useContext(CountContext)

         fluxo:
         CountInitialData → Provider → componentes filhos
      */}
      <CountContext.Provider value={CountInitialData}>
         <Header/>
      </CountContext.Provider>

   </div>
   );
}

export default Page;