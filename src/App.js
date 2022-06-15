import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './componentes/Card'
import Carrusel from './componentes/Carrusel';
import Footer from './componentes/Footer';
import Navbar from './componentes/Navbar';


function App() {
  return (
    
    <div>
      <Navbar />
      <Carrusel/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
