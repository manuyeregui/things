import { Routes, Route, useLocation } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';
import CardsCarousel from './components/CardsCarousel/CardsCarousel';
import Home from "./components/Home";
import StepsPanel from "./components/Recipe/StepsPanel";

function App() {

  const location = useLocation();

  const links = [
    {
      title: 'Steps Recipe',
      link: 'steps-panel',
      description: 'Recipe panel that animates when the user goes to the next or previous step.',
      libraries: ['framer motion']
    },
    {
      title: 'Calculator',
      link: 'calculator',
      description: 'Simple calculator with a friendy UI. The numbers animate when the user inputs a number or does a calculation, leaving the screen or adapting to their new position in the layout.',
      libraries: ['framer motion']
    },
    {
      title: 'Carousel',
      link: 'cards-carousel',
      description: 'Carousel whit capital cities. They all have a picture and a brief tagline and animate with parallax and scale effects when switching between them.',
      libraries: ['framer motion']
    }
    
  ]

  return (
    <div className="min-h-screen">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home links={links}/>}/>
        <Route path='steps-panel' element={<StepsPanel/>}/>
        <Route path='calculator' element={<Calculator/>}/>
        <Route path='cards-carousel' element={<CardsCarousel/>}/>
      </Routes>
    </div>
  );
}

export default App;
