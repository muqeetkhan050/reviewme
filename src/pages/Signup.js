
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Form, Input, Button } from "@heroui/react";
// import API from "../api"; // Axios instance with baseURL
// import { domAnimation } from '@heroui/dom-animation';


// export default function Signup() {
//   const navigate = useNavigate();

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//         gap: "16px",
//       }}
//     >
//       <h2>Sign Up</h2>

//       <Form
//         className="w-full max-w-xs flex flex-col gap-4"
//         onSubmit={async (e) => {
//           e.preventDefault();
//           const data = Object.fromEntries(new FormData(e.currentTarget));

//           try {
//             // Signup request
//             await API.post("/auth/signup", data);

//             // Auto-login after signup
//             const res = await API.post("/auth/login", {
//               email: data.email,
//               password: data.password,
//             });

//             // Save token & user in localStorage
//             localStorage.setItem("token", res.data.token);
//             localStorage.setItem("user", JSON.stringify(res.data.user));

//             alert("Signup successful!");
//             navigate("/"); // redirect to MainPage
//           } catch (err) {
//             console.error(err);
//             alert(err.response?.data?.message || "Signup failed");
//           }
//         }}
//       >
//         <Input name="name" isRequired placeholder="Name" label="Name" />
//         <Input name="email" isRequired placeholder="Email" label="Email" />
//         <Input
//           name="password"
//           isRequired
//           placeholder="Password"
//           type="password"
//           label="Password"
//         />

//         <div className="flex gap-2">
//           <Button type="submit" color="primary">
//             Sign Up
//           </Button>
//           <Button type="reset" variant="flat">
//             Reset
//           </Button>
//         </div>
//       </Form>

//       {/* Link back to login */}
//       <p>
//         Already have an account?{" "}
//         <button
//           style={{
//             color: "#1da1f2",
//             cursor: "pointer",
//             background: "none",
//             border: "none",
//             padding: 0,
//           }}
//           onClick={() => navigate("/login")}
//         >
//           Login
//         </button>
//       </p>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/signup", { name, email, password });
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <h2>Signup</h2>

      <form onSubmit={onSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Signup</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
