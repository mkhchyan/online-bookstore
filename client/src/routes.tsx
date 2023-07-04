import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Layout from "./layout/Layout";
import { LandingPage } from "./pages/landing-page";
import Login from "./pages/login/Login";
import { Homepage } from "./pages/homepage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<LandingPage />} />

          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />

          <Route path='/profile' element={<Homepage />} />

        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
