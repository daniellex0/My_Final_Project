import React from 'react';
import styled from 'styled-components';

const Button = ({children, type}) => {

    return (
        <ButtonStyled 
            className='Button'
            type={ type } 
        >
            { children }
        </ButtonStyled>
    );
}

export default Button;

const ButtonStyled = styled.div`
    background-color: #3D65D3;
    text-align: center;
    color: white;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 10px;
    width: 70%;

    &:hover {
        background-color: #A770E6;
    }
    &:active {
        background-color: #E67099;
    }
`;