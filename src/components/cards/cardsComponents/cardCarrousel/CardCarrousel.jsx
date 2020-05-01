import React, {useRef, useState} from 'react'
import Slider from "react-slick";

import { Button } from 'antd';
import Carrousel from '../../../carrousel/Carrousel'
import { white } from 'ansi-colors';

function CardCarrousel(props) {
  const refSlider = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
      style={{
        background: 'red',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        with: "100%"
      }}
      >
        <ul style={{ 
          position: "absolute",
          marginTop: '-65px', 
          textAlign: 'center',
          width: '100%'
          }}> {dots} </ul>
      </div>
    ),

  };
  const next = () => {
    refSlider.current.slickNext() 
  }
  const previus = () => {
    refSlider.current.slickPrev()
  }
  return (
    <div  className="card-carrousel" >
      <Slider 
      {...settings} 
      ref={refSlider}
      className="custom-slider">
        <div className="sliders-items">
          <img src="https://a0.muscache.com/im/pictures/0a251ed7-9522-4907-8206-727d827bd94f.jpg?im_w=720" alt="" srcSet=""/>
        </div>
        <div className="sliders-items">
          <img src="https://a0.muscache.com/im/pictures/0a251ed7-9522-4907-8206-727d827bd94f.jpg?im_w=720" alt="" srcSet=""/>
        </div>
        <div className="sliders-items">
          <img src="https://a0.muscache.com/im/pictures/0a251ed7-9522-4907-8206-727d827bd94f.jpg?im_w=720" alt="" srcSet=""/>
        </div>
        <div className="sliders-items">
          <img src="https://a0.muscache.com/im/pictures/0a251ed7-9522-4907-8206-727d827bd94f.jpg?im_w=720" alt="" srcSet=""/>
        </div>
        <div className="sliders-items">
          <img src="https://a0.muscache.com/im/pictures/0a251ed7-9522-4907-8206-727d827bd94f.jpg?im_w=720" alt="" srcSet=""/>
        </div>
        <div className="sliders-items">
          <img src="https://a0.muscache.com/im/pictures/0a251ed7-9522-4907-8206-727d827bd94f.jpg?im_w=720" alt="" srcSet=""/>
        </div>
      </Slider>
      <div className="actions_carrousel" > 
        <div className="like" >

        </div>

        <div className="prev_and_next" >
          <Button type="dashed" shape="circle" onClick={ () => next() } >Dashed</Button>
          <Button type="dashed" shape="circle" onClick={ () => previus() } >Dashed</Button>
        </div>
      </div>

    </div>
  )
}

export default CardCarrousel
