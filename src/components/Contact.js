import React from 'react';

const Contact = () => {
  return(
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-details">
        <p>Mainly in: <span>London, UK</span></p>
        <p>Sometimes in: <span>Kobe, Japan</span></p>
        <p>Would like to be: <span>On a beach in Bali...</span></p>
        <br/>
        <p>email: <span><a href="mailto:hannahbmcross@gmail.com">hannahbmcross@gmail.com</a></span></p>
        <p>social <span>networks below</span></p>
      </div>
    </div>
  );
};

export default Contact;
