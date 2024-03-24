import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Regiser/RegisterPage";
import ResetPassword from "./Pages/resetPassword/ResetPassword";
import ResetPwd from "./Pages/resetPassword/ResetPwd";

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<ResetPassword />} path="/reset" />
        <Route element={<ResetPwd />} path="/reset-pwd" />
      </Routes>
    </div>
  );
}

export default App;
