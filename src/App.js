
import './App.css';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

//imported pages
import Home from './pages/home';
import Nav from './pages/nav';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
    
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
