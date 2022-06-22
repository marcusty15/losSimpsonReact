import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './componentes/Navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Blog from './pages/blog/Blog';
import Contact from './pages/contacto/Contact';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog/>}></Route> 
        <Route path='/contact' element={<Contact/>}></Route> 
      </Routes>
    </Router>
  );
}

export default App;
