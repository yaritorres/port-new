import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router";
import Index from './pages/Index';
import Atelier from './pages/projects/bootcamp/Atelier';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Index /> }/>
        <Route path="/atelier" element={ <Atelier /> }/>
      </Routes>
    </Router>
  );
}

export default App;
