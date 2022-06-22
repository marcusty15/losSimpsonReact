import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Blog from './pages/blog/Blog';
import Contact from './pages/contacto/Contact';
import Footer from './componentes/Footer';
import Navbar from './componentes/Navbar';



function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/losSimpsonReact" element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contacto' element={<Contact />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
