import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProdForm from "./Pages/ProdForm";

import Farm from "./Pages/Farm";

import Signup from "./Pages/Signup";
import NotFound from "./Pages/NotFound";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import FarmForm from "./components/Farm/FarmForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/new" element={<ProdForm />} />
        <Route path="/farms" element={<Farm />} />
        <Route path="/farms/new" element={<FarmForm />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
