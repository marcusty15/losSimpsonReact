import React from 'react'
import img1 from '../assets/maggie.jpg'
import img2 from '../assets/homer.jpg'
import img3 from '../assets/bart.jpg'
const Card = () => {
  return (
    <>
    <div className="container-fluid" style={{backgroundColor: "rgb(206, 203, 49)"}}>
        <div className="row pt-5 py-5">
          <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
                <img src={img1} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Maggie</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="." className="btn btn-danger">Leer más...</a>
                </div>
              </div>
          </div>
          <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
                <img src={img2} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Homero</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="." className="btn btn-danger">Leer más...</a>
                </div>
              </div>
          </div>
          <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
                <img src={img3} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Bart</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="." className="btn btn-danger">Leer más...</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card