import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import About from './compents/About/About';
import Contact from './compents/Contact/Contact';
import Earnings from './compents/Earnings/Earnings';
import Footer from './compents/Footer/Footer';
import Home from './compents/Home/Home';
import Navbar from './compents/Navbar/Navbar';
import Withdrawal from './compents/Withdrawal/Withdrawal';
import GlobalStyle from './styles/Global';
import History from './compents/History/History';
import Signup from './compents/Account/Signup/Signup';
import Signin from './compents/Account/Signin/Signin';
import ForgotPassword from './compents/Account/ForgotPassword/ForgotPassword';
import UserProfile from './compents/Navbar/UserProfile/UserProfile';
import BankCard from './compents/Navbar/UserProfile/ProfileLinks/BankCard/BankCard';
import SearchAccount from './compents/Account/SearchAccount/SearchAccount';

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
          <Route path='/withdrawal/history' element={<History/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/user-profile' element={<UserProfile/>} />
          <Route path='/bank-card' element={<BankCard/>} />
          <Route path='/search-account' element={<SearchAccount/>} />
        </Routes>
        <Footer/>
      </>
    )
  }
}
export default App;