import React from 'react';
import styled from 'styled-components';

const LinksContainer = () => {

    return (
        <LinksContainerStyled className='LinksContainer'>
            <div className='container'>
                <ul className='links-list'>
                    <li><span className='source'>Buzzfeed</span> -<a href="https://www.thecut.com/2020/08/alexandria-ocasio-cortez-telfar-clemens-queens.html"> <span className='descrip'>The Best Recipes to Make During Quarantine</span></a></li>
                    <li><span className='source'>Cup of Joe</span> -<a href="https://www.thecut.com/2020/08/alexandria-ocasio-cortez-telfar-clemens-queens.html"><span className='descrip'>The Best Recipes to Make During Quarantine</span></a></li>
                    <li><span className='source'>The Cut</span> -<a href="https://www.thecut.com/2020/08/alexandria-ocasio-cortez-telfar-clemens-queens.html"><span className='descrip'>The Best Recipes to Make During Quarantine</span></a></li>
                    <li><span className='source'>The New Yorker</span> - <a href="https://www.thecut.com/2020/08/alexandria-ocasio-cortez-telfar-clemens-queens.html"><span className='descrip'>The Best Recipes to Make During Quarantine</span></a></li>
                    <li><span className='source'>Bon Appetit</span> - <a href="https://www.thecut.com/2020/08/alexandria-ocasio-cortez-telfar-clemens-queens.html"><span className='descrip'>The Best Recipes to Make During Quarantine</span></a></li>
                </ul>
            </div> 
        </LinksContainerStyled>
    );
}

export default LinksContainer;

const LinksContainerStyled = styled.div`
    background-color: #E3FDF0;
    max-width: 600px;
    height: 280px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px;

    .source {
        color: #C857F2;
    }

    .descrip {
        border-bottom: 1px solid #C857F2;
    }

    li {
        padding: 12px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    /* ul {
        max-width: 550px;
        margin-right: auto;
        margin-left: auto;
    } */
/* 
    .container {
        width: 700px;
        height: 700px;
        padding: 10px;
        border: 5px solid gray;
        margin-left: auto;
        margin-right: auto;
        color: #E3FDF0;
    } */
`;