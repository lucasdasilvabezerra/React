import React from 'react'

const ConditionalRender = () => {


    const x = 5

    const name  = "João"


  return (
    // Render Condicional
    <div>
        <h3>Isso será exibido?</h3>
        {x>2 && <p>Se x for true sim!</p>}

    {/* Else */}
    {name === "João" ? (
        <div>
            <p>Olá João</p>
        </div>
    ):(
        <div>
            <p>Você não é o João</p>
        </div>
    )}




    </div>
  )
}

export default ConditionalRender