import './App.css';
import Business from './components/Business/Business';
import Footer from './components/Footer/Footer';
import Footer2 from './components/Footer2/Footer2';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Workflow from './components/Workflow/Workflow';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Business/>
      <Workflow/>
      <Services/>
      <Footer/>
      <Footer2/>
    </div>
  );
}

export default App;
