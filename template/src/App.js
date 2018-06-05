import React, { Component } from 'react';
import './index.css';
import pic from './webpack.svg';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text">A App</div>
        <img className="img" src={pic} />
      </div>
    );
  }
}

export default App;
