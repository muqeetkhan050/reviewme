

// import { useState, useEffect } from "react";
// import Tweet from "../components/Tweet";
// import Feed from "../components/Feed";
// import LeftSidebar from "../components/LeftSideBar";
// import WhoToFollow from "../components/WhoToFollow";
// import OnlineFriends from "../components/OnlineFriends";
// import API from "../api";
// import { useNavigate } from "react-router-dom";  

// export default function MainPage() {
//   const navigate = useNavigate();
//   const [posts, setPosts] = useState([]);
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  

//   const fetchPosts = async () => {
//     try {
//       const res = await API.get("/posts");
//       if (res.data.success) setPosts(res.data.posts);
//     } catch (err) {
//       console.error("Failed to fetch posts:", err);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/login");

//   };

//   return (
//     <div style={{ display: "flex", width: "100%" }}>
//       <LeftSidebar />

//       <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
//         <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <h2>Welcome, {user?.name}</h2>
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//          <Tweet user={user} refreshPosts={fetchPosts} />
//           <Feed posts={posts} />
//           <OnlineFriends />
//         </div>
//       </div>

//       <div style={{ width: "250px" }}>
//         <WhoToFollow />
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import Tweet from "../components/Tweet";
import Feed from "../components/Feed";
import LeftSidebar from "../components/LeftSideBar";
import WhoToFollow from "../components/WhoToFollow";
import OnlineFriends from "../components/OnlineFriends";
import API from "../api";
import { useNavigate } from "react-router-dom";  

export default function MainPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  // ✅ Redirect to login if not logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      if (res.data.success) setPosts(res.data.posts);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <LeftSidebar />

      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Welcome, {user?.name}</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <Tweet refreshPosts={fetchPosts} />  {/* user prop is no longer needed */}
          <Feed posts={posts} />
          <OnlineFriends />
        </div>
      </div>

      <div style={{ width: "250px" }}>
        <WhoToFollow />
      </div>
    </div>
  );
}
