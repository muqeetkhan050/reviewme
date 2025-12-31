import logo from './logo.svg';
import './App.css';
import Tweet from './components/tweet';
import LeftSidebar from './components/LeftSideBar';
function App() {
  return (
    <div style={{ display: "flex" }}>
      <LeftSidebar />
      <div style={{ flex: 1 }}><Tweet /></div>
    </div>

  );
}

export default App;
