
// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext"; // ← Import useAuth
// // import API from "../api";

// // function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const { login } = useAuth(); // ← Get login from context

// //   const onSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");

// //     try {
// //       const res = await API.post("/auth/login", { email, password });
      
// //       if (res.data.success && res.data.token && res.data.user) {
// //         // 🔥 FIX: Use AuthContext login instead of directly setting localStorage
// //         login(res.data.token, res.data.user);
        
// //         // 🔥 FIX: Use window.location for full page reload
// //         window.location.href = "/";
// //       } else {
// //         setError("Login failed: Invalid response from server");
// //       }
// //     } catch (err) {
// //       setError(err.response?.data?.message || "Invalid credentials");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div style={{ 
// //       maxWidth: 400, 
// //       margin: "100px auto",
// //       padding: "20px",
// //       border: "1px solid #ccc",
// //       borderRadius: "8px"
// //     }}>
// //       <h2>Login to ReviewMe</h2>

// //       {error && (
// //         <div style={{
// //           padding: "10px",
// //           marginBottom: "10px",
// //           background: "#ffebee",
// //           color: "#c62828",
// //           borderRadius: "4px",
// //           fontSize: "14px"
// //         }}>
// //           {error}
// //         </div>
// //       )}

// //       <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //           autoComplete="email"
// //           style={{
// //             padding: "10px",
// //             border: "1px solid #ccc",
// //             borderRadius: "4px"
// //           }}
// //         />

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //           autoComplete="current-password"
// //           style={{
// //             padding: "10px",
// //             border: "1px solid #ccc",
// //             borderRadius: "4px"
// //           }}
// //         />

// //         <button 
// //           type="submit"
// //           disabled={loading}
// //           style={{
// //             padding: "10px",
// //             background: loading ? "#ccc" : "#1da1f2",
// //             color: "#fff",
// //             border: "none",
// //             borderRadius: "4px",
// //             cursor: loading ? "not-allowed" : "pointer",
// //             fontWeight: "bold"
// //           }}
// //         >
// //           {loading ? "Logging in..." : "Login"}
// //         </button>
// //       </form>

// //       <p style={{ textAlign: "center", marginTop: "16px", color: "#666" }}>
// //         Don't have an account? <Link to="/signup" style={{ color: "#1da1f2", textDecoration: "none" }}>Signup</Link>
// //       </p>
// //     </div>
// //   );
// // }

// // export default Login;


// // src/pages/Login.jsx
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import API from "../api";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const { login } = useAuth();

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       console.log("📤 Sending login request...");
//       const res = await API.post("/auth/login", { email, password });
//       console.log("✅ Login response:", res.data);
      
//       // Check if we have the data we need
//       if (res.data.token && res.data.user) {
//         console.log("🔑 Token received, logging in...");
        
//         // Update AuthContext
//         login(res.data.token, res.data.user);
        
//         console.log("✅ Context updated, redirecting...");
        
//         // Redirect to home
//         window.location.href = "/";
//       } else {
//         console.error("❌ Invalid response structure:", res.data);
//         setError("Login failed: Invalid response from server");
//       }
//     } catch (err) {
//       console.error("❌ Login error:", err);
//       console.error("❌ Error response:", err.response?.data);
//       setError(err.response?.data?.message || "Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ 
//       maxWidth: 400, 
//       margin: "100px auto",
//       padding: "20px",
//       border: "1px solid #ccc",
//       borderRadius: "8px"
//     }}>
//       <h2>Login to ReviewMe</h2>

//       {error && (
//         <div style={{
//           padding: "10px",
//           marginBottom: "10px",
//           background: "#ffebee",
//           color: "#c62828",
//           borderRadius: "4px",
//           fontSize: "14px"
//         }}>
//           {error}
//         </div>
//       )}

//       <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           autoComplete="email"
//           style={{
//             padding: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "4px"
//           }}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           autoComplete="current-password"
//           style={{
//             padding: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "4px"
//           }}
//         />

//         <button 
//           type="submit"
//           disabled={loading}
//           style={{
//             padding: "10px",
//             background: loading ? "#ccc" : "#1da1f2",
//             color: "#fff",
//             border: "none",
//             borderRadius: "4px",
//             cursor: loading ? "not-allowed" : "pointer",
//             fontWeight: "bold"
//           }}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>

//       <p style={{ textAlign: "center", marginTop: "16px", color: "#666" }}>
//         Don't have an account? <Link to="/signup" style={{ color: "#1da1f2", textDecoration: "none" }}>Signup</Link>
//       </p>
//     </div>
//   );
// }

// export default Login;


// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("📤 Sending login request...");
      const res = await API.post("/auth/login", { email, password });
      console.log("✅ Login response:", res.data);
      
      if (res.data.token && res.data.user) {
        console.log("🔑 Token received, updating context...");
        
        // Update AuthContext FIRST
        login(res.data.token, res.data.user);
        
        console.log("✅ Context updated");
        
        // Small delay to ensure state updates
        await new Promise(resolve => setTimeout(resolve, 100));
        
        console.log("🚀 Navigating to home...");
        
        // Use navigate instead of window.location
        navigate("/", { replace: true });
      } else {
        console.error("❌ Invalid response:", res.data);
        setError("Login failed: Invalid response from server");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      maxWidth: 400, 
      margin: "100px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px"
    }}>
      <h2>Login to ReviewMe</h2>

      {error && (
        <div style={{
          padding: "10px",
          marginBottom: "10px",
          background: "#ffebee",
          color: "#c62828",
          borderRadius: "4px",
          fontSize: "14px"
        }}>
          {error}
        </div>
      )}

      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        />

        <button 
          type="submit"
          disabled={loading}
          style={{
            padding: "10px",
            background: loading ? "#ccc" : "#1da1f2",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: "bold"
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "16px", color: "#666" }}>
        Don't have an account? <Link to="/signup" style={{ color: "#1da1f2", textDecoration: "none" }}>Signup</Link>
      </p>
    </div>
  );
}

export default Login;