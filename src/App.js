// import logo from './logo.svg';
import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from './components/header';
// import Counter from './components/counter';
// import Hook from './components/hook';
// import Doco from './components/doc-obj';
// import Hello from './components/obj';
// import Counter2 from './components/fun-obj';
import Navbar from './components/Navbar';
//we can also use imrs for import react in states
import Textform from './components/Textform'; 
import About from './components/About';
import Alert from './components/Alert';
// import TodoList from './components/ToDoList';

function App() {
  const [mode , setMode] = useState ('light')
  const [alertMessage, setAlert] = useState('');

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    // Optionally hide the alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
 
         //here alert is as an object
     const    toggleMode =() =>{
           if(mode === 'light'){
              setMode('dark');
              document.body.style.backgroundColor = 'black';
              showAlert('Switched to dark Mode');
           }else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('Switched to light Mode');
        }
      }
  return (
    // ctrl shif i use to go to console directly and f 12
    //by pressing ctrl c is used to check that there is no warning is required
 <>
     {/* <Navbar title = 'TextUtils' about = 'About TextUtils' mode = {mode} toggleMode = {toggleMode}/> */}
     <Alert alert= {alertMessage} /> 
      {/* <Header/>  */}
      {/* < Counter/> */}
      {/* <Hook/>
      <Doco/>
      <Hello/>
      <Counter2/> */}
    
     <div className='container my-10'>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar title = 'TextUtils' about = 'About TextUtils' mode = {mode} toggleMode = {toggleMode}/>} />
      <Route path="/about" element={ <Alert alert= {alertMessage} />}/>
        <Route path="/" element={<Textform heading = 'Enter the text to analyze below'  mode = {mode} />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter> 
    <Textform heading = 'Enter the text to analyze below'  mode = {mode}/> 
        {/* <About/>  */}
       </div>   
       {/* <TodoList /> */}

     </>
  );
}
// ReactDOM.render(<App />, document.getElementById('root'));
export default App;
// first of all intall the power mode second to activate it go to seting click extension go to add setting . jason
// "powermode.enabled": true,activate it 3 to select your choice of mode go to powermode presests amd select nn