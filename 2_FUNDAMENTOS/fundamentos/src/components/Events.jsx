import React from 'react'

const Events = () => {
    const handleClick = (e)=>{
        console.log("Executou handleClick");
        console.log(e)
    }

    // Renderização 

    const renderSomething = (x)=>{
        if (x) {
            return <h1>Renderizando isso!</h1>
        }else{
            return <h1>Renderizando outra coisa!</h1>
        }
    }








    
  return (
    <div>
        <div>
            <button onClick={()=>{console.log("Click")}}>Clique aqui</button>
        </div>

        <div>
            <button onClick={handleClick}>Clique aqui</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events