

import { useState, useEffect } from "react";
import Tweet from "../components/Tweet";
import Feed from "../components/Feed";
import LeftSidebar from "../components/LeftSideBar";
import WhoToFollow from "../components/WhoToFollow";
import OnlineFriends from "../components/OnlineFriends";
import API from "../api";

export default function MainPage() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

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
    window.location.reload(); // redirect to login via ProtectedRoutes
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
          <Tweet refreshPosts={fetchPosts} />
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
