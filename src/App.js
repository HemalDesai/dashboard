
import './App.css';
import Dashboard from './components/Dashboard';
import MainNavbar from './components/MainNavbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <MainNavbar /> 
      <div className="container">
      <Sidebar />

      <div className="dashboard-container">
      <Dashboard />
      </div>
      
      
    </div>
    </div>
  );
}

export default App;
