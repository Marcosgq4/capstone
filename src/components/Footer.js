import Navbar from "./Navbar";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/assets/icons_assets/Logo.svg" alt="Little Lemon Logo" />
        </div>
        <div className="footer-nav">
          <Navbar /> {/* Reuse the Navbar component here */}
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>1234 Main St, Chicago, IL</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>
      </div>

      <div className="footer-social">
        <h4>Follow Us</h4>
        <p>Facebook | Instagram | Twitter</p>
      </div>
    </footer>
  );
}

export default Footer;
