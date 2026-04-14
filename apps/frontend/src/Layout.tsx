import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="layout" style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "10px", right: "20px", zIndex: 1000 }}>
        <UserButton />
      </div>

      <Header />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;