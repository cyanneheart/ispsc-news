import  { useState } from 'react';

import { Link } from 'react-router-dom';
import Header from './Header';

function Navigation() {
  const [isNavToggled, setIsNavToggled] = useState(false);

  const toggleNav = () => {
    setIsNavToggled((prevIsNavToggled) => !prevIsNavToggled);
  };

    return (
        <>
        <header className="masthead">
          <Header></Header>
          <nav>
          <div id="hamburger" className={`hamburger-menu ${isNavToggled ? 'active' : ''}`} onClick={toggleNav}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className={`nav-link ${isNavToggled ? 'navbar-toggled' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
          </nav>
        </header>
        </>
        
      );
    
}

export default Navigation;