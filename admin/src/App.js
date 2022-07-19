
import './app.css'
import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import Home from './pages/home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UserList from './pages/userList/UserList';

function App() {
  return (
    <Router >
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<UserList />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
