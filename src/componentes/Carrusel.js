import React from 'react'
import img from '../assets/carrousel-3.jpg'

const Carrusel = () => {
  return (
        <>
      <div className="jumbotron">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100 img-fluid" alt="..."/>
          </div>
      </div>
      </div>
        </>
  )
}

export default Carrusel