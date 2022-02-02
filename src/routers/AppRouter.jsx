import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../Components/pages/Login";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter =() => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}