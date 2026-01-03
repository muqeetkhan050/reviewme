

import { useState, useEffect } from "react";
import Tweet from "../components/Tweet";
import Feed from "../components/Feed";
import LeftSidebar from "../components/LeftSideBar";// placeholder sidebar

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
    <div style={{ display: "flex" }}>
      <LeftSidebar />
      <div style={{ flex: 1, padding: "16px" }}>
        <Tweet refreshPosts={fetchPosts} />
        <Feed posts={posts} />
      </div>
    </div>
  );
}

export default MainPage;
