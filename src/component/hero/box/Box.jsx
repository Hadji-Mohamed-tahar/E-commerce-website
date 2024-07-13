import React from 'react';
import "./Box.css";

const Box = ({ imgUrl, smallText, largeText, link }) => {
  return (
    <div className='box' style={{backgroundImage: `url(${imgUrl})`}}>
      <div className="content">
        <p className="small-text">{smallText}</p>
        <h2 className="large-text">{largeText}</h2>
        <a href={link} className="box-link">Shop Now</a>
      </div>
    </div>
  );
}

export default Box;
