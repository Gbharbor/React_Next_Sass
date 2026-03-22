import { CountContext } from "@/contexts/mod4/c12CountContext";
import { useContext } from "react"

export const OnlineUsers = () => {

   // consome o contexto (pega o valor fornecido pelo Provider)
   const count = useContext(CountContext);

   return (
      // exibe o valor vindo do contexto
      <p> Online: {count} </p>
   )
}