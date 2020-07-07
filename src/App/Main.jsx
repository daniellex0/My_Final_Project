import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <MainStyled>
            <h1>Page Title</h1>
            <h2>Subtitle</h2>
            <h3>Sub Sub Title</h3>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    h1 {
        background-color: yellow;
        font-size: 70px;
    }
    h2 {
        background-color: purple;
        padding: 25px;
    }
    h3 {
        background-color: blue;
        border: solid 15px red;
    }

        `;