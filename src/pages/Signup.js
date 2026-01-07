
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import API from "../api";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await API.post("/auth/signup", { name, email, password });
//       navigate("/login");
//     } catch (err) {
//       alert(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "100px auto" }}>
//       <h2>Signup</h2>

//       <form onSubmit={onSubmit}>
//         <input
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

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

//         <button type="submit">Signup</button>
//       </form>

//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// }

// export default Signup;


// Signup.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/auth/signup", { name, email, password });
      
      // After signup, automatically log them in
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/"); // Go to MainPage
      }
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
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
      <h2>Join ReviewMe</h2>

      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        />

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
          {loading ? "Creating account..." : "Signup"}
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "16px" }}>
        Already have an account? <Link to="/login" style={{ color: "#1da1f2" }}>Login</Link>
      </p>
    </div>
  );
}

export default Signup;
