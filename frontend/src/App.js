import './App.css';
import Index from './components/Index';
import Footer from './components/Footer';
import Header from './components/Header'
import Reservations from './components/Reservations';


function App() {
  return (
    <div className="App">
      <Header/>
      <Index/>
      <Reservations/>
      <Footer/>
    </div>
  );
}

export default App;
