import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import NavBar from './components/NavBar';

import './scss/style.scss';

class App extends React.Component {


  render() {
    return (
      <Router>
        <div className="container-main">
          <NavBar />
        </div>
      </Router>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
