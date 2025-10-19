import React from 'react';
import  "../styles/PropertyCard.css";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg"

function PropertyCardF() {
  return (
    <>
        <article className='card-container'>
        <figure className='slide-image-container'>
        
          <input type="radio" name="slider" id="img1" defaultChecked />
          <input type="radio" name="slider" id="img2" />
          <input type="radio" name="slider" id="img3" />

          <img src={image1} alt="altimg" />
          <img src={image2} alt="altimg" />
          <img src={image3} alt="altimg" />
          
         <div className='arrow'>
          <label htmlFor="img1">1</label>
          <label htmlFor="img2">2</label>
          <label htmlFor="img3">3</label>
         </div>
        </figure>
        <div className='user-choice-container'>
            <button>type</button>
            <button>location</button>
            <button>color</button>
        </div>
        <div className='details-container'>
          <div className='basic-details-container'>
            <h3>title</h3>
            <p>description</p>
          </div>
          <div className='rating-container'>
            <span>icon</span>
            <span>27</span>
          </div>
        </div>
        <div className='card-foot-container'>
          <div className='features-container'>
            <span>feature1</span>
            <span>feature2</span>
            <span>feature3</span>
          </div>
        <data className='price' value="120">$120</data>
        </div>
      </article>
    </>
  )
}

export default PropertyCardF;