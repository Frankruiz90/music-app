import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "../Components/pages/Login";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    let token = localStorage.getItem("token");
    const hash = window.location.hash;
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/home" /> : <Login />} />
        <Route path="/*" element={token ? <DashboardRoutes /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};
