import React from 'react';
import './App.css';

      
const App = () => {
  
  return (
    <div className="container">
      <header className="header">
	
        <img className="logo" src="https://minion-dev.s3.amazonaws.com/assets/themes/start_a_career/img/start-a-career-blue-logo-desktop.svg" alt="Logo" />
      </header>
      <div className="blue-bar">
        <h2 className="blue-bar-text">Discover the Right Fit</h2>
      </div>
      <div className="body">
        <div className="content">
          <h1 className="header-text">Start Working Remote Today</h1>
          <img className="user" src="https://www.realsimple.com/thmb/FY7HYd6A6iRERlEOJzht8Vs8_GE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/work-from-outdoors-tips-2000-1c4ee7641fd84a42a7878dcb2a1b62fe.jpg" alt="logo" />
          <p className="paragraph">
            Whether you're looking for a local opportunity or a chance to work for a company on the other side of the country, Start A Career Today has something for everyone. No more commuting, no more office politics, and no more stress – just fulfilling work that fits around your life.
          </p>
          <a className="button" href="https://clickrwrd.com/8Bakt3j" target="_blank" rel="noopener noreferrer">
            Start Now
          </a>
          <div className="blue-section">
            <img className="logo" src="https://minion-dev.s3.amazonaws.com/assets/themes/jobs_ondemand/img/logos/fedex-logo-white.png" alt="Logo 1" />
            <img className="logo" src="https://minion-dev.s3.amazonaws.com/assets/themes/jobs_ondemand/img/logos/walmart-logo-white.png" alt="Logo 2" />
            <img className="logo" src="https://minion-dev.s3.amazonaws.com/assets/themes/jobs_ondemand/img/logos/pepsi-logo-white.png"alt="Logo 3" />
            <a className="button" href="https://clickrwrd.com/8Bakt3j" target="_blank" rel="noopener noreferrer">
              Find What's Right for You
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <a href="/contact">Contact Us</a>
        <a href="/about">About Us</a>
      </footer>
    </div>
  );
};

export default App;
