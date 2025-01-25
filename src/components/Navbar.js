import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
//imppct used for it
export default function Navbar(Props) {
  return (
    //when we want href write js inside the string then we use backticks which is form by under the esc
    <>
    {/* ctrl f is very usefullllllllllll for checking and replace for  aroows and ac */}
    {/* in href we replace the sharp by slash and classname by className and in script tag dont use integrity  */}
    {/* when we use slash than we are going href the same page where we a */}
    <nav className={`navbar navbar-expand-lg navbar-${Props.mode} `}>
  <a className="navbar-brand" href="/">{Props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-a mx-3" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-a mx-3" href="#">{Props.about}</a>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0 rounded-lg">
     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div className={`custom-control custom-switch mx-3 ${Props.mode === 'light'?'light':'dark'}`}>
  <input type="checkbox" className="custom-control-input" onClick={Props.toggleMode} id="customSwitch1"/>
  <label className="custom-control-label" htmlFor="customSwitch1"></label>
</div>
  </div>
</nav> 
    
    </>
  )
}
//pts  short form of prop type string
Navbar.propTypes = {
  title:PropTypes.string,
  about:PropTypes.string
}
// Navbar.defaultProps = {
//    title : 'TextUtilssdd',
//     about : 'About TextUtilsswswds'
// }
// // first of all i am going href app.js and then make a state in the name of mode
//  and set mode and i aalso set usestate in light mode after this i am making an if else condition with the name of 
//  tolgglemode  then i am seting mode href {mode} because i want href snd it in the the components as a props
//  and then i am writing the function name inside the curly braces and also snd it as a prop inside the component 
//  first of all i am setting the toglemode in the navbar i am taking a custom buttion from bootstrap component and 
//  i pass the mode as a prop with the ternary operator we cxan write js inside the string by using ```` and thd
//  dolar sign and then i am going href the other component and i am also setitng the other ingredient as same method 
//  of passing prop as a mode in ternary operator and also sety color and bg insite the doubble curly brasses 