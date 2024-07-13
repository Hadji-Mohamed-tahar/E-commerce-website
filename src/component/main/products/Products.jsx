// @ts-nocheck
import React from 'react'
import './Products.css'
import CategoryName from 'component/Subcomponents/categoryName/CategoryName';

import ProductPriceCard1 from "../../../assets/ProductPriceCard (1).png"
import ProductPriceCard2 from "../../../assets/ProductPriceCard (2).png"
import ProductPriceCard3 from "../../../assets/ProductPriceCard (3).png"
import ProductPriceCard4 from "../../../assets/ProductPriceCard (4).png"
import ProductPriceCard5 from "../../../assets/ProductPriceCard (5).png"
import ProductPriceCard6 from "../../../assets/ProductPriceCard (6).png"
import CarouselProducts from 'component/Subcomponents/CarouselProducts/CarouselProducts';
const ProductsData=[
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
const Products = () => {
  return (
    <div className='Products'>
      <div className='category-name'>
        <div className='category-name-content'>
         <CategoryName />
        </div>
      </div>
      <div className='products-items'>
      <CarouselProducts CarouselData={ProductsData} />
      </div>
    </div>
  )
}

export default Products