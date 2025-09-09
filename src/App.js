import './App.css';
import BenefitsSection from './components/BenefitsSection';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Slider />
        <FeatureCard />
        <BenefitsSection />
        <Footer />
      </>
    </div>
  );
}

export default App;
