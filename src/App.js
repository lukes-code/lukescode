import React, { Component }  from 'react';
import Nav from './components/Nav';
import './App.css';
import Blog from './components/Blog';
import Wrapper from './components/Wrapper';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
    }
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Wrapper />
        <Blog />
      </React.Fragment>
    );
  }
}

export default App;
