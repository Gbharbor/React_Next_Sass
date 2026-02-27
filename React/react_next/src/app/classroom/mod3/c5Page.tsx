import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0); // Inicializa o state com 0
  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
export default Counter;
/*
=========================================================
    CLASS 5: O que é um State
==========================================================
No React, o State é onde guardamos dados que podem mudar ao longo do tempo. Quando o state muda, o React atualiza automaticamente a interface.
Aqui, o botão incrementa o contador, e o React atualiza a tela automaticamente. O state é essencial para criar interatividade. 
*/