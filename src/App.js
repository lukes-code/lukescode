import React, { Component }  from 'react';
import Nav from './components/Nav';
import './App.css';
import Blog from './components/Blog';
import Wrapper from './components/Wrapper';
import Portfolio from './components/Portfolio';
import Bio from './components/Bio';
import Footer from './components/Footer';

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
          <Bio />
          <Portfolio />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
