import React from 'react'
import './heroStyle.css'

function Hero(props) {
  return (
    <div className={props.cName}>
      <img src={props.img} alt="Hero" />

      <div className='hero-text'>
        <h1 className="title">{props.title}</h1>
        <p className="text">{props.text}</p>
        <a href={props.url} className={props.Btnclass}>
          {props.Btntext}
        </a>
      </div>
    </div>
  )
}

export default Hero
