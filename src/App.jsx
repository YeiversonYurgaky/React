import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import "./App.css";
import Register from "./Pages/Register";
import DashBoard from "./Pages/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
