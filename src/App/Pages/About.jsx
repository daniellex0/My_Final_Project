import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import AboutInfo from './../Pages/About/AboutInfo.jsx';
import Dandelion from './Dandelion-black-580x386.jpg';

const About = () => {

    return (
        <AboutStyled className='About'>
            <div className="nested-wrapper">
                    <h3>About The Dandelion</h3> 
                <div className='info'><AboutInfo /></div> 
                <div className='image'>
                        <img src = { Dandelion } alt="Dandelion"/>
                </div>
            </div>
        </AboutStyled>
    );
}

export default About;

const AboutStyled = styled.div`
    h3 {
        text-align: center;
        padding: 20px;
    }

    img {
        max-width: 100px;
        height: auto;
    }

    .image {
        max-width: 100px;
        margin-right: auto;
        margin-left: auto;
        padding: 20px;
    } 
`;