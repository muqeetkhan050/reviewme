import React from "react";
import "../css/OnlineFriends.css";

const friends = [
  {
    id: 1,
    name: "Alex",
    game: "Valorant",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Sarah",
    game: "Fortnite",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 3,
    name: "John",
    game: "GTA V",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    name: "Emma",
    game: "Minecraft",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 5,
    name: "Mike",
    game: "Apex Legends",
    avatar: "https://i.pravatar.cc/150?img=18",
  },
];

const OnlineFriends = () => {
  return (
    <div className="online-friends-container">
      <h3>Online Friends</h3>

      <div className="friends-row">
        {friends.map((friend) => (
          <div key={friend.id} className="friend-card">
            <div className="avatar-wrapper">
              <img src={friend.avatar} alt={friend.name} />
              <span className="online-dot"></span>
            </div>

            <span className="friend-name">{friend.name}</span>
            <span className="friend-game">🎮 {friend.game}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineFriends;
