import { Routes, Route } from "react-router-dom";
import NavBar from "../Components/organisms/navBar/NavBar";
import Artist from "../Components/pages/Artist";
import { Favorites } from "../Components/pages/Favorites";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="favorites" element={<Favorites />} />
          <Route path="artist" element={<Artist />} />
        </Routes>
      </div>
    </>
  );
};
