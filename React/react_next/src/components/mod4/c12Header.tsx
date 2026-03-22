import { OnlineUsers } from "./c12OnlineUsers";

export const Header = () => {
   return (
      <header>
         {/* componente apenas estrutural (não usa contexto diretamente) */}
         <h1 className="text-3xl"> Titulo da Pagina</h1>

         {/* componente filho que consome o contexto */}
         <OnlineUsers/>
      </header>
   )
} 