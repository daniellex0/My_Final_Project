import React from 'react';
import styled from 'styled-components';

import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

const App = () => {

    return (
        <AppStyled className='App'>
            My App 
            <Header />
            <Nav />
            <Main />
            <Footer />
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
    .nested-wrapper {
            max-width: 1200px;
            margin: auto;

            outline: solid red 1px;
            padding: 10px;
    } 
`;