import React, { useState } from 'react'
import Navbar from './Navbar'

export default function About() {
  
  return (
    <>
     <Navbar/>
    <h1 className='container my-5'>About Us</h1>
    <div className="input-group input-group-sm mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
  </div>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>

<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
  </div>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>

<div className="input-group input-group-lg">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
  </div>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
  </div>
  <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
  </div>
</div>

<div className="input-group mb-3">
  <div className="input-group-prepend" id="button-addon3">
    <button className="btn btn-outline-secondary" type="button">Button</button>
    <button className="btn btn-outline-secondary" type="button">Button</button>
  </div>
  <input type="text" className="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3"/>
</div>

<div className="input-group">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4"/>
  <div className="input-group-append" id="button-addon4">
    <button className="btn btn-outline-secondary" type="button">Button</button>
    <button className="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>
<button type="button" className="btn btn-secondary my-4">Enable Dark Mode</button>
    </>
  )
}
