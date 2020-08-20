import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx';
import Articles from './Pages/Articles.jsx';
import Favorites from './Pages/Favorites.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';

const Main = () => {
    return (
        <MainStyled>
                <Switch>
                    <Route path='/about' component={ About } />
                    <Route path='/contact' component={ Contact } />
                    <Route path='/articles' component={ Articles } />
                    <Route path='/favorites' component={ Favorites } />
                    <Route path='/' component={ Home } />                
                </Switch>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    padding: 50px;

    h1 {
        font-size: 75px;
    }
    `;

