import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import UsersList from "./pages/Users/UsersList";
import ProductsList from "./pages/Products/ProductsList";
import ProductDetails from "./pages/Products/ProductDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
