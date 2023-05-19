import React from 'react';
import image from '../images/working.svg';
import './content.css';
import Search from './Search';

const Content = () => {
    return (
        <><div className='content-container'>
            <div>
                <h2>More than just shorter links</h2>
                <p>Build your brand's recognition and get detailed insight on how your links are performing</p>
                <a href="#0" className='btn-blue'>Get Started</a>
            </div>
            <div>
                <img src={image} alt="working" />
            </div>
        </div><Search /></>
    )
}

export default Content;