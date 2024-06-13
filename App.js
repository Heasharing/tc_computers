import React, {  } from 'react';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Header from './components/header/Header';
import Navigation from './components/nav-bar/Navigation';
import Slider from './components/slider/Slider';
import LaptopPage from './pages/Laptop';
import MonitorPage from './pages/Monitor';
import Desktop from './pages/Desktop';
import Contact from './pages/Contact';
import AboutUs from './pages/About'
import Home from './pages/Home';
import Dell from './pages/categories/Dell';
import Asus from './pages/categories/Asus';
import MSI from './pages/categories/MSI';
import Macbook from './pages/categories/Macbook';
import NotFound from './components/NotFound';
import Search from './components/helper/Search';
import './App.css';
import fb from './components/images/fb.png';
import telegram from './components/images/telegram.jpg';
import ig from './components/images/ig.webp';
import linkin from './components/images/linkin.webp';
import logo from './components/images/tclogo.jpg';
import FavoriteListPage from './pages/FavoriteListPage';
import Acessaries from './pages/Accessaries';




const App = () => {

  const handleClick = () => {
    console.log = ('Hello World');
  }

  
  return (
    <Router> 
      <div className="app-container">
        <Header />
        <Navigation/>
        <Slider />
        <Search/>
        <main className="content" > {/* handle page route display in the main className content */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/laptop" element={<LaptopPage/>} />
            <Route path="/monitor" element={<MonitorPage/>} />
            <Route path="/pc" element={<Desktop/>}/>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/macbook" element={<Macbook/>} />
            <Route path="/asus" element={<Asus/>} />
            <Route path="/dell" element={<Dell/>} />
            <Route path="/msi" element={<MSI/>} />
            <Route path="/acessaries" element={<Acessaries/>} />
            <Route path="/favorites" element={<FavoriteListPage/>} />
            <Route path="*" element={<NotFound/>} /> {/* This route catches all unmatched paths */}
          </Routes>
        </main>
        <footer className="bottom-sheet">
          <table className='bottom-container' align='left'>
            <tr>
              <th>
                <img className='logo-tc' src={logo} alt='ig' />
                <p>
                  Opening Hours:
                  <br/>
                  Monday to Sunday
                  <br/>
                  8:00 AM to 5:30 PM
                </p>
              </th>
              <th>
                <ul className='bm-list'>
                  <li><a href='/about-us'>About</a></li>
                  <li><a href='/'>Shopping Cart</a></li>
                  <li><a href='/'>Payment</a></li>
                  <li><a href='/contact'>Contact</a></li> 
                </ul>
              </th>
              <th>
                <h1 style={{textAlign:'center'}}>Follow Us</h1>
                <div className='logo-container'>
                  <img href='/' src={fb} alt='ig'/>
                  <img href='/' src={telegram} alt='ig'/>
                  <img href='/' src={ig} alt='ig'/>
                  <img href='/' src={linkin} alt='ig'/>                   
                </div>             
              </th>
              <th>
                <form className='sub-form'>
                  <input type="email" placeholder='enter your email'></input>
                  <button  type='submit' className='sub-btn' onSubmit={handleClick}>Subscribe</button>
                </form>
                </th>  
            </tr>
          </table>
          <table className='copy-right'>
          <tr>
              <td colspan="12">
                <h4 className='copy-right'>Copyright @ by: Tech-Center Computer</h4>
              </td>
            </tr>
          </table>
        </footer>
      </div>
    </Router>
  );
};

export default App;
