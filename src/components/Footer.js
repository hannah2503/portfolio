import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return(
    <footer>
      <Link to="https://github.com/crossy87">github</Link>
      <Link to="https://www.linkedin.com/in/crossyh/">linkedin</Link>
      <Link to="https://www.instagram.com/hanigrams/">instagram</Link>
      <Link to="https://twitter.com/crossy_h">twitter</Link>
      <Link to="https://coffeecodego.tumblr.com/">blog</Link>
    </footer>
  );
};

export default Footer;
