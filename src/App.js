import { Route,  Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Polos from "./pages/Polos";
import Sweats from "./pages/Swreats";
import Autres from "./pages/Autres";
import Footer from "./components/Footer";
import Adultes from "./pages/Autres/PageAutres/Adultes";
import Enfants from "./pages/Autres/PageAutres/Enfants";




function App() {
  return (

    <div>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/Polos" element={<Polos/>} />
        <Route path="/Sweats" element={<Sweats/>} />
        <Route path="/Autres" element={<Autres />} />
        <Route path="/Adultes" element={<Adultes />} />
        <Route path="/Enfants" element={<Enfants />} />
      </Routes>
      <Footer />
      </div>

      );
}

      export default App;
