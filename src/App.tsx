import './App.css';
import { Dashboard } from './components/Body/dashboard';
import { NavBar } from './components/Navbar/navbar';

function App() {
  return (
    <>
      <div className="grid-container">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="dashboard">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
