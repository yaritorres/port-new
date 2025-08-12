import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router";
import Index from './pages/Index';
import Atelier from './pages/projects/bootcamp/Atelier';
import Duguid from "./pages/projects/bootcamp/Duguid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Index /> }/>
        <Route path="/atelier" element={ <Atelier /> }/>
        <Route path="/duguid" element={ <Duguid /> }/>
      </Routes>
    </Router>
  );
}

export default App;
