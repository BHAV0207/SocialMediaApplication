import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Navbar from "./Components/Layout/Navbar";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ProtectedRoutes from "./Components/Routes/ProtectedRoutes";
import Home from "./Components/Home";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar></Navbar>
          <main>
            <Routes>
              <Route path="/login" element={<Login></Login>} />
              <Route path="/regitser" element={<Register></Register>} />
              <Route
                path="/"
                element={
                  <ProtectedRoutes>
                    {" "}
                    <Home></Home>
                  </ProtectedRoutes>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
