import { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="App">
        <section className="section1">
          
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
        <section className="heading">
          <section className="content-heading">
            <h1>DRONOTICZ</h1>
            <div className="subHeading">THE ERA OF DRONES</div>
            <hr className="head-line" />
          </section>
          </section>
          </section>
        <main>
          <section className="content-section">
            <h2>LATEST ARTICLES</h2>
            <hr className="head-line" />
            <div className="cards">
              <div className="card">
                <img src= "card1.jpg" alt="Card 1" />
                <hr className="heading-line" />
                <p>How to automate surveillance drones</p>
              </div>
              <div className="card">
                <img src="card2.jpg" alt="Card 2" />
                <hr className="heading-line" />
                <p>Robotics and Artificial Intelligence</p>
              </div>
              <div className="card">
                <img src="card3.jpg" alt="Card 3" />
                <hr className="heading-line" />
                <p>Improve Lives through Robotic Prosthetics</p>
              </div>
              <div className="card">
                <img src="card4.jpg" alt="Card 4" />
                <hr className="heading-line" />
                <p>Power of Robotics in Agriculture</p>
              </div>
            </div>
          </section>
        </main>
        <section className="about-section">
          
          <img src="./about.jpg" alt="" className="about-image" />
          
          <div className="about-heading">
            <h2>ABOUT US</h2>
            
            <hr className="underline" />
            <div className="about-content">
            <p>
              Welcome to our dronoticz, where innovation and technology
              converge to shape the future. We revolutionize industries and
              improve lives worldwide through our passion for pushing the
              boundaries of what robots can do. With expertise in AI, computer
              vision, mechanical engineering, and automation, we lead the way
              in the robotics revolution. Our brilliant team creates intelligent
              machines that seamlessly integrate into daily life, enhancing
              productivity, safety, and efficiency.Join us on this exciting
              journey as we unlock new frontiers, solve complex challenges, and
              shape a future where intelligent machines work hand-in-hand with
              humans. Discover the power of robotics and be part of the
              revolution.
            </p>
            </div>
            </div>
        </section>
        <section className="subscribe-section">
          <h1>SUBSCRIBE</h1>
          <h2>Sign-up to our newsletter</h2>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email" />
              <button className="submit">SUBMIT</button>
          </form>
        </section>
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
    </>
  );
}

export default App
