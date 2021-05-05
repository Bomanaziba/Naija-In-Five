import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer(props) {
    return (
        <footer id="mu-footer" role="contentinfo">
            <div className="container">
                <div className="mu-footer-area">
                    <div className="mu-social-media">

                        
                        <a href="#"><FontAwesomeIcon icon={ faFacebook } /></a>
                        <a href="#"><FontAwesomeIcon icon={ faTwitter } /></a>
                        <a href="#"><FontAwesomeIcon icon={ faInstagram } /></a>
                    </div>
                    <p className="mu-copyright">&copy; Copyright AlphaX. All right reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;