import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Order On Your Email</h1>
      <p>Subscribed To Our newsletter and Stay updated</p>

      <div>
        <input type='email' placeholder='Your Email id' />
          <button>Subscribe</button>
      </div>

    </div>
  )
}

export default Newsletter
