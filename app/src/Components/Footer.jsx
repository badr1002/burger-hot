import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer id="footer">
                    <div className="container">
                        <h3>Burger-hot</h3>
                        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe
                            commodi placeat.</p>
                        <div className="social-links">
                            <a href="https://twitter.com/badrhelal14" className="twitter">
                                <i className="fab fa-twitter"/>
                            </a>
                            <a href="https://www.facebook.com/badr232" className="facebook">
                                <i className="fab fa-facebook"/>
                            </a>
                            <a href="/" className="instagram">
                                <i className="fab fa-instagram"/>
                            </a>
                            <a href="https://github.com/badr1002" className="google-plus">
                                <i className="fab fa-github"/>
                            </a>
                            <a href="https://www.linkedin.com/in/badr-helal-7308111a9/" className="linkedin">
                                <i className="fab fa-linkedin"/>
                            </a>
                        </div>
                        <div className="copyright">
                            &copy; Copyright <strong><span>Burger-hot</span></strong>. All Rights Reserved
                        </div>

                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;
