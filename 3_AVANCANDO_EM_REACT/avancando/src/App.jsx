

import './App.css'

// Imagem em Assets
import city from "./assets/city.jpg"
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
// useState
import Data from "./components/Data"
import ListRender from './components/ListRender'
import ShowUserName from './components/ShowUserName'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'




  {/* Reutilização de listas de componentes com Loop */}
  const cars = [
    {id:1, brand:"Ferrari", color:"Amarelo",km:0},
    {id:2, brand:"KIA", color:"Branco",km:200000},
    {id:3, brand:"Renault", color:"Azul",km:32000},
  ];



function App() {
  function showMessage (){
    console.log("Evento do componente pai")
  }
 
  return (
    <div className='App' style={{paddingBottom: "500px"}}>

       <h1>Avançando em React</h1>
       {/* Imagem em public */}
        <img src="/img1.jpg" alt="Ao ar livre no por do Sol" />

       {/* Imagem em Assets */}
       <img src={city} alt="Outra imagem" />
       {/* useState */}
      <Data/>

      {/* Renderização de Lista */}
      <ListRender/>

      {/* 7 - Render Condicional */}
      <ConditionalRender/>
      {/* Props */}
      <ShowUserName name="Matheus"/>
      {/* Desustruturando Props */}
      <CarDetails brand="VW" km={0} color="Azul"/>
      {/* Reaproveitamento de componentes */}
      <CarDetails brand="Volvo" km={13256} color="Vermelho"/>
      <CarDetails brand="Gol" km={10000} color="Prata"/>
       {/* Reutilização de listas de componentes com Loop */}
      {cars.map((car)=>(
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}
      {/* fragments */}
      <Fragment/>

      {/*  13 - children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>

      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu container</p>
        </div>
      </Container>
      
      {/* Função em Prop */}
      <ExecuteFunction myFunction={showMessage}/>

      

      








    </div>
  )
}

export default App
