import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../Components/organisms/navBar/NavBar";
import { Favorites } from "../Components/pages/Favorites";
import { Home } from "../Components/pages/Home";

export const DashboardRoutes = () => {
  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("token");
      window.location.replace("/");
    }, 3600000);
  }, []);
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route
            path="favorites"
            element={
              localStorage.getItem("token") ? (
                <Favorites />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="home"
            element={localStorage.getItem("token") && <Home />}
          />
        </Routes>
      </div>
    </>
  );
};
