import React from 'react';

class Projects extends React.Component {

  render(){
    return(
      <div className="projects">

        <div className="container">
          <div className="projects-heading">
            <h1>I made a few things...</h1>
            <hr/>
          </div>
          <br/>
          <a href="https://social-atlas.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./assets/atlas1.jpg"/></a>
          <a href="https://social-atlas.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button>Launch Social Atlas</button></a>
          <a href="https://github.com/crossy87/social-atlas"target="_blank" rel="noopener noreferrer"><button>See the Code</button></a>

          <a href="https://charityapp-hannah.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./assets/charity1.jpg"/></a>
          <a href="https://charityapp-hannah.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button>Launch Charity App</button></a>
          <a href="https://github.com/crossy87/charity-app"target="_blank" rel="noopener noreferrer"><button>See the Code</button></a>

          <a href="http://pugstagram.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./assets/screen1.jpg"/></a>
          <a href="http://pugstagram.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button>Launch Pugstagram</button></a>
          <a href="https://github.com/crossy87/pugstagram"target="_blank" rel="noopener noreferrer"><button>See the Code</button></a>

          <a href="http://karafuru.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./assets/image3.jpg"/></a>
          <a href="http://karafuru.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button>Launch Karafuru</button></a>
          <a href="https://github.com/crossy87/karafuru"target="_blank" rel="noopener noreferrer"><button>See the Code</button></a>
        </div>
      </div>
    );
  }

}



export default Projects;
