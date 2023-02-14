import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './compents/About/About';
import Contact from './compents/Contact/Contact';
import Earnings from './compents/Earnings/Earnings';
import Footer from './compents/Footer/Footer';
import Home from './compents/Home/Home';
import Navbar from './compents/Navbar/Navbar';
import Withdrawal from './compents/Withdrawal/Withdrawal';
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
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/earnings' element={<Earnings/>} />
          <Route path='/withdrawal' element={<Withdrawal/>} />
        </Routes>
        <Footer/>
      </>
    )
  }
}
export default App;