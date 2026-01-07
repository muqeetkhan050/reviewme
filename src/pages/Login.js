

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import API from "../api";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await API.post("/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       navigate("/");
//     } catch (err) {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "100px auto" }}>
//       <h2>Login</h2>

//       <form onSubmit={onSubmit}>
//         <input
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>

//       <p>
//         Don’t have an account? <Link to="/signup">Signup</Link>
//       </p>
//     </div>
//   );
// }

// export default Login;


// Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/auth/login", { email, password });
      
      // Save both token AND user info
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      navigate("/"); // Go to MainPage
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
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

      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
            background: "#1da1f2",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.6 : 1
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "16px" }}>
        Don't have an account? <Link to="/signup" style={{ color: "#1da1f2" }}>Signup</Link>
      </p>
    </div>
  );
}

export default Login;