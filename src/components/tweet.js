

import { useState } from "react";
import API from "../api";

export default function Tweet({ refreshPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitTweet = async (e) => {
    e.preventDefault();
    try {
      await API.post("/posts/new", { title, content });
      setTitle("");
      setContent("");
      refreshPosts();
    } catch (err) {
      alert("Failed to post: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "12px", padding: "16px", background: "#fff" }}>
      <form onSubmit={submitTweet}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "6px", marginBottom: "6px", borderRadius: "6px", border: "1px solid #ccc" }}
          required
        />
        <textarea
          placeholder="What's happening?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", padding: "6px", marginBottom: "6px", borderRadius: "6px", border: "1px solid #ccc" }}
          required
        />
        <button type="submit" style={{ padding: "6px 12px", borderRadius: "6px", border: "none", background: "#1da1f2", color: "#fff", cursor: "pointer" }}>
          Tweet
        </button>
      </form>
    </div>
  );
}
