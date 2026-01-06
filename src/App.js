
// import MainPage from "./pages/MainPage";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import ProtectedRoutes from "./ProtectedRoutes";

// // function App() {
// //   return (
// //     <Routes>
// //       {/* Public routes */}
// //       <Route path="/signup" element={<Signup />} />
// //       <Route path="/login" element={<Login />} />

// //       {/* Protected main page */}
// //       <Route
// //         path="/"
// //         element={
// //           <ProtectedRoutes>
// //             <MainPage />
// //           </ProtectedRoutes>
// //         }
// //       />

// //       {/* Redirect any unknown routes to "/" */}
// //       <Route path="*" element={<ProtectedRoutes><MainPage /></ProtectedRoutes>} />
// //     </Routes>
// //   );
// // }

// // export default App;

// import { BrowserRouter as Routes, Route } from "react-router-dom";
// // import MainPage from "./pages/MainPage";
// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";
// // import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
// <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route
//           path="/"
//           element={
//             <ProtectedRoutes>
//               <MainPage />
//             </ProtectedRoutes>
//           }
//         />
//       </Routes>
//       </BrowserRouter>

//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainPage from "./pages/MainPage";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <MainPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
