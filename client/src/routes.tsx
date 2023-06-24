import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Layout from "./layout/Layout";
import { LandingPage } from "./pages/landing-page";
import Login from "./pages/login/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<LandingPage />} />

          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
