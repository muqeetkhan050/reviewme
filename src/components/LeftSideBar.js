// import { Bell, MessageCircle, User } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const LeftSidebar = () => {

//   const navigate = useNavigate();
//   return (
//     <div style={styles.sidebar}>
//       <div style={styles.logo}>ReviewMe</div>

//       <NavItem icon={<Bell />} label="Notifications" />
//       <NavItem icon={<MessageCircle />} label="Chat" />
//       <NavItem
//         icon={<User />}
//         label="Profile"
//         onClick={() => navigate("/Profile")}
//       />
//     </div>
//   );
// };

// const NavItem = ({ icon, label, onClick }) => {
//   return (
//     <button onClick={onClick} style={styles.navItem}>
//       {icon}
//       <span>{label}</span>
//     </button>
//   );
// };

// const styles = {
//   sidebar: {
//     width: "240px",
//     height: "100vh",
//     padding: "20px",
//     borderRight: "1px solid #e6e6e6",
//     display: "flex",
//     flexDirection: "column",
//     gap: "20px",
//     fontFamily: "Arial, sans-serif",
//   },
//   logo: {
//     fontSize: "28px",
//     fontWeight: "bold",
//     marginBottom: "30px",
//   },
//   navItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     fontSize: "18px",
//     cursor: "pointer",
//     padding: "10px",
//     borderRadius: "25px",
//   },
//   text: {
//     fontWeight: "500",
//   },
// };

// export default LeftSidebar;
// components/LeftSideBar.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LeftSidebar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div style={{ width: "250px", padding: "16px", borderRight: "1px solid #ccc" }}>
      <h2 style={{ color: "#1da1f2", marginBottom: "24px" }}>ReviewMe</h2>
      
      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px",
            background: "none",
            border: "none",
            textAlign: "left",
            fontSize: "18px",
            cursor: "pointer",
            borderRadius: "8px"
          }}
          onMouseEnter={(e) => e.target.style.background = "#f0f0f0"}
          onMouseLeave={(e) => e.target.style.background = "none"}
        >
          🏠 Home
        </button>

        <button
          onClick={() => navigate(`/profile/${user?.id}`)}
          style={{
            padding: "12px",
            background: "none",
            border: "none",
            textAlign: "left",
            fontSize: "18px",
            cursor: "pointer",
            borderRadius: "8px"
          }}
          onMouseEnter={(e) => e.target.style.background = "#f0f0f0"}
          onMouseLeave={(e) => e.target.style.background = "none"}
        >
          👤 Profile
        </button>
      </nav>
    </div>
  );
}