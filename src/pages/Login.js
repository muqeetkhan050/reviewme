// // // // import React from "react";
// // // // import {Form, Input, Button} from "@heroui/react";

// // // // export default function Login() {
// // // //   const [action, setAction] = React.useState(null);

// // // //   return (
// // // //     <Form
// // // //       className="w-full max-w-xs flex flex-col gap-4"
// // // //       onReset={() => setAction("reset")}
// // // //       onSubmit={(e) => {
// // // //         e.preventDefault();
// // // //         let data = Object.fromEntries(new FormData(e.currentTarget));

// // // //         setAction(`submit ${JSON.stringify(data)}`);
// // // //       }}
// // // //     >
// // // //       <Input
// // // //         isRequired
// // // //         errorMessage="Please enter a valid username"
// // // //         label="Username"
// // // //         labelPlacement="outside"
// // // //         name="username"
// // // //         placeholder="Enter your username"
// // // //         type="text"
// // // //       />

// // // //       <Input
// // // //         isRequired
// // // //         errorMessage="Please enter a valid email"
// // // //         label="Email"
// // // //         labelPlacement="outside"
// // // //         name="email"
// // // //         placeholder="Enter your email"
// // // //         type="email"
// // // //       />
// // // //       <div className="flex gap-2">
// // // //         <Button color="primary" type="submit">
// // // //           Submit
// // // //         </Button>
// // // //         <Button type="reset" variant="flat">
// // // //           Reset
// // // //         </Button>
// // // //       </div>
// // // //       {action && (
// // // //         <div className="text-small text-default-500">
// // // //           Action: <code>{action}</code>
// // // //         </div>
// // // //       )}
// // // //     </Form>
// // // //   );
// // // // }



// // // import React from "react";
// // // import { Form, Input, Button } from "@heroui/react";
// // // import API from "../api";
// // // import { useNavigate } from "react-router-dom";

// // // export default function Login() {
// // //   const navigate = useNavigate();

// // //   return (
// // //     <Form
// // //       className="w-full max-w-xs flex flex-col gap-4"
// // //       onSubmit={async (e) => {
// // //         e.preventDefault();
// // //         let data = Object.fromEntries(new FormData(e.currentTarget));

// // //         try {
// // //           const res = await API.post("/auth/login", data);
// // //           localStorage.setItem("token", res.data.token);
// // //           localStorage.setItem("user", JSON.stringify(res.data.user));
// // //           alert("Login successful");
// // //           navigate("/dashboard");
// // //         } catch (err) {
// // //           alert(err.response?.data?.message || "Login failed");
// // //         }
// // //       }}
// // //     >
// // //       <Input
// // //         isRequired
// // //         label="Email"
// // //         labelPlacement="outside"
// // //         name="email"
// // //         placeholder="Enter your email"
// // //         type="email"
// // //       />
// // //       <Input
// // //         isRequired
// // //         label="Password"
// // //         labelPlacement="outside"
// // //         name="password"
// // //         placeholder="Enter your password"
// // //         type="password"
// // //       />
// // //       <div className="flex gap-2">
// // //         <Button color="primary" type="submit">Login</Button>
// // //         <Button type="reset" variant="flat">Reset</Button>
// // //       </div>
// // //     </Form>
// // //   );
// // // }
// // import React from "react";
// // import { Form, Input, Button } from "@heroui/react";
// // import API from "../api";
// // import { useNavigate } from "react-router-dom";

// // export default function Login() {
// //   const navigate = useNavigate();

// //   return (
// //     <Form
// //       className="w-full max-w-xs flex flex-col gap-4"
// //       onSubmit={async (e) => {
// //         e.preventDefault();
// //         const data = Object.fromEntries(new FormData(e.currentTarget));
// //         try {
// //           const res = await API.post("/auth/login", data);
// //           localStorage.setItem("token", res.data.token);
// //           localStorage.setItem("user", JSON.stringify(res.data.user));
// //           alert("Login successful");
// //           navigate("/dashboard");
// //         } catch (err) {
// //           alert(err.response?.data?.message || "Login failed");
// //         }
// //       }}
// //     >
// //       <Input name="email" isRequired placeholder="Enter your email" label="Email" />
// //       <Input name="password" isRequired placeholder="Enter your password" type="password" label="Password" />
// //       <div className="flex gap-2">
// //         <Button type="submit" color="primary">Login</Button>
// //         <Button type="reset" variant="flat">Reset</Button>
// //       </div>
// //     </Form>
// //   );
// // }

// import React from "react";
// import { Form, Input, Button } from "@heroui/react";
// import API from "../api";

// export default function Login({ onLogin }) {
//   return (
//     <Form
//       className="w-full max-w-xs flex flex-col gap-4"
//       onSubmit={async (e) => {
//         e.preventDefault();
//         const data = Object.fromEntries(new FormData(e.currentTarget));
//         try {
//           const res = await API.post("/auth/login", data);
//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("user", JSON.stringify(res.data.user));
//           if (onLogin) onLogin(res.data.user);
//           alert("Login successful");
//         } catch (err) {
//           alert(err.response?.data?.message || "Login failed");
//         }
//       }}
//     >
//       <Input name="email" isRequired placeholder="Enter your email" label="Email" />
//       <Input name="password" isRequired type="password" placeholder="Enter your password" label="Password" />
//       <div className="flex gap-2">
//         <Button type="submit" color="primary">Login</Button>
//         <Button type="reset" variant="flat">Reset</Button>
//       </div>
//     </Form>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "@heroui/react";
import API from "../api";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        try {
          const res = await API.post("/auth/login", data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          alert("Login successful");
          navigate("/"); // go to MainPage
        } catch (err) {
          alert(err.response?.data?.message || "Login failed");
        }
      }}
    >
      <Input name="email" isRequired placeholder="Email" label="Email" />
      <Input name="password" isRequired placeholder="Password" type="password" label="Password" />
      <div className="flex gap-2">
        <Button type="submit" color="primary">Login</Button>
        <Button type="reset" variant="flat">Reset</Button>
      </div>
    </Form>
  );
}
