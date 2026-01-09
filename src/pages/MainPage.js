// src/pages/MainPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Tweet from "../components/Tweet";
import Feed from "../components/Feed";
import LeftSidebar from "../components/LeftSideBar";
import WhoToFollow from "../components/WhoToFollow";
import OnlineFriends from "../components/OnlineFriends";
import { Button } from "../components/ui";
import API from "../api";

export default function MainPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      if (res.data.success) setPosts(res.data.posts);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
      if (err.response?.status === 401) {
        handleLogout();
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <LeftSidebar />

      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{ 
          width: "600px", 
          display: "flex", 
          flexDirection: "column", 
          gap: "16px", 
          padding: "16px" 
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2>Welcome, {user?.name || "User"}</h2>
            <Button variant="destructive" onClick={handleLogout}>Logout</Button>
          </div>
          
          <Tweet refreshPosts={fetchPosts} />
          
          {/* 🔥 FIX: Make sure to pass refreshPosts */}
          <Feed posts={posts} refreshPosts={fetchPosts} />
          
          
          <OnlineFriends />
        </div>
      </div>

      <div style={{ width: "250px" }}>
        <WhoToFollow />
      </div>
    </div>
  );
}