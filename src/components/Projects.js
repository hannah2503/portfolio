import React from 'react';

class Projects extends React.Component {

  render(){
    return(
      <div className="projects">
        <div className="container">
          <a href="http://karafuru.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./assets/image3.jpg"/></a>
          <a href="http://pugstagram.herokuapp.com/" target="_blank" rel="noopener noreferrer" ><img src="./assets/screen1.jpg"/></a>
          <a href="https://charityapp-hannah.herokuapp.com/" target="_blank" rel="noopener noreferrer" ><img src="./assets/charity1.jpg"/></a>
          <a href="https://social-atlas.herokuapp.com/" target="_blank" rel="noopener noreferrer" ><img src="./assets/atlas1.jpg"/></a>
        </div>
        <p>scroll to continue <i className="fa fa-arrow-down" aria-hidden="true"></i></p>
      </div>
    );
  }

}



export default Projects;
