import React from 'react';

class Contact extends React.Component {


  render(){
    return(
      <div className="contact">
        <div className="contact-details">
          <p>
            <a href="mailto:hannahbmcross@gmail.com">hannahbmcross@gmail.com</a>
            <br/>
            <span> London, UK </span>
          </p>
          <br/>
          <div className="icons">
            <a href="https://github.com/crossy87" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github" aria-hidden="true"><p>github</p></i>
            </a>
            <a href="https://www.linkedin.com/in/crossyh/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin-square" aria-hidden="true"><p>linkedin</p></i>
            </a>
            <a href="https://www.instagram.com/hanigrams/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" aria-hidden="true"><p>instagram</p></i>
            </a>
            <a href="https://twitter.com/crossy_h" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter" aria-hidden="true"><p>twitter</p></i>
            </a>
            <a href="https://coffeecodego.tumblr.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-tumblr-square" aria-hidden="true"><p>tumblr</p></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
