import { useState } from "react"

export function Display() {
    const [valor, setValor] = useState(0);

    return (
        <div id="display">
            {valor}
        </div>
    )
}

export function Botao({ operacao }) {
    return (
        <button>{operacao}</button>
    )
}
