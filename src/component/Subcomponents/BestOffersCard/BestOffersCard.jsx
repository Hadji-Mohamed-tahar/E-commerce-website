import React from 'react'
import './BestOffersCard.css'
const BestOffersCard = ({BestOffersData}) => {
  return (
    <div className='BestOffersCard'>
      <div className='BestOffersCard-text'>
        <h5>{BestOffersData.title}</h5>
        <h6>{BestOffersData.text}</h6>
        <a href='#'>SHOP NOW</a>
      </div>
      <div className='BestOffersCard-img'>
      <img src={BestOffersData.img} />
      </div>
    </div>
  )
}

export default BestOffersCard