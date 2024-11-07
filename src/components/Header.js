import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src="logo.png" alt="Brand Logo" />
        </a>
      </div>
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
