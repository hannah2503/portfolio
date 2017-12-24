import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';


import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './scss/style.scss';

class App extends React.Component {

  componentDidMount() {
    scrollToComponent(this.app, { offset: 0, align: 'top', duration: 500, ease: 'inCirc'});
  }

  render() {
    return (
      <Router>
        <div className="app" ref={(section) => {
          this.app = section;
        }}>
          <nav>
            <a onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1500})}>home</a>
            <a onClick={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 1500})}>projects</a>
            <a onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})}>about</a>
            {/* <a onClick={() => scrollToComponent(this.Contact, { offset: 0, align: 'top', duration: 1500})}>contact</a> */}
            <a onClick={() => scrollToComponent(this.Footer, { offset: 0, align: 'top', duration: 1500})}>contact</a>
          </nav>
          <section className="Home" ref={(section) => {
            this.Home = section;
          }}>
            <Home />
          </section>
          <section className="Projects" ref={(section) => {
            this.Projects = section;
          }}>
            <Projects />
          </section>
          <section className="About" ref={(section) => {
            this.About = section;
          }}>
            <About />
          </section>
          <section className="Contact" ref={(section) => {
            this.Contact = section;
          }}>
            <Contact />
          </section>
          <section className="Footer" ref={(section) => {
            this.Footer = section;
          }}>
            <Footer />
          </section>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
