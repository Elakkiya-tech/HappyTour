import React from 'react';
import './Navbar.css';
import logo from '../../logo.png';
import {Route,
    NavLink,
    HashRouter} from 'react-router-dom';
import Work from '../Title/Work';
import plan from '../Title/plan';
import Contact from '../Title/ContactUs';
import Login from '../Title/LoginIn';
import Home from '../Title/Home';
import refresh from '../Title/refresh';
import '../Title/NavDetails.css';



export default function Navbar() {
    
    
    return (<HashRouter><nav className="navbar">
        
        <img src = {logo} alt="logo" />
        <ul className ="nav-links">
            <li>
            <NavLink to="/Home" className="nav-link">🏠 Home</NavLink></li>
            
            <li>
            <NavLink to= "/Work" className="nav-link">🛶 Work</NavLink>
            </li>
            <li>
            <NavLink to="/plan" className="nav-link">🌟 Plan Your Trip</NavLink></li>
            <li>
            <NavLink to="/Contact" className="nav-link">✈️ Contact</NavLink></li>
            <li> <NavLink to="/Login" className="nav-link" >💜 Log in
        </NavLink>
        </li>
        <li>
            <NavLink to="/refresh" className="nav-link">🔄</NavLink>
        </li>
           
        </ul>
        

        <div className="content">
            <Route path="/Home" component={Home} />
            <Route path="/Work" component={Work}/>
            <Route path="/plan" component={plan}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/Login" component={Login}/>
            <Route path="/refresh" component={refresh}/>
          </div>

        </nav>

        </HashRouter>  
       
        );   
 } ;  
