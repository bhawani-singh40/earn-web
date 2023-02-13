import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './compents/About/About';
import Contact from './compents/Contact/Contact';
import Home from './compents/Home/Home';
import Navbar from './compents/Navbar/Navbar';
import GlobalStyle from './styles/Global';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <Home/>
      </>
    )
  }
}
export default App;