import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../public/components/resources/loader/loader";
import Projects from "../public/components/projects/project";
import Profile from "../public/components/profile/profile";
import Inicio from "../public/components/Hero/inicio";
import ProjectDetail from "../public/components/projects/prjectDetail";



function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // tiempo de la animación (800ms)

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
     
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        {/* más rutas si querés */}
      </Routes>
    
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;