import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Protected main page */}
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <MainPage />
          </ProtectedRoutes>
        }
      />

      {/* Redirect any unknown routes to "/" */}
      <Route path="*" element={<ProtectedRoutes><MainPage /></ProtectedRoutes>} />
    </Routes>
  );
}

export default App;
