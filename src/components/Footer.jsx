/* eslint-disable react/no-unknown-property */
import ispsc_logo from './../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-4">
          <div className="footer-logo">
            <img
              src={ispsc_logo}
              className="footer-logo-image"
              alt="ISPSC Logo"
            />
            <p>Ilocos Sur Polytechnic State College <br />Tagudin Campus</p>
          </div>
        </div>

        <div className="col-4">
          <div className="footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="/programs">Programs</a></li>
              <li><a href="/admissions">Admissions</a></li>
              <li><a href="/contacts">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="col-4">
          <div className="footer-links">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: <a href="mailto:ispsctagudin@yahoo.com">ispsctagudin@yahoo.com</a></li>
              <li>Phone: 077-674-1474</li>
              <li>Address: Quirino, Tagudin, Ilocos Sur</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="marquee-container">
        <marquee id="footer-marquee" width="100%" behavior="right" scrollamount="10">Imagine studying at ISPSC</marquee>
      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} Ilocos Sur Polytechnic State College
      </div>
    </footer>
  );
};

export default Footer;
