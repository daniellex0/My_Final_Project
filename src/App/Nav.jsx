import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mq } from '../common/mediaQueries.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, showMenuSet] = useState(false);

    const toggleMenu = () => {
        // console.log('You clicked the hamburger', showMenu);
        showMenuSet(!showMenu);
    }

    // useEffect is for lifecycle events, like component mounted
    // When we pass empty [] it triggers component mounted
    useEffect (()=>{
        // console.log('I have mounted');

        const handleWindowSizeChange = () => {
            const isItMobile = window.matchMedia(`(max-width:499px)`);
            // console.log(isItMobile);

            showMenuSet(!isItMobile.matches);
        }

        //On Load / Component Mounts
        handleWindowSizeChange();

        //Every Time Window is resized
        window.addEventListener('resize', handleWindowSizeChange);

        //Clean Up our Listeners on dismount
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }

    },[]); // straight braces empty = component mounted

    return (
        <NavStyled>
            <div className='nested-wrapper'>
                <div
                    className="hamburger"
                    onClick={ toggleMenu }
                >
                <FontAwesomeIcon icon={ faBars } />
                </div>
                {
                    showMenu &&
            <div className='links'>
                <NavLink to="/" exact>HOME</NavLink>
                <NavLink to="/articles">ARTICLES</NavLink>
                <NavLink to="/favorites">FAVORITES</NavLink>
                <NavLink to="/contact">CONTACT US</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                </div>
                }
            </div>
        </NavStyled>
    );
}
export default Nav;

const NavStyled = styled.nav`
    color: white;
    text-align: center;

    .hamburger {
        position: absolute;
        right: 20px;
        top: 20px;

        cursor: pointer;

        svg {
            color: #5d36f5;
            width: 40px;
            height: auto;
        }

        display: block;

        @media ${mq.tablet} {
            display: none;
        }

    }

    a {
        display: inline-block;

        text-align: center;
        font-size: 16px;
        color: black;

        text-decoration: none;

        margin-bottom: 10px;

        width: 100%;
        line-height: 40px;

        @media ${mq.tablet} {
            width: 100px;
            line-height: 50px;
            margin-right: 10px;
            margin-left: 10px;
            margin-bottom: 0px;
        }
        @media ${mq.desktop} {
            width: 115px;
        }

        &:hover {
            border-bottom: 3px solid;
            border-bottom-color: #EF42EF;
        }
        &.active {
            border-bottom: 3px solid;
            border-bottom-color: #42E8EF
        }
    }


    `;