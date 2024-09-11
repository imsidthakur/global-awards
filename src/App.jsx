import "./App.css";
import CustomizedSnackbar from "@components/CustomSnackbar";
import { makeServer } from "@utils/mockAPIS";

import AppRouting from "./AppRouting";
import CustomNavbar from "@components/custom-navbar/CustomNavbar";
import HeroSection from "@components/hero-section/HeroSection";
import LandingPage from "@pages/landing-page/LandingPage";

makeServer({ environment: "development" });

function App() {
  return (
    <div style={{}}>
      {/* <AppRouting />
      <CustomizedSnackbar /> */}
      <LandingPage/>
    </div>
  );
}

export default App;
