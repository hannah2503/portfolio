import React from 'react';

class Projects extends React.Component {

  render(){
    return(
      <div className="projects">
        <div className="heading">
          <h1>Projects</h1>
        </div>
        <div className="content">
          <a href="#"><img src="./assets/image3.jpg"/></a>
          <a href="#"><img src="./assets/screen1.jpg"/></a>
          <a href="#"><img src="./assets/charity1.jpg"/></a>
          <a href="#"><img src="./assets/atlas1.jpg"/></a>
        </div>
      </div>
    );
  }

}



export default Projects;
