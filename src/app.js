import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import Home from './components/Home';
import Content from './components/Content';
import Menu from './components/Menu';
import Footer from './components/Footer';


import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container-main">
          <div className="header"><Home /></div>
          <div className="menu"><Menu /></div>
          <div className="content"><Content /></div>
          <div className="footer"><Footer /></div>
        </div>
      </Router>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
