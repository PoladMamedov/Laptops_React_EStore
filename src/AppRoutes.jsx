import { Routes, Route } from "react-router-dom";
import { Home, Cart, Favorites } from "./pages";

export function AppRoutes() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}
