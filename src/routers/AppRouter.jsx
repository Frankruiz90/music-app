import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Favorites } from "../views/Favorites";
import Login from "../views/Login";

export const AppRouter =() => {
  return (
    <BrowserRouter >
      <h1></h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}