//Usando o preventDefault
"use client"
import { FormEvent } from "react";
const Page = () => {
   const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault(); //isso faz com que nao recarregue a pagina ao enviar o form
      alert('Enviando...')
   }
   return (
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="text-5xl mb-3">Form Login</h1> 
        <form onSubmit={handleFormSubmit}>
         <input type="text"/>
         <input type="submit" value="enviar"/>
        </form>
      </div>
   );
}
export default Page;