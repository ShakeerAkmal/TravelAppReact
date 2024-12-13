import "./App.css";
import LandingPage from "./Pages/Landing/LandingPage";
import SignupPage from "./Pages/SignUp/SignupPage";
import SignInPage from "./Pages/SignUp/SignInPage";
import {
  HashRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import TourPackageDetails from "./Pages/Tour/TourPackageDetails";
import CustomFooter from "./Pages/Landing/CustomFooter";
import CustomHeader from "./Pages/Landing/CustomHeader";
import TourListPage from "./Pages/TourList/TourListPage";
import { Layout } from "antd";
import AdminSignupPage from "./AdminPages/SignUp/AdminSignupPage";
import AdminSignInPage from "./AdminPages/SignUp/AdminSignInPage";
import AdminPage from "./AdminPages/Admin/AdminPage";
import { StyledContent } from "./components/styled";


const LayoutWithHeaderFooter: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CustomHeader />
      <StyledContent>
        <Outlet />
      </StyledContent>
      <CustomFooter />
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <StyledContent>

    <Router>
      <Routes>
        <Route element={<LayoutWithHeaderFooter />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tour" element={<TourPackageDetails />} />
          <Route path="/search" element={<TourListPage />} />
        </Route>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin/signup" element={<AdminSignupPage />} />
        <Route path="/admin/signin" element={<AdminSignInPage />} />
        <Route path="/admin/manage" element={<AdminPage />} />
        
      </Routes>
    </Router>
    </StyledContent>

  );
};

export default App;
