import MultiActionButton from "@/components/mod3/c1MultiActionButton";
const Page = () => {
   //funcao simples com Alert.
   const showAlert = () => {
      alert("working");
   };
   //funcao anonima no onclick
   const showAlert2 = () => {
      alert("working 2");
   };
   //funcao c/ function click()
   const showAlert3 = function click() {
      alert("working 3");
   };
   const handleButtonClick =() => {
      alert("working 4");
   };
   return (
      <div className="flex flex-col items-center gap-4">
         <MultiActionButton 
            Click={showAlert}
            buttonText="Click here(alert)"
         />
         <MultiActionButton 
            Click={showAlert2}
            buttonText="Click here(alert2)"
         />
         <MultiActionButton 
            Click={showAlert3}
            buttonText="Click here(alert3)"
         />
         <MultiActionButton 
            Click={handleButtonClick}
            buttonText="Click here(alert 4)"
         />
      </div>
   )
}
export default Page;
//No Next.js, todos os componentes são, por padrão, Server Components. No entanto, para que funcione corretamente em certas situações, podemos adicionar a diretiva 'use client' no início do arquivo, permitindo que o componente seja tratado como um Client Component sem gerar erros.