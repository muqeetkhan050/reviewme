import React from "react";
import "../css/ProfilePage.css";

const ProfilePage = () => {
  // Sample tweets
  const tweets = [
    { id: 1, text: "Hello world! This is my first tweet 🐦", time: "1h ago" },
    { id: 2, text: "Learning React.js and Node.js today! 🚀", time: "3h ago" },
    { id: 3, text: "Just brewed a fresh cup of coffee ☕ #developerlife", time: "1d ago" },
  ];

  return (
    <div>
      <header className="header">Mini Twitter</header>

      <div className="profile">
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
          />
          <div>
            <h2>Muqeet Khan</h2>
            <p>@muqeetk</p>
          </div>
        </div>

        <div className="bio">
          <p>Full-stack developer | Loves coding and coffee ☕</p>
        </div>

        <div className="stats">
          <div>
            <span>120</span>
            Tweets
          </div>
          <div>
            <span>500</span>
            Followers
          </div>
          <div>
            <span>300</span>
            Following
          </div>
        </div>
      </div>

      <div className="tweets">
        {tweets.map((tweet) => (
          <div className="tweet" key={tweet.id}>
            <button>Upvote</button>
            <p>{tweet.text}</p>
            <span>{tweet.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
