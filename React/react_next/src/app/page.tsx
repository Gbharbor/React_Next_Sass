"use client"

import { Header } from "@/components/04-mod/12-header";
import { CountContext, CountInitialData } from "@/contexts/04-mod/12-count-context";

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