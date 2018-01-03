import React from 'react';
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';

class NavBar extends React.Component{

  componentDidMount() {
    scrollToComponent(this.home, { offset: -100, align: 'middle', duration: 1000, ease: 'inCirc'});
  }

  render(){
    return(
      <div>
        <nav className="navbar" ref={(section) => {
          this.navbar = section;
        }}>
          <div className="nav-wrapper">
            <Link to="#">
              <i className="fa fa-home" aria-hidden="true" onClick={() => scrollToComponent(this.home, { offset: -100, align: 'middle', duration: 1500})}></i>
            </Link>
            <Link to="#">
              <i className="fa fa-info-circle" aria-hidden="true" onClick={() => scrollToComponent(this.about, { offset: 0, align: 'top', duration: 1500})}></i>
            </Link>
            <Link to="#">
              <i className="fa fa-code" aria-hidden="true" onClick={() => scrollToComponent(this.projects, { offset: 0, align: 'top', duration: 1500})}></i>
            </Link>
            <Link to="mailto:hannahbmcross@gmail.com?Subject=Hello%20Hannah" target="_top">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </Link>
            <br/>
            <a href="https://github.com/crossy87" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/crossyh/" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/hanigrams/" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/crossy_h" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://coffeecodego.tumblr.com/" target="_blank">
              <i className="fa fa-tumblr-square" aria-hidden="true"></i>
            </a>
          </div>
        </nav>

        {/* <div className="container-main"> */}
        <section className="home" ref={(section) => {
          this.home = section;
        }}>
          <Home />
        </section>
        <section className="about" ref={(section) => {
          this.about = section;
        }}>
          <About />
        </section>
        <section className="projects"ref={(section) => {
          this.projects = section;
        }}>
          <Projects />
        </section>
        <section className="contact">
          <Contact />
        </section>
      </div>
      // </div>
    );
  }
}

export default NavBar;
