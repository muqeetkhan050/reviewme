import { Bell, MessageCircle, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LeftSidebar = () => {

  const navigate = useNavigate();
  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>ReviewMe</div>

      <NavItem icon={<Bell />} label="Notifications" />
      <NavItem icon={<MessageCircle />} label="Chat" />
      <NavItem
        icon={<User />}
        label="Profile"
        onClick={() => navigate("/Profile")}
      />
    </div>
  );
};

const NavItem = ({ icon, label, onClick }) => {
  return (
    <button onClick={onClick} style={styles.navItem}>
      {icon}
      <span>{label}</span>
    </button>
  );
};

const styles = {
  sidebar: {
    width: "240px",
    height: "100vh",
    padding: "20px",
    borderRight: "1px solid #e6e6e6",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    fontFamily: "Arial, sans-serif",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "18px",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "25px",
  },
  text: {
    fontWeight: "500",
  },
};

export default LeftSidebar;
