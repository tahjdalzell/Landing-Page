import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <img className="logo" src="logo.png" alt="Logo" />
      </header>
      <div className="body">
        <div className="content">
          <img className="picture" src="picture.png" alt="Picture" />
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in convallis lorem. Curabitur iaculis
            molestie velit, vitae finibus elit vestibulum ac. Quisque posuere, tortor et cursus fermentum, ex nulla
            laoreet ipsum, at condimentum mauris nisi vel erat.
          </p>
        </div>
        <a className="button" href="https://example.com" target="_blank" rel="noopener noreferrer">
          Start Now
        </a>
      </div>
      <footer className="footer">
        <a href="/contact">Contact Us</a>
        <a href="/about">About Us</a>
      </footer>
    </div>
  );
};

export default App;
