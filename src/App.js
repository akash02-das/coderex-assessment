import { Route, Routes } from "react-router-dom";

import "./App.css";
import Nav from "./components/Navbar/Nav";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  return (
    <div className="bg-indigo-100 p-20">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
