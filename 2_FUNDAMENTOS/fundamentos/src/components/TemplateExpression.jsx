

const TemplateExpression = () => {
    const name = "Lucas"
    const data = {
        age: 22,
        job: "Programador "
    }
  return (
    <div>
        <p>A soma é {2+4}</p>
        <h3>Bem vindo {name}!</h3>
        <p>Sua idade é {data.age} e você é um {data.job}</p>
    </div>
  )
}

export default TemplateExpression