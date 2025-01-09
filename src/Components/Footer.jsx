import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="App-footer">
          <div className="social">
            <ul>
              < a href="https//facebook.com">
            <img src="facebook.jpg" alt="" /></a>
              < a href="https//linkedin.com">
              <img src="linkedin.jpg" alt="" /></a>
              <a href="https//pinterest.com">
                <img src="pinterest.jpg" alt="" ></img></a>
              </ul>
          </div>
          <nav className="footer-navigation">
            <ul>
              <li>
                <a href="#about">ABOUT US</a>
              
                <a href="#article">ARTICLE</a>
              </li>
                      </ul>
          </nav>
                  <button className="subscribe">SUBSCRIBE</button>  
           
        </footer>
    </div>
  )
}

export default Footer
