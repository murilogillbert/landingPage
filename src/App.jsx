import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import Carousel from './Components/Carousel/Carousel';
import ContactSection from './Components/ContactSection/ContactSection';
import './App.css';

const images = ["src/assets/bala_de_coco_tradicional.jpg",
                "src/assets/bala_de_coco_morango.jpg",
                "src/assets/bala_de_coco_chocolate.jpg",
                "src/assets/bala_de_coco_sortidos.jpg",
                "src/assets/bala_de_coco_tradicional.jpg",
                "src/assets/bala_de_coco_morango.jpg",
                "src/assets/bala_de_coco_chocolate.jpg",
                "src/assets/bala_de_coco_sortidos.jpg"]

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
      <Carousel images={images}/>
      <ContactSection />
    </div>
  );
}

export default App;
