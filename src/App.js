import logo from './logo.svg';
import './App.css';
import Tweet from './components/tweet';
import LeftSidebar from './components/LeftSideBar';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div style={{ display: "flex" }}>
      <LeftSidebar />
      <div style={{ flex: 1 }}><Tweet /></div>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
