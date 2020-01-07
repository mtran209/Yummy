import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="site-footer container-fluid px-0">
                <div className="row">
                    <div className="col">
                        <h3 className="pt-5 pb-2">Explore</h3>
                        <ul className="list-unstyled pb-5">
                            <li>Home</li>
                            <li>Meals</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className="pt-5 pb-2">Contact</h3>
                        <ul className="list-unstyled pb-5">
                            <li>Contact Us</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3 className="pt-5 pb-2">Follow</h3>
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/" ><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/" ><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/" ><i className="fa fa-twitter" /></a>{' '}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;