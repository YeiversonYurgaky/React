import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import "./App.css";
import NavDashboard from "./Components/NavDashboard";
import Register from "./Pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<NavDashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
