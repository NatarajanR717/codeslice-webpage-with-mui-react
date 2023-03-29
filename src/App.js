import './App.css';
import Business from './components/Business/Business';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
// import Workflow from './components/Workflow/Workflow';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Business/>
      {/* <Workflow/> */}
      <Services/>
    </div>
  );
}

export default App;
