import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // To control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // To track the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar if scrolling up, hide if scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Update lastScrollY to current scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
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
