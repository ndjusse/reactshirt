import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Polos from "./pages/Polos";
import Sweats from "./pages/Sweats";
import Autres from "./pages/Autres";
import Footer from "./components/Footer";
// import { useEffect } from "react";

import Login from "./pages/Login";
import Register from "./pages/Registre";
import ProductDetails from "./pages/Sweats/ProductDetails";





function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/');
  // },[navigate]);// Include navigate in the dependency array
  return (
    <div>
      <Navbar />
      <Routes basename="/reactshirt">
        <Route path="/" element={<Home />} />
        <Route path="/Polos" element={<Polos />} />
        <Route path="/Sweats" element={<Sweats />} />
        <Route path="/Autres" element={<Autres />} />
        {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Registre" element={<Register />} />
        <Route path="/products/:id" element={<ProductDetails />} />
       
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
