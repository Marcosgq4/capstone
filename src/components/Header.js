import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/assets/icons_assets/Logo.svg" alt="logo" />
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
