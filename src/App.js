import { Routes, Route, useLocation } from "react-router-dom";
import CardFrame from "./components/3DCard/CardFrame";
import Calculator from "./components/Calculator/Calculator";
import CardsCarousel from "./components/CardsCarousel/CardsCarousel";
import Home from "./components/Home";
import StepsPanel from "./components/Recipe/StepsPanel";
import NotesApp from "./components/NotesApp/NotesApp";

function App() {
  const location = useLocation();

  const links = [
    {
      title: "Notes App",
      link: "notes-app",
      component: <NotesApp />,
    },
    {
      title: "3D Card",
      link: "3d-card",
      component: <CardFrame />,
    },
    {
      title: "Carousel",
      link: "cards-carousel",
      component: <CardsCarousel />,
    },
    {
      title: "Calculator",
      link: "calculator",
      component: <Calculator />,
    },
    {
      title: "Steps Recipe",
      link: "steps-panel",
      component: <StepsPanel />,
    },
  ];

  return (
    <div className="min-h-screen">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home links={links} />} />
        {links.map((e) => (
          <Route path={e.link} element={e.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
