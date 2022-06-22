import React from "react";
import "../blog/Blog.css"
import img from "../../assets/brujassimpson.jpg";
import img2 from "../../assets/educSimpson.jpg";

const Blog = () => {
  return (
    <>
    <div className="ep" style={{backgroundColor: "rgb(206, 203, 49)"}}>
    <div className="container " style={{backgroundColor: "white"}}>
      <h2>Episodio "Especial de noche de Brujas VII", Octubre 24,1996</h2>
      <img src={img} alt="brujas" />
      <p>
        En el séptimo episodio Especial de Halloween anual, Bart descubre a su
        gemelo perdido (Hugo), Lisa crea una colonia de pequeños seres similares
        a los humanos y Kang y Kodos se hacen pasar por Bill Clinton y Bob Dole
        para ganar las eleccciones de 1996 de Estados Unidos. Fue escrito por
        Ken Keeler, Dan Greaney y David S.
      </p>
      
       
      <h2>Episodio "Lucha Educativa". Abril 16, 1995</h2>
      <img src={img2} alt="" />
      <p>
        Sinopsis. Luego de un viaje fallido de la escuela, el cual parece haber
        causado la desaparición de Uter, Edna Krabappel convoca una huelga de
        maestros en la Escuela Primaria de Springfield, para protestar en contra
        del poco tiempo que le dedicaba Seymour Skinner a planificar las
        actividades extra escolares.
      </p>
      </div>
      </div>
    </>
  );
};

export default Blog;
