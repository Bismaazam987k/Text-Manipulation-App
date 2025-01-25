import React,{useState} from "react";
import '../App.css';

const Counter = () => {
    const [count,setcount] = useState(0);
    // const increment = () => setcount(count + 1);
    const increment = () =>{
        setcount(count + 1);
    }
    const decrement = () => setcount(count - 1);
    return(
        <div>
            <h1>How To Start A Counter   {count}</h1>
            <button className="btn" onClick={increment}>increment</button>
            <button className="btn" onClick={decrement}>decrement</button>
        </div>
    )
};
 
export default Counter;