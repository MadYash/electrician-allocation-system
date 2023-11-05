import './stylesheets/style.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import Site from './Components/Site';
import EditModal from './Components/EditModal';
import Electrician from './Components/Electrician';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/site' element={<Site/>}/>
        <Route path='/edit-site' element={<EditModal/>}/>
        <Route path='/assign-electrician' element={<Electrician/>}/>
        <Route path='*' element={<NotFound/>}/> 
      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
