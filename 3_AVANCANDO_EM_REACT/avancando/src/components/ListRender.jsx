import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Lucas","Pedro","Matheus"])

    const [users, setUsers] = useState([
    {id:1,name:"Lucas",age:22},
    {id:2,name:"Ana",age:21},
    {id:3,name:"Gabriel",age:22}


    ])

    const deleteRandom = ()=>{
        const randomNumber = Math.floor(Math.random()*4)

        setUsers((prevUsers)=> prevUsers.filter((user)=> randomNumber !== user.id))



    }


  return (
  

    <div>
        {/* render sem key */}
        <ul>
            {list.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
        {/* render com key */}
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar User Aleatório</button>
    </div>
  )
}

export default ListRender