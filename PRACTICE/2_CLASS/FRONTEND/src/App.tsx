"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {

  const  [api, setapi] = useState([])

  useEffect(() => {
    const jokes=async () => {
      const response = await axios.get('http://localhost:3000/api/jokes');
      // ismy hmy jeson wagera ka use nhi krna prhta 
      const data = response.data;
      console.log(data)
      setapi(data)  
    }
    jokes()
  }, [])
  

   

  return (
    <>
    <h1>Hello chai or code</h1>
    <p>JOKES</p>
    {
      api.map((joke, index) => {
        return <p key={index}>{joke}</p>
      })
    }
    </>
  )
}

export default App
