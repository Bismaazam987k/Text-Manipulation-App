import React,{useEffect, useState} from 'react'
import '../App.css';
export default function Counter2() {
   const[count, setcount] = useState(0);
   useEffect(() => {
    const timer = setTimeout(() => {
      setcount(prevCount => prevCount + 1);
    }, 1000);
  
    return () => clearTimeout(timer);
  }, [count]);
  return <h1>I've rendered {count} times!</h1>;
}

 
//i dont understand it/////////////////