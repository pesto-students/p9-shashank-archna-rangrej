import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div class="footer">
            <div class="container">
                <div class="footer-container">
                    <div class="footer-title">Shortly</div>
                    <nav class="footer-nav">
                        <div class="footer-heading">Features</div>
                        <ul>
                            <li class="footer-items">
                                <a href="#0" class="footer-link">Link Shortening</a>
                            </li>
                            <li class="footer-items">
                                <a href="#0" class="footer-link">Branded Links</a>
                            </li>
                            <li class="footer-items">
                                <a href="#0" class="footer-link">Analytics</a>
                            </li>
                        </ul>
                    </nav>
                    <nav class="footer-nav">
                        <div class="footer-heading">Resources</div>
                        <ul>
                            <li class="footer-items">
                                <a href="#0" class="footer-link">Blog</a>
                            </li>
                            <li class="footer-items">
                                <a href="#0" class="footer-link">Developers</a>
                            </li>
                            <li class="footer-items">
                                <a href="#0" class="footer-link">Support</a>
                            </li>
                        </ul>
                    </nav>
                    <nav class="footer-nav">
                        <div class="footer-heading">Company</div>
                        <ul>
                            <li class="footer-items">
                                <a href="#0" class="footer-link">About</a>
                            </li>
                            <li class="footer-items">
                                <a href="#0" class="footer-link">Our Team</a>
                            </li>
                            <li class="footer-items">
                                <a href="#0" class="footer-link">Careers</a>
                            </li>
                            <li class="footer-items">
                                <a href="#0" class="footer-link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer;