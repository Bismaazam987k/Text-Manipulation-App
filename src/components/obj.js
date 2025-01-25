import { useState } from "react";
import '../App.css';

 export default function Hello() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
    size :  "1932",
    hello: "qwdudjdj"
  });
const updateColor = () => {
setCar(previousState =>{
    return {...previousState, color:"blue"}
});
}

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} {car.year} and size is {car.size}.
      </p>
      <button className="btn" onClick={updateColor}>Click me colour blue</button>
    </>
  )
}