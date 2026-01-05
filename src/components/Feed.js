

// const Feed = ({ posts }) => {
//   return (
//     <div>
//       {posts.length === 0 ? (
//         <p>No tweets yet.</p>
//       ) : (
//         posts.map((post) => (
//           <div key={post._id} style={styles.card}>
//             <div style={styles.header}>
//               <div>
//                 <h4 style={styles.name}>Muqeet Khan</h4>
//                 <span style={styles.username}>@muqeet</span>
//               </div>
//               <span style={styles.time}>
//                 · {new Date(post.createdAt).toLocaleTimeString()}
//               </span>
//             </div>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//             <button>Upvote</button>
//             <button>Downvote</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// const styles = {
//   card: {
//     border: "1px solid #e6e6e6",
//     borderRadius: "12px",
//     padding: "16px",
//     marginBottom: "12px",
//     background: "#fff",
//   },
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "8px",
//   },
//   name: { margin: 0, fontSize: "16px", fontWeight: "bold" },
//   username: { color: "gray", fontSize: "14px" },
//   time: { color: "gray", fontSize: "14px" },
// };

// export default Feed;
export default function Feed({ posts }) {
  return (
    <div>
      {posts.map((p) => (
        <div key={p._id} style={{ border: "1px solid #ccc", borderRadius: "12px", padding: "12px", marginBottom: "8px", background: "#fff" }}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}
