import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/logins/Login";
import PwResetInstuction from "./pages/logins/PwResetInstuction";
import ResetPassword from "./pages/logins/ResetPassword";
import Account from "./pages/account/Account";
import Jobs from "./pages/jobs/Jobs";
import Parts from "./pages/mobile-parts-management/Parts";
import Suppliers from "./pages/suppliers/Suppliers";
import SignUp from "./pages/logins/SignUp";
import { useAuth } from "./components/AuthContext";
import NotFound from "./pages/not-found/NotFound";

function App() {
  const { user } = useAuth();

  const ProtectedRoute = ({ element, ...props }) => {
    return user ? element : <Navigate to="/" replace />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/PwResetInstuction" element={<PwResetInstuction />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route
            path="/account"
            element={<ProtectedRoute element={<Account />} />}
          />
          <Route path="/jobs" element={<ProtectedRoute element={<Jobs />} />} />
          <Route
            path="/parts"
            element={<ProtectedRoute element={<Parts />} />}
          />
          <Route
            path="/suppliers"
            element={<ProtectedRoute element={<Suppliers />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
