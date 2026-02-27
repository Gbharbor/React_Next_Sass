"use client"; 
const Page = () => {
// Exemplo 1: Função simples para o botão
const handleClick = () => {
    alert('worked it!');
  };
  // Exemplo 2: Função com parâmetro
  const avisar = (msg: string) => {
    alert(msg);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center space-x-4">
      {/* Erro: A função handleClick é chamada imediatamente durante a renderização 
      <button onClick={handleClick()} className="p-3 bg-blue-700 text-white rounded-md">
      o invés de invocar a função diretamente, você deve passar a referência da função para o onClick. Isso garante que o React associará a função ao evento de clique e ela será executada somente quando o botão for clicado.
        Click Here
      </button>*/}
      {/* Exemplo 1: Passando a referência da função ao onClick */}
      <button onClick={handleClick} className="p-3 bg-blue-700 text-white rounded-md">
        Click Here (Simple Alert)
      </button>
      {/* Exemplo 2: Passando parâmetro para a função usando arrow function */}
      <button onClick={() => avisar('message1')} className="p-3 bg-blue-700 text-white rounded-md">
        Click Here 1 (With Message)
      </button>
      <button onClick={() => avisar('message2')} className="p-3 bg-blue-700 text-white rounded-md">
        Click Here 2 (With Message)
      </button>
    </div>
  );
};
export default Page;