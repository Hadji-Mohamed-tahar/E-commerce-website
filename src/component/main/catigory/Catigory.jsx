import React from 'react'
import catigory1 from '../../../assets/catigory (1).png'
import catigory2 from '../../../assets/catigory (2).png'
import catigory3 from '../../../assets/catigory (3).png'
import catigory4 from '../../../assets/catigory (4).png'
import catigory5 from '../../../assets/catigory (5).png'
import catigory6 from '../../../assets/catigory (6).png'
import './Catigory.css'
const CatigoryData = [
  {
    title: "Toys",
    image: catigory1,
  },
  {
    title: "Sports",
    image:catigory2 ,
  },
  {
    title: "Gaming",
    image: catigory3,
  },
  {
    title: "Furniture",
    image: catigory4,
  },
  {
    title: "Fashion",
    image:catigory5 ,
  },
  {
    title: "Cameras",
    image: catigory6,
  },
];
const Catigory = () => {
  return (
    <div className="Catigory">
      {CatigoryData.map((Catigory, index) => (
        <div className="Catigory-box" key={index}>
          <div className="Catigory-box-img">
            <img src={Catigory.image} width="100px" height="100px"/>
            </div>
          <div className="Catigory-box-title">
              <h5>
                <a href='#'>{Catigory.title}</a>
              </h5>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Catigory