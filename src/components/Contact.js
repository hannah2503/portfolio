import React from 'react';

class Contact extends React.Component {


  render(){
    return(
      <div className="contact">
        <div className="contact-details">
          {/* <p>Mainly in: <span>London, UK</span></p>
          <p>Sometimes in: <span>Kobe, Japan</span></p>
          <p>Would like to be: <span>On a beach in Bali...</span></p>
          <br/> */}

          <p><a href="mailto:hannahbmcross@gmail.com">hannahbmcross@gmail.com</a> | London, UK </p>          
        </div>
      </div>
    );
  }
}

export default Contact;
