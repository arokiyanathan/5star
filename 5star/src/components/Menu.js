import React,{useState} from 'react';
import Home from "./Home.js";
import About from "./About.js";
import Service from './Service.js';
import Contact from './Contact.js';
function Menu(){
    const [mnuSelected,setMnuselected]=useState("home");
    const handleClick=(menu) =>{
        setMnuselected(menu);
    };
    return (
        <div>
            <header> 
                <div className="container_12">
                    <div className="grid_12"> 
                        <h1><a href="index.html"><img src="images/logo.png" alt="5 Star Fruit and Veg" /></a> </h1>
                        <div className="menu_block">
                            <nav className="" >
                                <ul className="sf-menu">
                                    <li className={mnuSelected ==='home' ? 'current' : ''} onClick={()=>handleClick('home')}>Home</li>
                                    <li className={mnuSelected ==='about' ? 'current' : ''} onClick={()=>handleClick('about')}>About Us</li>
                                    <li className={mnuSelected ==='service' ? 'current' : ''} onClick={()=>handleClick('service')}>Products & Services</li>
                                    <li className={mnuSelected ==='contact' ? 'current' : ''} onClick={()=>handleClick('contact')}>Contact Us</li>
                                </ul>
                            </nav>
                            <div className="clear"></div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </header>
            <div className="content">
                {mnuSelected ==='home' && <Home />}
                {mnuSelected ==='about' && <About />}
                {mnuSelected ==='service' && <Service />}
                {mnuSelected ==='contact' && <Contact />}
            </div>
        </div>
    );
}

export default Menu;