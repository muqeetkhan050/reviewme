

import { useState } from "react";
import axios from "axios"; // ✅ Import axios

const Tweet = () => {
  const [likes, setLikes] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Submit tweet to backend
  const submitTweet = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/reviewme/tweet", {
        title,
        content,
      });

      setTitle("");
      setContent("");
      alert("Tweet posted!");
    } catch (error) {
      console.error(error);
      alert("Failed to post tweet");
    }
  };

  return (
    <div style={styles.card}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h4 style={styles.name}>Muqeet Khan</h4>
          <span style={styles.username}>@muqeet</span>
        </div>
        <span style={styles.time}>· 2m</span>
      </div>

      {/* Tweet Form */}
      <form onSubmit={submitTweet} style={{ marginBottom: "12px" }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "6px",
            marginBottom: "6px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
          required
        />
        <textarea
          placeholder="What's happening?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: "100%",
            padding: "6px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
          required
        />
        <button
          type="submit"
          style={{
            marginTop: "6px",
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            background: "#1da1f2",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Tweet
        </button>
      </form>

      {/* Content Preview */}
      <p style={styles.text}>
        {content || "Building a MERN app 🚀  Simple tweets, real users, clean code."}
      </p>

      {/* Actions */}
      <div style={styles.actions}>
        <button onClick={() => setLikes(likes + 1)} style={styles.button}>
          ❤️ {likes}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "400px",
    border: "1px solid #e6e6e6",
    borderRadius: "12px",
    padding: "16px",
    fontFamily: "Arial, sans-serif",
    background: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  name: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
  },
  username: {
    color: "gray",
    fontSize: "14px",
  },
  time: {
    color: "gray",
    fontSize: "14px",
  },
  text: {
    fontSize: "15px",
    marginBottom: "12px",
  },
  actions: {
    display: "flex",
  },
  button: {
    border: "none",
    background: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Tweet;
