import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/logins/Login";
import PwResetInstuction from "./pages/logins/PwResetInstuction";
import ResetPassword from "./pages/logins/ResetPassword";
import Account from "./pages/account/Account";
import Jobs from "./pages/jobs/Jobs";
import Parts from "./pages/mobile-parts-management/Parts";
import Suppliers from "./pages/suppliers/Suppliers";

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
        <Route path="/parts" element={<Parts />} />
        <Route path="/suppliers" element={<Suppliers />} />
      </Routes>
    </div>
  );
}

export default App;
