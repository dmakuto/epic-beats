import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="copyright">
                    &copy; <a href="https://derickmakuto.tech/" target="_blank" className="link"  rel="noopener noreferrer"><p>2020 Derick Simiyu</p></a> 
                    <p>Powered by</p>
                    <a href="https://developer.spotify.com/dashboard/" target="_blank" className="link"  rel="noopener noreferrer"><p>spotify.com</p></a>.
                </div>
            </footer>
        )
    }
}

export default Footer;