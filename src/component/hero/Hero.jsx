// import React, { useRef, useState } from "react";
// import "./Hero.css";
// import ImgSlider from "component/imgSlider/ImgSlider";
// import slide3 from "../../assets/banare1.jpg";
// import slide2 from "../../assets/banare2.jpg";
// import slide1 from "../../assets/banare3.jpg";
// import box1 from "../../assets/box1.jpg";
// import box2 from "../../assets/box2.jpg";
// import Box from "./box/Box";

// const Hero = () => {
//   const btnSlider = useRef([null, null, null]);
//   const [currentSlide, setCuurentSlide] = useState(0);
//   const sliders = [slide1, slide2, slide3];
//   const Boxes = [
//     {
//       box1: {
//         imgUrl: box1,
//         smallText: "NEW ARRIVALS",
//         largeText: "SUMMER SALE 20% OFF",
//         link: "#",
//       },
//       box2: {
//         imgUrl: box2,
//         smallText: "GAMING 4K",
//         largeText: "DESKTOPS & LAPTOPS",
//         link: "#",
//       },
//     },
//   ];
//   const changeActive = (i) => {
//     btnSlider.current.forEach((btn, index) => {
//       btn.className = index === i ? "btn active" : "btn";
//     });
//     setCuurentSlide(i);
//   };
//   return (
//     <div className="Hero container">
//       <div className="Main-hero">
//         <ImgSlider imageUrl={sliders[currentSlide]} />
//         <div className="btns-slider">
//           {Array(3)
//             .fill()
//             .map((_, index) => (
//               <span
//                 key={index}
//                 ref={(el) => (btnSlider.current[index] = el)}
//                 className={index === 0 ? "btn active" : "btn"}
//                 onClick={() => changeActive(index)}
//               ></span>
//             ))}
//         </div>
//       </div>
//       <div className="secondary-hero">
//         {Boxes.map((box, index) => (
//           <Box
//             imgUrl={box.imgUrl}
//             smallText={box.smallText}
//             largeText={box.largeText}
//             link={box.link}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useRef, useState } from 'react';
import "./Hero.css";
import ImgSlider from 'component/imgSlider/ImgSlider';
import slide1 from '../../assets/banare1.jpg';
import slide2 from '../../assets/banare2.jpg';
import slide3 from '../../assets/banare3.jpg';
import box1 from '../../assets/box1.jpg';
import box2 from '../../assets/box2.jpg';
import Box from './box/Box';

const Hero = () => {
  const btnSlider = useRef([null,null,null]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliders = [slide1, slide2, slide3];
  const Boxes = [
    {
      imgUrl: box1,
      smallText: "NEW ARRIVALS",
      largeText: "SUMMER SALE 20% OFF",
      link: "#"
    },
    {
      imgUrl: box2,
      smallText: "GAMING 4K",
      largeText: "DESKTOPS & LAPTOPS",
      link: "#"
    }
  ];

  const changeActive = (i) => {
    btnSlider.current.forEach((btn, index) => {
      btn.className = index === i ? "btn active" : "btn";
    });
    setCurrentSlide(i);
  };

  return (
    <div className='Hero container'>
      <div className='Main-hero'>
        <ImgSlider imageUrl={sliders[currentSlide]} />
        <div className='btns-slider'>
          {Array(3).fill().map((_, index) => (
            <span
              key={index}
              ref={(el) => btnSlider.current[index] = el}
              className={index === 0 ? "btn active" : "btn"}
              onClick={() => changeActive(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className='secondary-hero'>
        {Boxes.map((box, index) => (
          <Box
            key={index}
            imgUrl={box.imgUrl}
            smallText={box.smallText}
            largeText={box.largeText}
            link={box.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
