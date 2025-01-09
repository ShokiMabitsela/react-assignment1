import React from 'react'

const LatestArticle = () => {
  return (
      <div>
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
    </div>
  )
}

export default LatestArticle
