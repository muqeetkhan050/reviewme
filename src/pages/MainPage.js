

import { useState, useEffect } from "react";
import Tweet from "../components/Tweet";
import Feed from "../components/Feed";
import LeftSidebar from "../components/LeftSideBar";// placeholder sidebar
import Login from "./Login";

function MainPage() {
  const [posts, setPosts] = useState([]);

  // Fetch posts from backend
  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/reviewme/posts");
      const data = await res.json();
      if (data.success) setPosts(data.posts);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ display: "flex", width: "100%" }}>
  
  {/* Left Sidebar */}
  <LeftSidebar />

  {/* Center Content */}
  <div
    style={{
      flex: 1,
      display: "flex",
      justifyContent: "center"
    }}
  >
    <div
      style={{
        width: "600px",      // center column width
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "16px"
      }}
    >
      <Tweet refreshPosts={fetchPosts} />
      <Feed posts={posts} />
      <Login/>
    </div>
  </div>

  <div style={{ width: "250px" }} />
</div>
  );
}

export default MainPage;
