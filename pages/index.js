import { useState } from 'react';


function Home() {
    return  (
        <div>
            <h1>Home Jonas</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, SetContador] = useState(1);

    function adicionarContador() {
        SetContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home