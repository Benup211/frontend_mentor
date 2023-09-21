import { useState } from 'react'
import hero from './images/illustration-hero.svg'
import music from './images/icon-music.svg'
import './App.css'

function App() {
  return (
    <>
      <main>
        <div className="card">
          <img src={hero} alt="Hero" />
          <div className="summary">
            <h1>Order Summary</h1>
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any
              device anywhere you like!
            </p>
            <div className="plan">
              <div className="selected-plan">
                <span><img src={music} alt="music-logo" /></span>
                <div className="plan-price">
                  <span className='annual-plan'>Annual Plan</span>
                  <span className='price'>$59.99/year</span>
                </div>
                <div></div>
                <a href="#" className='change-button'>Change</a>
              </div>
            </div>
            <button>Proceed to Payment</button>
            <a href='#'>Cancel Order</a>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
