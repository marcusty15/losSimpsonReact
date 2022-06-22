import React from "react";
import '../contacto/Contact.css'

const Contact = () => {
  return (
    
    <div className="back" style={{backgroundColor: "rgb(206, 203, 49)"}}>
    <div className=" container form" style={{backgroundColor: "#e3e3e3"}}>
    
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email 
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button type="button" className="btn btn-outline-secondary">Enviar</button>
      </div>
    </div>
    </div>
    
  );
};

export default Contact;
