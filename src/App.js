


// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainPage from "./pages/MainPage";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route - redirect based on auth */}
        <Route 
          path="/" 
          element={
            <ProtectedRoutes>
              <MainPage />
            </ProtectedRoutes>
          } 
        />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;