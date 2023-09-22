import { useState } from 'react'
import logo from './images/logo.svg'
import illustation from './images/illustration-devices.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="shape"></div>
      <div className="nav-bar">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="links">
            <a href="#">PRODUCT</a>
            <a href="#">FEATURES</a>
            <a href="#">PRICING</a>
            <a href="#">LOGIN</a>
          </div>
        </nav>
      </div>
      <main>
        <div className="intro">
          <p><span>NEW</span> MONOGRAPH DASHBOARD</p>
          <h1>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
          <p>Project Planning and tracking for agile teams</p>
          <button>SCHEDULE A DEMO</button>
          <p>TO SEE A PREVIEW</p>
        </div>
        <div className="intro-img">
          <img src={illustation} alt="ILLUSTRATION DEVICE" />
        </div>
      </main>
    </>
  )
}

export default App
