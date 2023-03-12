import React from 'react';
import '../scss/layout/_header.scss';
import Logo from '../assets/logo.png'
import CartWidget from './CartWidget';

function NavBar(){
    return(

        <>
        <div>
            <header className="header">
            <section className="header__section">

                {/* Header Responsive  */}
                <div id="toggle-menu" className="toggle-menu">
                    {/* <img src="../src/menu_toggle.png" alt="Toggle menu"> */}
                </div> 

                {/* Header Desktop  */}
                <div className="header__logo-content">
                     <a><img className="header__logo" src={Logo} alt="Logo" width="100"/></a> 
                </div>

                <nav id="main-menu" className="header__nav">
                    <ul className="header__nav__items">
                        <li className="header__nav__link header__nav__link--selected"> <a>Home</a> </li>
                        <li className="header__nav__link"> <a>Portfolio</a> </li>
                        <li className="header__nav__link"> <a>Services</a> </li>
                        <li className="header__nav__link "> <a>About</a> </li>
                        <li className="header__nav__link"> <a>Contact</a> </li> 
                    </ul>
                </nav>
                {/* Utilizo la clase social por que tambien la utilizaré en el footer y en cada  miembro del team */}
                {/* <ul class="social">
                    <a href="https://www.facebook.com/" target="_blank"><label class="social__link"><i class="fa fa-facebook"></i></label></a>
                    <a href="https://www.linkedin.com/" target="_blank"><label class="social__link"><i class="fa fa-linkedin"></i></label></a>
                    <a href="https://www.instagram.com/" target="_blank"><label class="social__link"><i class="fa fa-instagram"></i></label></a>
                    <a href="https://www.twitter.com/" target="_blank"><label class="social__link"><i class="fa fa-twitter"></i></label></a>
                </ul> */}

                <CartWidget/>
                
            </section>
            </header>
        </div>

       

        </>

    )
}

export default NavBar;
