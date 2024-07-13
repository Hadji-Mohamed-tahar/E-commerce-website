import ProductPriceCard from 'component/Subcomponents/ProductPriceCard/ProductPriceCard'
import React from 'react'
import "./DealsOfDay.css";
import ProductPriceCard1 from "../../../assets/ProductPriceCard (1).png"
import ProductPriceCard2 from "../../../assets/ProductPriceCard (2).png"
import ProductPriceCard3 from "../../../assets/ProductPriceCard (3).png"
import ProductPriceCard4 from "../../../assets/ProductPriceCard (4).png"
import ProductPriceCard5 from "../../../assets/ProductPriceCard (5).png"
import ProductPriceCard6 from "../../../assets/ProductPriceCard (6).png"
import CarouselProducts from 'component/Subcomponents/CarouselProducts/CarouselProducts';
const DealsOfDayData=[
  {
    title:"Yellow casual sweater",
    price:"$97",
    rating:"1",
    img:ProductPriceCard1
  },
  {
    title:"Yellow casual sweater",
    price:"$97",
    rating:"1",
    img:ProductPriceCard2
  },
  {
    title:"Yellow casual sweater",
    price:"$97",
    rating:"1",
    img:ProductPriceCard3
  },
  {
    title:"Yellow casual sweater",
    price:"$97",
    rating:"1",
    img:ProductPriceCard4
  },
  {
    title:"Yellow casual sweater",
    price:"$97",
    rating:"1",
    img:ProductPriceCard5
  },
  {
    title:"Yellow casual sweater",
    price:"$97",
    rating:"1",
    img:ProductPriceCard6
  },
]

const DealsOfDay = () => {
  return (
    <div className='DealsOfDay'>
      <div className='DealsOfDay-title'>
        <h2>Deals Of The Day</h2>
        <a href='#'>More Products</a>
      </div>
      <CarouselProducts CarouselData={DealsOfDayData}/>
    </div>
  )
}

export default DealsOfDay