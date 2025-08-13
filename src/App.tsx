import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router";
import Index from './pages/Index';
import Atelier from './pages/projects/bootcamp/Atelier';
import Duguid from "./pages/projects/bootcamp/Duguid";
import CodeAndTell from "./pages/projects/personal/CodeAndTell";
import PortfolioVersionOne from "./pages/projects/personal/PortfolioVersionOne";
import RatwareCorp from "./pages/artwork/graphic art/RatwareCorp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Index /> }/>
        <Route path="/atelier" element={ <Atelier /> }/>
        <Route path="/duguid" element={ <Duguid /> }/>
        <Route path="/codeAndTell" element={ <CodeAndTell /> }/>
        <Route path="/portfolio-v1" element={ <PortfolioVersionOne /> }/>
        <Route path="/RATWARE-CORP" element={ <RatwareCorp /> }/>
      </Routes>
    </Router>
  );
}

export default App;
