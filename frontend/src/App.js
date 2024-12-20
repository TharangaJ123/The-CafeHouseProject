import './App.css';
import Index from './components/Index';
import Footer from './components/Footer';
import Header from './components/Header'
import Reservations from './components/Reservations';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Menu from './components/Menu';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Index/>

        <Routes>
          <Route path="/Reservations" element={<Reservations/>}/>
        </Routes>
        
        <Footer/>
        <Menu/>
      </div>
    </Router>
  );
}

export default App;
