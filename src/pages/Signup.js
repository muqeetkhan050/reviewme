// // // // // import React, { useState } from "react";
// // // // // import "../css/Signup.css";

// // // // // const Signup = () => {
// // // // //   const [formData, setFormData] = useState({
// // // // //     name: "",
// // // // //     email: "",
// // // // //     password: "",
// // // // //   });

// // // // //   const handleChange = (e) => {
// // // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // //   };

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     console.log("Signup Data:", formData);
// // // // //   };

// // // // //   return (
// // // // //     <div className="signup-container">
// // // // //       <div className="signup-card">
// // // // //         <h2>Create Account</h2>
// // // // //         <p>Join us and start your journey 🚀</p>

// // // // //         <form onSubmit={handleSubmit}>
// // // // //           <div className="input-group">
// // // // //             <input
// // // // //               type="text"
// // // // //               name="name"
// // // // //               placeholder="Full Name"
// // // // //               value={formData.name}
// // // // //               onChange={handleChange}
// // // // //               required
// // // // //             />
// // // // //           </div>

// // // // //           <div className="input-group">
// // // // //             <input
// // // // //               type="email"
// // // // //               name="email"
// // // // //               placeholder="Email Address"
// // // // //               value={formData.email}
// // // // //               onChange={handleChange}
// // // // //               required
// // // // //             />
// // // // //           </div>

// // // // //           <div className="input-group">
// // // // //             <input
// // // // //               type="password"
// // // // //               name="password"
// // // // //               placeholder="Password"
// // // // //               value={formData.password}
// // // // //               onChange={handleChange}
// // // // //               required
// // // // //             />
// // // // //           </div>

// // // // //           <button type="submit" className="signup-btn">
// // // // //             Sign Up
// // // // //           </button>
// // // // //         </form>

// // // // //         <span className="login-text">
// // // // //           Already have an account? <a href="/login">Login</a>
// // // // //         </span>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Signup;

// // // // import React from "react";
// // // // import { Form, Input, Button } from "@heroui/react";
// // // // import API from "../api";
// // // // import { useNavigate } from "react-router-dom";

// // // // export default function Signup() {
// // // //   const navigate = useNavigate();

// // // //   return (
// // // //     <Form
// // // //       className="w-full max-w-xs flex flex-col gap-4"
// // // //       onSubmit={async (e) => {
// // // //         e.preventDefault();
// // // //         let data = Object.fromEntries(new FormData(e.currentTarget));

// // // //         try {
// // // //           await API.post("/auth/signup", data);
// // // //           alert("Signup successful");
// // // //           navigate("/login");
// // // //         } catch (err) {
// // // //           alert(err.response?.data?.message || "Signup failed");
// // // //         }
// // // //       }}
// // // //     >
// // // //       <Input
// // // //         isRequired
// // // //         label="Name"
// // // //         labelPlacement="outside"
// // // //         name="name"
// // // //         placeholder="Enter your name"
// // // //         type="text"
// // // //       />
// // // //       <Input
// // // //         isRequired
// // // //         label="Email"
// // // //         labelPlacement="outside"
// // // //         name="email"
// // // //         placeholder="Enter your email"
// // // //         type="email"
// // // //       />
// // // //       <Input
// // // //         isRequired
// // // //         label="Password"
// // // //         labelPlacement="outside"
// // // //         name="password"
// // // //         placeholder="Enter your password"
// // // //         type="password"
// // // //       />
// // // //       <div className="flex gap-2">
// // // //         <Button color="primary" type="submit">Signup</Button>
// // // //         <Button type="reset" variant="flat">Reset</Button>
// // // //       </div>
// // // //     </Form>
// // // //   );
// // // // }
// // // import React from "react";
// // // import { Form, Input, Button } from "@heroui/react";
// // // import API from "../api";
// // // import { useNavigate } from "react-router-dom";

// // // export default function Signup() {
// // //   const navigate = useNavigate();

