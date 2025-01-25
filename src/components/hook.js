import React,{useState} from 'react'
import '../App.css';
export default function Hook() {
    const [color,setcolor] = useState('blue')
    const [increment,setincrement] = useState(0)
    const helllo=()=>{
          return setincrement(increment+1);
    }
  return (
    
   <> <div>
      <h1>How to adjust different colours is {color} in a button</h1>
      <button className='btn1' onClick={()=>setcolor('red')}>blue BUTTON</button>
      <button className='btn1' onClick={()=>setcolor('green')}>green BUTTON</button>
      <button className='btn1' onClick={()=>setcolor('pink')}>pink BUTTON</button>
      <button className='btn1' onClick={()=>setcolor('yellow')}>yellow  BUTTON</button>
      <button className='btn1' onClick={helllo}>hello  BUTTON {increment}</button>
      <h1>hellooooo world   {color}</h1>
    </div>

    </>
  )
}
