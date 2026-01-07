// // src/context/AuthContext.jsx
// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check if user is logged in on mount
//     const token = localStorage.getItem("token");
//     const storedUser = localStorage.getItem("user");
    
//     if (token && storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
    
//     setLoading(false);
//   }, []);

//   const login = (token, userData) => {
//     localStorage.setItem("token", token);
//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within AuthProvider");
//   }
//   return context;
// }


// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for user on mount
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = () => {
    console.log("🔍 AuthContext: Checking for user...");
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    
    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log("✅ AuthContext: Found user:", parsedUser);
        setUser(parsedUser);
      } catch (err) {
        console.error("❌ AuthContext: Failed to parse user:", err);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    } else {
      console.log("❌ AuthContext: No user found");
    }
    
    setLoading(false);
  };

  const login = (token, userData) => {
    console.log("🔐 AuthContext: Logging in user:", userData);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    console.log("✅ AuthContext: User state updated");
  };

  const logout = () => {
    console.log("🚪 AuthContext: Logging out...");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    console.log("✅ AuthContext: Logout complete");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, checkUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}