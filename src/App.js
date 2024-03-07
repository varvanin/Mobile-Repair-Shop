import React, { useEffect, useState } from "react";
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
import { supabase } from "./config/supabaseClient";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        setUser(null);
      }
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser ?? null);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  // Function to render the protected route or redirect to login
  const renderProtectedRoute = (element) => {
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
          <Route path="/home" element={renderProtectedRoute(<Home />)} />
          <Route path="/account" element={renderProtectedRoute(<Account />)} />
          <Route path="/jobs" element={renderProtectedRoute(<Jobs />)} />
          <Route path="/parts" element={renderProtectedRoute(<Parts />)} />
          <Route
            path="/suppliers"
            element={renderProtectedRoute(<Suppliers />)}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
