
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

// 2 - CSS de componente

function App() {
  // css dnamico 4
  const n = 11
  // classes dinamicas
  const  redTitle = true


  return (
    <div className='App'>
      {/* 1 - CSS GLOBAL */}
      <h1>CSS no REACT</h1>
      {/* 2 - css de componente */}
      <MyComponent/>
      <p>Pegou css do componente</p>
      {/* 3 - Inline Style */}
      <p style={{color: "blue", padding:"25px",borderTop:"1px dotted blue"}}>Este elemento tem inline style</p>
      {/* 4 - Inline Style Dinâmico */}
      <h2 style={n>10 ? {color:"purple"}:{color:"darkblue"}}>
        CSS dinâmico
      </h2>
      <h2 style={n>20 ? {color:"purple"}:{color:"darkblue"}}>
        CSS dinâmico
      </h2>
      {/* 5 - Classes dinamicas */}
      <h2 className={redTitle ? "red-title":"title"}>Esse titulo tem classe dinâmica</h2>
      {/* 6 - CSS Modules */}
      <Title/>

    </div>
  )
}

export default App
