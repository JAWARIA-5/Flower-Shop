import React from 'react'
import "./content.css";
import Mphool from './moodyphool.jpg';
import Sphool from './sidephool.jpg';

const Main = () => {
  return (
    <>
     <div className="main">
      <div className="grid-container">
        <div className="grid-item">
          <div className="number">01</div>
          <div className="title">Order Online</div>
          <div className="description">We offer online shop and delivery services all over Pakistan.</div>
        </div>
        <div className="grid-item">
          <div className="number">02</div>
          <div className="title">Free Shipping</div>
          <div className="description">We offer free shipping on your first ever order. So go ahead buy yourself or your loved one some flowers!</div>
        </div>
        <div className="grid-item">
          <div className="number">03</div>
          <div className="title">More Freshness</div>
          <div className="description">Sourcing our flowers from the best gardens everyday and preserving them, so you recieve quality everytime.</div>
        </div>
        <div className="grid-item">
          <div className="number">04</div>
          <div className="title">Safe Payment</div>
          <div className="description">Our payment system is attributed with Jazzcash and we have had no single transaction failure and happy customers only.</div>
        </div>
      </div>
    </div>
    <div class="container">
  <div class="image-wrapper">
    <div class="image-crop">
      <img src={Mphool} alt="1"/>
    </div>
    <div class="image-crop">
    <img src={Sphool} alt="1"/>
    </div>
  </div>
  <div class="text">
    <div className="abtflo">  
      <p>About Bloomila</p>
    </div>
    <div className="blossom">
     <p>Blossoming Your Special Moments with Nature's Finest</p>
    </div>
    <div className="blossomdesc">
      <p>Welcome to Florist, where floral artistry meets passion for nature's beauty. Our story is rooted in a deep love for flowers and a commitment to creating unforgettable moments for our customers.</p>
    </div>
    <button type="button" class="btn btn-secondary btn-lg">Read More</button>
  </div>
</div>

    </>
  );
};

export default Main;
