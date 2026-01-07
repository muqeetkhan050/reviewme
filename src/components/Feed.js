// src/components/Feed.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../api";

export default function Feed({ posts, refreshPosts }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleUpvote = async (postId) => {
    try {
      console.log("Upvoting post:", postId);
      await API.post(`/posts/${postId}/upvote`);
      
      // 🔥 FIX: Check if refreshPosts exists before calling
      if (refreshPosts && typeof refreshPosts === 'function') {
        refreshPosts();
      } else {
        console.error("refreshPosts is not a function");
      }
    } catch (err) {
      console.error("Failed to upvote:", err);
    }
  };

  const handleDownvote = async (postId) => {
    try {
      console.log("Downvoting post:", postId);
      await API.post(`/posts/${postId}/downvote`);
      
      // 🔥 FIX: Check if refreshPosts exists before calling
      if (refreshPosts && typeof refreshPosts === 'function') {
        refreshPosts();
      } else {
        console.error("refreshPosts is not a function");
      }
    } catch (err) {
      console.error("Failed to downvote:", err);
    }
  };

  const hasUpvoted = (post) => {
    return post.upvotes?.some(id => id === user?.id);
  };

  const hasDownvoted = (post) => {
    return post.downvotes?.some(id => id === user?.id);
  };

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post._id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "16px",
            marginBottom: "12px",
            background: "#fff"
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <h4
              onClick={() => navigate(`/profile/${post.author?._id}`)}
              style={{
                margin: 0,
                color: "#1da1f2",
                cursor: "pointer",
                textDecoration: "none"
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
              onMouseLeave={(e) => e.target.style.textDecoration = "none"}
            >
              @{post.author?.name || "Unknown User"}
            </h4>
            <span style={{ fontSize: "12px", color: "#666" }}>
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>

          {/* Content */}
          <h3 style={{ margin: "8px 0" }}>{post.title}</h3>
          <p style={{ margin: "8px 0", color: "#333" }}>{post.content}</p>

          {/* Vote Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "12px",
              paddingTop: "12px",
              borderTop: "1px solid #eee"
            }}
          >
            {/* Upvote Button */}
            <button
              onClick={() => handleUpvote(post._id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                background: hasUpvoted(post) ? "#1da1f2" : "#f0f0f0",
                color: hasUpvoted(post) ? "#fff" : "#333",
                border: "none",
                borderRadius: "8px",
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "bold",
                transition: "all 0.2s"
              }}
            >
              ▲ {post.upvotes?.length || 0}
            </button>

            {/* Vote Count */}
            <span
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: (post.upvotes?.length || 0) - (post.downvotes?.length || 0) > 0
                  ? "#00ba34"
                  : (post.upvotes?.length || 0) - (post.downvotes?.length || 0) < 0
                  ? "#ff4444"
                  : "#666"
              }}
            >
              {(post.upvotes?.length || 0) - (post.downvotes?.length || 0)}
            </span>

            {/* Downvote Button */}
            <button
              onClick={() => handleDownvote(post._id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                background: hasDownvoted(post) ? "#ff4444" : "#f0f0f0",
                color: hasDownvoted(post) ? "#fff" : "#333",
                border: "none",
                borderRadius: "8px",
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "bold",
                transition: "all 0.2s"
              }}
            >
              ▼ {post.downvotes?.length || 0}
            </button>
          </div>
        </div>
      ))}

      {/* Empty State */}
      {posts.length === 0 && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "32px",
            textAlign: "center",
            color: "#666",
            background: "#fff"
          }}
        >
          <h3>No posts yet!</h3>
          <p>Be the first to share something.</p>
        </div>
      )}
    </div>
  );
}