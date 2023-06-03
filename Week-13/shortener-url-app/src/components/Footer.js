import React from 'react';
import './footer.css';

const Footer = () => {
    const features = ['Link Shortening', 'Branded Links', 'Analytics'];
    const resources = ['Blog', 'Developers', 'Support'];
    const company = ['About', 'Our Team', 'Career', 'Contact'];
    return (
        <div class="footer">
            <div class="container">
                <div class="footer-container">
                    <div class="footer-title">Shortly</div>
                    <nav class="footer-nav">
                        <div class="footer-heading">Features</div>
                        <ul>
                            {features.map((item, index) => (
                                <li class="footer-items" key={`features-${index+1}`}>
                                    <a href="#0" class="footer-link">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav class="footer-nav">
                        <div class="footer-heading">Resources</div>
                        <ul>
                            {resources.map((item, index) => (
                                <li class="footer-items" key={`resources-${index+1}`}>
                                    <a href="#0" class="footer-link">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav class="footer-nav">
                        <div class="footer-heading">Company</div>
                        <ul>
                            {company.map((item, index) => (
                                <li class="footer-items" key={`company-${index+1}`}>
                                    <a href="#0" class="footer-link">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer;