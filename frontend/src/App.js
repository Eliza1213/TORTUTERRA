import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import MisionesAdmin from "./pages/admin/MisionesAdmin";
import VisionesAdmin from "./pages/admin/VisionesAdmin";
import PreguntasAdmin from "./pages/admin/PreguntasAdmin";
import PoliticasAdmin from "./pages/admin/PoliticasAdmin";
import TerminosAdmin from "./pages/admin/TerminosAdmin";
import ProductosAdmin from "./pages/admin/ProductosAdmin";
import VisionesVisualizar from "./pages/public/VisionesVisualizar";
import MisionesVisualizar from "./pages/public/MisionesVisualizar";
import PreguntasVisualizar from "./pages/public/PreguntasVisualizar";
import Login from "./pages/public/Login";
import Registro from "./pages/public/Registro";

function App() {
  return (
    <Router>
      <div>
        {/* Header fijo */}
        <header className="bg-success text-white text-center py-3 fixed-top">
          <h1>Bienvenido a la Parte Administrativa</h1>
        </header>

        <div className="d-flex" style={{ paddingTop: "80px" }}>
          {/* Barra de navegación */}
          <nav
            className="bg-success text-white p-3 vh-100"
            style={{
              width: "250px",
              borderRight: "2px solid white",
              position: "sticky",
              top: "80px"
            }}
          >
             {/* Paginas de Administrador */}
            <ul className="nav flex-column">
              <li className="nav-item mb-3">
                <Link className="nav-link text-white" to="/misionesAdmin/listar">Administrar Misión</Link>
              </li>
              <li className="nav-item mb-3">
                <Link className="nav-link text-white" to="/visionesAdmin/listar">Administrar Visión</Link>
              </li>
              <li className="nav-item mb-3">
                <Link className="nav-link text-white" to="/PreguntasAdmin/listar">Administrar Preguntas</Link>
              </li>
              <li className="nav-item mb-3">
                <Link className="nav-link text-white" to="/politicasAdmin/listar">Administrar Políticas</Link>
              </li>
              <li className="nav-item mb-3">
                <Link className="nav-link text-white" to="/terminosAdmin/listar">Administrar Términos</Link>
              </li>
              <li className="nav-item mb-3">
                <Link className="nav-link text-white" to="/ProductosAdmin/listar">Administrar Productos</Link>
              </li>

                {/* Paginas de Publicas */}
              <li className="nav-item mb-3">
                <Link className="nav-link text-white" to="/VisionesVisualizar/listar">Ver Visiones</Link>
              </li>
              <li className="nav-item mb-3">
                <Link className="nav-link text-white" to="/MisionesVisualizar/listar">Ver Misiones</Link>
              </li>
              <li className="nav-item mb-3">
                <Link className="nav-link text-white" to="/PreguntasVisualizar/listar">Ver Preguntas</Link>
              </li>
              <li className="nav-item mb-3">
                <Link className="nav-link text-white" to="/Login">Iniciar Sesión</Link>
              </li>
              <li className="nav-item mb-3">
                <Link className="nav-link text-white" to="/Registro">Registrar</Link>
              </li>


            </ul>
          </nav>

          {/* Contenido Administrativo */}
          <main className="flex-grow-1 p-4">
            <Routes>
              <Route path="/preguntasAdmin/*" element={<PreguntasAdmin />} />
              <Route path="/misionesAdmin/*" element={<MisionesAdmin />} />
              <Route path="/visionesAdmin/*" element={<VisionesAdmin />} />
              <Route path="/politicasAdmin/*" element={<PoliticasAdmin />} />
              <Route path="/terminosAdmin/*" element={<TerminosAdmin />} />
              <Route path="/productosAdmin/*" element={<ProductosAdmin />} />

            {/* Contenido Publica */}
              <Route path="/VisionesVisualizar/*" element={<VisionesVisualizar />} />
              <Route path="/MisionesVisualizar/*" element={<MisionesVisualizar />} />
              <Route path="/PreguntasVisualizar/*" element={<PreguntasVisualizar />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Registro" element={<Registro />} />

            </Routes>
          </main>
        </div>

        {/* Footer */}
        <footer className="bg-success text-white text-center py-3">
          <p>Bienvenido a la parte administrativa | Todos los derechos reservados ©</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;