
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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Get user info from token (decode it or fetch from API)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Option 1: Decode token to get user info
        const token = localStorage.getItem("token");
        if (token) {
          // You can decode JWT to get user data
          // Or fetch user from API
          const storedUser = localStorage.getItem("user");
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
        }
      } catch (err) {
        console.error("Failed to get user:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      if (res.data.success) setPosts(res.data.posts);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
      // If 401, token expired - logout
      if (err.response?.status === 401) {
        handleLogout();
      }
    }
  };

  useEffect(() => {
    if (!loading) {
      fetchPosts();
    }
  }, [loading]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  if (loading) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh" 
      }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <LeftSidebar />

      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2>Welcome, {user?.name || "User"}</h2>
            <button 
              onClick={handleLogout}
              style={{
                padding: "8px 16px",
                background: "#ff4444",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
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