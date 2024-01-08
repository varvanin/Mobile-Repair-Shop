import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/logins/Login";
import PwResetInstuction from "./pages/logins/PwResetInstuction";
import ResetPassword from "./pages/logins/ResetPassword";
import Account from "./pages/account/Account";
import Jobs from "./pages/jobs/Jobs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/PwResetInstuction" element={<PwResetInstuction />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </div>
  );
}

export default App;
