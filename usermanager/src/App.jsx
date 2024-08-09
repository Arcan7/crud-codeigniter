import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserLists from "./components/UserLists";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<UserLists />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
