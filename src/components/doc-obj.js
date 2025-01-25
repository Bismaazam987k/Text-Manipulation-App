import React, { useState } from 'react'
import '../App.css';
export default function Doco() {
    const [car,setcar] = useState('Honda')
    const [model,setmodel] = useState('car')
    const [year,setyear] = useState('2022')
    const [brand, setbrand] = useState(' brand')
  return (
   
    <div>
      <h1>My {car}</h1>
      <p>it is my {car}{model} in {brand} from {year}</p>
    </div>
  )
}
