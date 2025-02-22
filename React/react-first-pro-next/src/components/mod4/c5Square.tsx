import { useEffect } from "react"

export const Square =() => {
   useEffect(()=> {
      //console.log('conectado');
      //quando fazer o return,  e como se fosse noso clean up ou seja so acontece quando o componente e removido da tela
      window.addEventListener('scroll', ()=>{});
      return () => {
         console.log('desconectado'); // digamos q ele monita o scroll da 
         window.removeEventListener('scroll', () => {})
      }
   })
   return (
      <div className="w-40 h-40 bg-red-600"></div>
   )
}