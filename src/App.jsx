import { useState } from "react"

function App(){
  const [nome, setNome] = useState('Ronaldo')
  const [idade, setIdade] = useState(18)
  const [time, setTime] = useState('corinthians')
  const [pi] = useState(3.14)

  //var idade = 18;
  //let time = 'Corinthians';
 // const pi = 3.14;

  const Formulario = (props)=>{
    const [valor, detValor] = useState()

      return (
        <div>
        <input
        className = "nome"
        placeholder= {props.sombra}
        onChange={(e)=>{setNome(e.target.value)}}
         type="text" />

        <button
          clasName="botao"
          onClick={()=>{
            if(valor.length > 0)
              alert(valor)
            else
              alert(props.nome + 'idade é ' + props.idade
          )}}
        >
          CLIQUE AQUI
         </button>
        </div>
      )
    }


  return (
    <div>
      <h3>Pizzaria 2E</h3>
      <Formulario nome="guilherme"
        idade={45}
        sombra="digite nome..." />
      <Formulario nome="maria" sombra="digite sua idade..."/>
      <Formulario nome="tomas" sombra="digite seu time..."/>
      <Formulario nome="Antonieta" sombra="valor de pi"/> 

    </div>
  )
}

export default App