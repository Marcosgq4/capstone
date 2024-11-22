import Navbar from "./Navbar";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/assets/icons_assets/Logo.svg" alt="Little Lemon Logo" />
      </div>
      <div className="footer-nav">
        <h4>Doormat Navigation</h4>
        <Navbar /> {/* Reuse the Navbar component here */}
      </div>
      <div className="footer-contact">
        <h4>Contact</h4>
        <p>1234 Main St, Chicago, IL</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@littlelemon.com</p>
      </div>

      <div className="footer-social">
        <h4>Social Media Links</h4>
        <p>Facebook | Instagram | Twitter</p>
      </div>
    </footer>
  );
}

export default Footer;