// // //   return (
// // //     <Form
// // //       className="w-full max-w-xs flex flex-col gap-4"
// // //       onSubmit={async (e) => {
// // //         e.preventDefault();
// // //         const data = Object.fromEntries(new FormData(e.currentTarget));
// // //         try {
// // //           await API.post("/auth/signup", data);
// // //           alert("Signup successful");
// // //           navigate("/login");
// // //         } catch (err) {
// // //           alert(err.response?.data?.message || "Signup failed");
// // //         }
// // //       }}
// // //     >
// // //       <Input name="name" isRequired placeholder="Enter your name" label="Name" />
// // //       <Input name="email" isRequired placeholder="Enter your email" label="Email" />
// // //       <Input name="password" isRequired placeholder="Enter your password" type="password" label="Password" />
// // //       <div className="flex gap-2">
// // //         <Button type="submit" color="primary">Signup</Button>
// // //         <Button type="reset" variant="flat">Reset</Button>
// // //       </div>
// // //     </Form>
// // //   );
// // // }
// // import React from "react";
// // import { Form, Input, Button } from "@heroui/react";
// // import API from "../api";

// // export default function Signup({ onSignup }) {
// //   return (
// //     <Form
// //       className="w-full max-w-xs flex flex-col gap-4"
// //       onSubmit={async (e) => {
// //         e.preventDefault();
// //         const data = Object.fromEntries(new FormData(e.currentTarget));
// //         try {
// //           await API.post("/auth/signup", data);

// //           // Optional: auto-login after signup
// //           const res = await API.post("/auth/login", { email: data.email, password: data.password });
// //           localStorage.setItem("token", res.data.token);
// //           localStorage.setItem("user", JSON.stringify(res.data.user));
// //           if (onSignup) onSignup(res.data.user);

// //           alert("Signup successful");
// //         } catch (err) {
// //           alert(err.response?.data?.message || "Signup failed");
// //         }
// //       }}
// //     >
// //       <Input name="name" isRequired placeholder="Enter your name" label="Name" />
// //       <Input name="email" isRequired placeholder="Enter your email" label="Email" />
// //       <Input name="password" isRequired type="password" placeholder="Enter your password" label="Password" />
// //       <div className="flex gap-2">
// //         <Button type="submit" color="primary">Signup</Button>
// //         <Button type="reset" variant="flat">Reset</Button>
// //       </div>
// //     </Form>
// //   );
// // }

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Form, Input, Button } from "@heroui/react";
// import API from "../api";

// export default function Signup() {
//   const navigate = useNavigate();

//   return (
//     <Form
//       className="w-full max-w-xs flex flex-col gap-4"
//       onSubmit={async (e) => {
//         e.preventDefault();
//         const data = Object.fromEntries(new FormData(e.currentTarget));
//         try {
//           await API.post("/auth/signup", data);
//           // Auto-login after signup
//           const res = await API.post("/auth/login", { email: data.email, password: data.password });
//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("user", JSON.stringify(res.data.user));
//           alert("Signup successful");
//           navigate("/"); // go to MainPage
//         } catch (err) {
//           alert(err.response?.data?.message || "Signup failed");
//         }
//       }}
//     >
//       <Input name="name" isRequired placeholder="Name" label="Name" />
//       <Input name="email" isRequired placeholder="Email" label="Email" />
//       <Input name="password" isRequired placeholder="Password" type="password" label="Password" />
//       <div className="flex gap-2">
//         <Button type="submit" color="primary">Signup</Button>
//         <Button type="reset" variant="flat">Reset</Button>
//       </div>
//     </Form>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "@heroui/react";
import API from "../api"; // Axios instance with baseURL

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "16px",
      }}
    >
      <h2>Sign Up</h2>

      <Form
        className="w-full max-w-xs flex flex-col gap-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.currentTarget));

          try {
            // Signup request
            await API.post("/auth/signup", data);

            // Auto-login after signup
            const res = await API.post("/auth/login", {
              email: data.email,
              password: data.password,
            });

            // Save token & user in localStorage
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            alert("Signup successful!");
            navigate("/"); // redirect to MainPage
          } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Signup failed");
          }
        }}
      >
        <Input name="name" isRequired placeholder="Name" label="Name" />
        <Input name="email" isRequired placeholder="Email" label="Email" />
        <Input
          name="password"
          isRequired
          placeholder="Password"
          type="password"
          label="Password"
        />

        <div className="flex gap-2">
          <Button type="submit" color="primary">
            Sign Up
          </Button>
          <Button type="reset" variant="flat">
            Reset
          </Button>
        </div>
      </Form>

      {/* Link back to login */}
      <p>
        Already have an account?{" "}
        <button
          style={{
            color: "#1da1f2",
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: 0,
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </p>
    </div>
  );
}
