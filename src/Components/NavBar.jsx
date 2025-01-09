import React from 'react'

const NavBar = () => {
  return (
    <div>
  <header className="App-header">
          <div className="logo">
            <span className="logo-black">D</span>
            <span className="logo-white">Z</span>
          </div>
          <nav className="navigation">
            <ul>
              <li>
                  <a href="#about">ABOUT</a>
              
              </li>
              <li>
                  <a href="#article">ARTICLES</a>
                  
              </li>
            </ul>
            </nav>
            <div className="subscribe-button-holder">
          <button className="subscribe-button">SUBSCRIBE</button>
       </div>
          </header>
    </div>
  )
}

export default NavBar
