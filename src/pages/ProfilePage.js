
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../api";
import Feed from "../components/Feed";
import LeftSidebar from "../components/LeftSideBar";
import WhoIsComing from "../components/WhoIsComing";

export default function ProfilePage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { user: currentUser } = useAuth();
  const [profileUser, setProfileUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
    fetchUserPosts();
  }, [userId]);

  const fetchUserProfile = async () => {
    try {
      // You'll need to create this endpoint
      const res = await API.get(`/auth/user/${userId}`);
      if (res.data.success) {
        setProfileUser(res.data.user);
      }
    } catch (err) {
      console.error("Failed to fetch user:", err);
    }
  };

  const fetchUserPosts = async () => {
    try {
      const res = await API.get(`/posts/user/${userId}`);
      if (res.data.success) {
        setPosts(res.data.posts);
      }
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  const isOwnProfile = currentUser?.id === userId;

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <LeftSidebar />

      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{ width: "600px", padding: "16px" }}>
          {/* Profile Header */}
          <div style={{
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "16px"
          }}>
            {/* Back Button */}
            <button
              onClick={() => navigate("/")}
              style={{
                background: "none",
                border: "none",
                color: "#1da1f2",
                cursor: "pointer",
                fontSize: "16px",
                marginBottom: "16px"
              }}
            >
              ← Back to Feed
            </button>

            {/* Profile Info */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {/* Avatar */}
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                color: "#fff",
                fontWeight: "bold"
              }}>
                {profileUser?.name?.charAt(0).toUpperCase()}
              </div>

              {/* User Details */}
              <div>
                <h2 style={{ margin: "0 0 4px 0" }}>{profileUser?.name}</h2>
                <p style={{ margin: 0, color: "#666" }}>@{profileUser?.name}</p>
                <p style={{ margin: "8px 0 0 0", color: "#666" }}>
                  {profileUser?.email}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div style={{ 
              display: "flex", 
              gap: "24px", 
              marginTop: "16px",
              paddingTop: "16px",
              borderTop: "1px solid #eee"
            }}>
              <div>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>{posts.length}</span>
                <span style={{ color: "#666", marginLeft: "4px" }}>Posts</span>
              </div>
              <div>
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {posts.reduce((sum, post) => sum + (post.upvotes?.length || 0), 0)}
                </span>
                <span style={{ color: "#666", marginLeft: "4px" }}>Upvotes</span>
              </div>
            </div>

            {isOwnProfile && (
              <div style={{ marginTop: "16px" }}>
                <span style={{ 
                  background: "#e3f2fd", 
                  color: "#1976d2", 
                  padding: "4px 12px", 
                  borderRadius: "12px",
                  fontSize: "12px"
                }}>
                  Your Profile
                </span>
              </div>
            )}

            {/* Who is Coming button / panel */}
            <div style={{ marginTop: "16px" }}>
              <WhoIsComing userId={userId} />
            </div>
          </div>

          {/* Posts Section */}
          <h3 style={{ marginBottom: "12px" }}>
            {isOwnProfile ? "Your Posts" : `Posts by @${profileUser?.name}`}
          </h3>
          
          {posts.length === 0 ? (
            <div style={{
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "12px",
              padding: "32px",
              textAlign: "center",
              color: "#666"
            }}>
              {isOwnProfile ? "You haven't posted anything yet!" : "No posts yet"}
            </div>
          ) : (
            <Feed posts={posts} refreshPosts={fetchUserPosts} />
          )}
        </div>
      </div>
    </div>
  );
}