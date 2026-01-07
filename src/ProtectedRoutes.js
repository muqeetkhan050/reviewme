// import React from "react";
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoutes({ children }) {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// }

// ProtectedRoutes.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Convert to boolean
    setIsChecking(false);
  }, []);

  // Show loading while checking
  if (isChecking) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh" 
      }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  // Redirect to login if no token
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Show protected content if authenticated
  return children;
}