import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="layout">
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