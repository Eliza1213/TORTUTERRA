
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import MisionesAdmin from "./pages/admin/MisionesAdmin";
import VisionesAdmin from "./pages/admin/VisionesAdmin";
import PreguntasAdmin from "./pages/admin/PreguntasAdmin";
import TortugasAdmin from "./pages/admin/TorugasAdmin";

function App() {
  return (
    <Router>
      <div style={{ paddingTop: "80px" }}> {}
  
  <nav className="nav">
    <ul>
      <li><Link to="/misionesAdmin/listar">Administrar Misión</Link></li>
      <li><Link to="/visionesAdmin/listar">Administrar Visión</Link></li>
      <li><Link to="/PreguntasAdmin/listar">Administrar Preguntas</Link></li>
      <li><Link to="/TortugasAdmin/listar">Administrar Información sobre Tortugas</Link></li>
     
    </ul>
  </nav>
  <Routes>
    <Route path="/preguntasAdmin/*" element={<PreguntasAdmin />} />
    <Route path="/misionesAdmin/*" element={<MisionesAdmin />} />
    <Route path="/visionesAdmin/*" element={<VisionesAdmin />} />
    <Route path="/tortugasAdmin/*" element={<TortugasAdmin />} />
  </Routes>
  <Footer />
</div>

    </Router>
  );
}

export default App;

