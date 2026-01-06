
export default function Feed({ posts }) {
  return (
    <div>
      {posts.map((p) => (
        <div key={p._id} style={{ border: "1px solid #ccc", borderRadius: "12px", padding: "12px", marginBottom: "8px", background: "#fff" }}>
          <h4>@{p.author?.name}</h4>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}
