import { useEffect, useState } from "react";

const Page = () => {
   /*
   O useEffect é um hook do React utilizado para lidar com efeitos colaterais dentro de componentes funcionais.
   Ele é executado após a renderização do componente e pode ser configurado para rodar em momentos específicos.

   Exemplos de efeitos colaterais:
   - Fazer chamadas a APIs externas;
   - Manipular o DOM diretamente;
   - Configurar e limpar eventos, como listeners de WebSocket;
   - Trabalhar com timers e intervalos.
   */

   /*
   O useEffect possui três elementos principais:
   1. A função que será executada quando o efeito ocorrer.
   2. A lista de dependências que determina quando o efeito será reexecutado.
   3. A função de limpeza (opcional), que é chamada quando o componente é desmontado ou antes da próxima execução do efeito.
   */
 
   const [firstName, setFirstName] = useState('Gui'); 
   const [lastName, setLastName] = useState('Porto'); 
   const [age, setAge] = useState(90);

   // Exemplo de atualização de um valor derivado sem necessidade de useEffect
   const fullName = `${firstName} ${lastName}`; 

   // Exemplo de useEffect sem dependências: executa apenas na montagem do componente
   useEffect(() => {
      console.log('Executou o useEffect na montagem');
   }, []); //dentro dessa array tu escolhe o que quer monitorar, digamos que foce apenas name ou apenas age, quando for executar ira executar apenas o que tu colocou para monitorar dentro do array.

   // Exemplo de useEffect com dependências: executa sempre que firstName ou lastName mudar
   useEffect(() => {
      console.log(`Nome atualizado: ${fullName}`);
   }, [firstName, lastName]);

   return (
      <div>
         <p>Meu nome é {fullName}</p>
         <input defaultValue={fullName} />
         <hr/>
         <button className="border border-blue-600 m-3 p-3" 
         onClick={() => setFirstName('Porto')}>Mudar p/ Porto</button>
         <button className="border border-blue-600 m-3 p-3" 
         onClick={() => setFirstName('Harbor')}>Mudar p/ Harbor</button>
         <button className="border border-blue-600 m-3 p-3" 
         onClick={() => setAge(10)}>Mudar p/ 10 anos</button>
         <button className="border border-blue-600 m-3 p-3" 
         onClick={() => setAge(90)}>Mudar p/ 90 anos</button>
      </div>
   );
};

export default Page;