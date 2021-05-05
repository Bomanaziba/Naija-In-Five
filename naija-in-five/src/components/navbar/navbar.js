import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavBar(props) {

    return (
        <header id="mu-header" className="" role="banner">
            <div className="container">
                <nav className="navbar navbar-default mu-navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">



                            <a className="navbar-brand" href="index.html"><FontAwesomeIcon icon={['fas', 'coffee']}/> Naija In Five</a>




                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav mu-menu navbar-right">
                                <li><a href="#">HOME</a></li>
                                <li><a href="#mu-book-overview">OVERVIEW</a></li>
                                <li><a href="#mu-author">AUTHOR</a></li>
                                <li><a href="#mu-pricing">PRICE</a></li>
                                <li><a href="#mu-testimonials">TESTIMONIALS</a></li>
                                <li><a href="#mu-contact">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;