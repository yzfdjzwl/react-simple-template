import React, { Component } from 'react';
import './index.css';
import pic from './webpack.svg';

class App extends Component {

  render() {
    if (process.env.NODE_ENV === 'development') {
      console.log(`This is development type.`);
    }
    return (
      <div className="container">
        <div className="text">Hello, Welcome you to use my template..</div>
        <img className="img" src={pic} />
      </div>
    );
  }
}

export default App;
