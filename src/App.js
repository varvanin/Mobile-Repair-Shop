import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/logins/Login";
import PwResetInstuction from "./pages/logins/PwResetInstuction";
import ResetPassword from "./pages/logins/ResetPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/PwResetInstuction" element={<PwResetInstuction />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
