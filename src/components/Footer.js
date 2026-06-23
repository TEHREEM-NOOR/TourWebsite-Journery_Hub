import "../styles/FooterStyles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Trippy</h3>
          <p>Choose your favourite destination.</p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-behance"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h4>Project</h4>
            <ul>
              <li>Changelog</li>
              <li>Status</li>
              <li>License</li>
              <li>All Versions</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li>GitHub</li>
              <li>Issues</li>
              <li>Project</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Help</h4>
            <ul>
              <li>Support</li>
              <li>Troubleshooting</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Others</h4>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>License</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="footer-bottom">© 2026 Trippy. All rights reserved.</p>
    </footer>
  );
}

export default Footer;