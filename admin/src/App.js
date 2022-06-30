
import './app.css'
import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="other">other.....</div>
      </div>
    </div>
  );
}

export default App;
