import React, {useState, useEffect} from 'react'

const search = () => {
    //setear los hooks usestate
    const [ users, setUsers] = useState([])
    const [ search, setSearch] = useState("")
    //funcion traer datos del api
    const URL = '/api/books'

    const showData = async () =>{
        const response = await fetch(URL)
        const data = await response.json()
        //console.log(data)
        setUsers(data)
    }
  
    //metodo de filtrado

    //funcion de busqueda
    const searcher = (e) => {
        setSearch
    }

    useEffect(() =>{
        showData()
    }, [])
    //renderizamos la vista


    return(
        <div>
            <input value={search} onChange={e} type="text" placeholder='search' className='form-control'></input>
            <table className='table table -striped table-hover mt-5 shadow-lg'>
                <thead>
                    <tr className='bg-curso text-red'>
                        <th>title</th>
                        <th>autor</th>
                        <th>image</th>
                        <th>descripcion</th>
                        <th>fecha</th>
                        <th>calificacion</th>
                        <th>categoria</th>
                        <th>hojas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>(
                            <tr key={user.id}>
                                <td>user.title</td>
                                <td>user.autor</td>
                                <td>user.image</td>
                                <td>user.descripcion</td>
                                <td>user.fecha</td>
                                <td>user.calificacion</td>
                                <td>user.categoria</td>
                                <td>user.hojas</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default search