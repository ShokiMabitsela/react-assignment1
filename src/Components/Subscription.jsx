import React from 'react'

const Subscription = () => {
  return (
    <div>
      <section className="subscribe-section">
          <h1>SUBSCRIBE</h1>
          <h2>Sign-up to our newsletter</h2>
          <form className="subscribe-form">
            <input type="email" placeholder="Your email" />
              <button className="submit">SUBMIT</button>
          </form>
        </section>
    </div>
  )
}

export default Subscription
