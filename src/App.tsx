import { Routes, Route, Outlet } from "react-router-dom";

import Login from "./views/authentication/Login";
import Register from "./views/authentication/Register";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomeTest from "./views/HomeTest";

function App() {
  return (
    <Routes>
     
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        element={
          <div>
            <Navbar />
            <div className="flex flex-grow overflow-hidden">
              <Sidebar />
              <div className="flex-grow overflow-y-auto bg-white p-4">
                <Outlet />
              </div>
            </div>
          </div>
        }
      >

        <Route path="/" element={<HomeTest />} />

      </Route>
    </Routes>
  );
}

export default App;
