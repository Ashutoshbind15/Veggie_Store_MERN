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
import Layout from "./components/UI/Layout";
import NotAuthorized from "./components/Utils/NotAuthorized";
import Auth from "./components/Utils/Auth";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="unauthorized" element={<NotAuthorized />} />
          <Route path="products" element={<Products />} />
          <Route path="farms" element={<Farm />} />
          <Route path="auth" element={<Signup />} />
          <Route path="products/:id" element={<ProductDetails />} />

          <Route element={<Auth allowedRoles={[2001]} />}>
            <Route path="/cart" element={<Cart />} />
          </Route>

          <Route element={<Auth allowedRoles={[2002]} />}>
            <Route path="/products/new" element={<ProdForm />} />
            <Route path="/farms/new" element={<FarmForm />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
