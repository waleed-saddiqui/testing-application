import React from 'react';
import './Breadcrum.css';
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = ({item}) => {

  return (
    <div className='breadcrums'>
      HOME <img src={arrow_icon} alt="" />Shop <img src={arrow_icon} alt="" />{item.category}<img src={arrow_icon} alt='' />{item.name}
    </div>
  )
}

export default Breadcrum
