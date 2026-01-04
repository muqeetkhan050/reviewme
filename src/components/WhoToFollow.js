import React from "react";
import "../css/WhoToFollow.css";

const users = [
  {
    id: 1,
    name: "Fatima",
    username: "@slim_shady113",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Ahsan Shah",
    username: "@ahsanhshahh",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "amir",
    username: "@caffeinexher",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

const WhoToFollow = () => {
  return (
    <div className="follow-card">
      <h3>Who to follow</h3>

      {users.map((user) => (
        <div key={user.id} className="follow-user">
          <div className="user-info">
            <img src={user.avatar} alt={user.name} />
            <div>
              <span className="name">{user.name}</span>
              <span className="username">{user.username}</span>
            </div>
          </div>

          <button className="follow-btn">Follow</button>
        </div>
      ))}

      <span className="show-more">Show more</span>
    </div>
  );
};

export default WhoToFollow;
