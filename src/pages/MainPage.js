

import Tweet from '../components/tweet';
import LeftSidebar from '../components/LeftSideBar';
import ProfilePage from '../pages/ProfilePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function MainPage() {
  return (

      <div style={{ display: "flex" }}>
        <LeftSidebar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Tweet />} />              {/* default / */}
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>

  );
}

export default MainPage;
