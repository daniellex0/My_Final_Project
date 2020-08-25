import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Components ---------------------------*/
import ServicesContainer from './Articles/ServicesContainer.jsx';
import Staff from './Staff/Staff.jsx';

const Articles = () => {

    return (
        <ArticlesStyled className='Articles'>
            <Helmet>
                <title>Articles :: The Dandelion</title>
            </Helmet>
            <div className="nested-wrapper">
                <h3 className='headline'>Most Recent</h3>
                <Staff />
            </div>
            <div className="nested-wrapper">
                <h3 className='headline'>Explore All</h3>
                <ServicesContainer />
            </div> 
        </ArticlesStyled>
    );
}

export default Articles;

const ArticlesStyled = styled.div`
    h3 {
        text-align: center;
        padding: 15px;
        /* background-color: #CEF7DF; */
    }
`;