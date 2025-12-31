import { useState } from "react";

const Tweet = () => {
  const [likes, setLikes] = useState(0);

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

      {/* Content */}
      <p style={styles.text}>
        Building a MERN app 🚀  
        Simple tweets, real users, clean code.
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
