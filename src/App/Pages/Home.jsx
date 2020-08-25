import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Components ---------------------------*/
import Tabbed from './Tabbed/Tabbed.jsx';
import ArticleBlock from './Home/ArticleBlock.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
                <title>Home :: The Dandelion</title>
            </Helmet>
            <div className="nested-wrapper">
                <ArticleBlock />
            </div>
            <div className="nested-wrapper">
                <Tabbed />
            </div>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    
`;