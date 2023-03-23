import { useEffect, useState } from 'react'
import axios from 'axios'
import ExternalAxios from './ExternalAxios'

function FetchData() {
    const [state, setState] = useState([])

    const getData = (query) => {
        ExternalAxios.get(query)
        .then(data => console.log(data.data))

    }

    // const getData = () => {
    //     axios.get('http://jsonplaceholder.typicode.com/users')
    //     .then(users => console.log(users.data))
    // }

    useEffect(()=>{
        setTimeout(()=>{
            getData(`/${state}`)
        },1000)   
    },[state])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
  return (
    <div>
        <input type={'text'} onChange={(e)=>setState(e.target.value)} />
        <h1>Fetch Data From API</h1>
    </div>
  )
}

export default FetchData