import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return(
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards_items">
            <CardItem 
            src="images/img-9.jpg"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            alt='Travel Image'
            label="Adventure"
            path="/services"
            />
            <CardItem 
            src="images/img-2.jpg"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            alt='Travel Image'
            label="Adventure"
            path="/services"
            />
            <CardItem 
            src="images/img-8.jpg"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            alt='Travel Image'
            label="Adventure"
            path="/services"
            />
            <CardItem 
            src="images/img-1.jpg"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            alt='Travel Image'
            label="Adventure"
            path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;