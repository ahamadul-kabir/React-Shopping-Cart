
import React from 'react';
import { Button } from 'react-bootstrap';
import './HeaderBanner.css';


const HeaderBanner = () => {
    return (
        <div className='header'>
            <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur culpa doloribus, eius quo a! Reprehenderit, libero! Consequatur, eligendi ipsum.</p>
          
            <Button variant="outline-primary">Lets Start</Button>{' '}
            </div>
        </div>
    );
};

export default HeaderBanner;