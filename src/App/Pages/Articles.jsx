import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Components ---------------------------*/
import ServicesContainer from './Services/ServicesContainer.jsx';

const Articles = () => {

    return (
        <ArticlesStyled className='Articles'>
            <Helmet>
                <title>Articles :: The Dandelion</title>
            </Helmet>
            <div className="nested-wrapper">
                <ServicesContainer />
                </div> 
        </ArticlesStyled>
    );
}

export default Articles;

const ArticlesStyled = styled.div`
    
`;