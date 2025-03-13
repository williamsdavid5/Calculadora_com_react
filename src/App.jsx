import './App.css'
import { Display, Botao } from "./Componentes"

function App() {
  return (
    <>
      <Display></Display>
      <table border={1}>
        <tbody>
          <tr>
            <td><Botao operacao="X²" /></td><td><Botao operacao="/" /></td><td><Botao operacao="X" /></td><td><Botao operacao="del" /></td>
          </tr>
          <tr>
            <td><Botao operacao="9" /></td><td><Botao operacao="8" /></td><td><Botao operacao="7" /></td><td><Botao operacao="+" /></td>
          </tr>
          <tr>
            <td><Botao operacao="6" /></td><td><Botao operacao="5" /></td><td><Botao operacao="4" /></td><td><Botao operacao="-" /></td>
          </tr>
          <tr>
            <td><Botao operacao="3" /></td><td><Botao operacao="2" /></td><td><Botao operacao="1" /></td><td><Botao operacao="=" /></td>
          </tr>
          <tr>
            <td><Botao operacao="src" /></td><td><Botao operacao="0" /></td><td><Botao operacao="." /></td><td></td>
          </tr>
        </tbody>
      </table>

    </>
  )
}

export default App
