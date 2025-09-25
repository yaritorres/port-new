import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";
import Index from './pages/Index';
import Atelier from './pages/projects/bootcamp/Atelier';
import Duguid from "./pages/projects/bootcamp/Duguid";
import CodeAndTell from "./pages/projects/personal/CodeAndTell";
import PortfolioVersionOne from "./pages/projects/personal/PortfolioVersionOne";
import RatwareCorp from "./pages/artwork/graphic-art/RATWARECORP";
import PsychicOps from "./pages/artwork/graphic-art/PsychicOps";
import OrangeLove from "./pages/artwork/graphic-art/OrangeLove";
import TheDreamer from "./pages/artwork/graphic-art/TheDreamer";
import ChristmasParty from "./pages/artwork/graphic-art/ChristmasParty";
import PageTransition from "./components/PageTransition";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Index /> }/>
        <Route path="/atelier" element={ <Atelier /> }/>
        <Route path="/duguid" element={ <Duguid /> }/>
        <Route path="/codeAndTell" element={ <CodeAndTell /> }/>
        <Route path="/portfolio-v1" element={ <PortfolioVersionOne /> }/>
        <Route path="/RATWARE_CORP" element={ <RatwareCorp /> }/>
        <Route path="/PSYCHIC_OPS" element={ <PsychicOps /> }/>
        <Route path="/ORANGE_LOVE" element={ <OrangeLove /> }/>
        <Route path="/THE_DREAMER" element={ <TheDreamer /> }/>
        <Route path="/CHRISTMAS_PARTY" element={ <ChristmasParty /> }/>
        <Route path="/transition" element={ <PageTransition /> }/>
      </Routes>
    </Router>
  );
}

export default App;
