import { Route,  Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Polos from "./pages/Polos";
import Sweats from "./pages/Swreats";
import Autres from "./pages/Autres";
import Footer from "./components/Footer";
import { useEffect } from "react";
import ProductDetails from "./pages/Polos/PagePolos/ProductDetails";




function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  },[]);
  return (

    <div>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/Polos" element={<Polos/>} />
        <Route path="/Sweats" element={<Sweats/>} />
        <Route path="/Autres" element={<Autres />} />
        <Route path="/products/:id" component={ProductDetails} /> 
      </Routes>
      <Footer />
      </div>

      );
}

      export default App;
