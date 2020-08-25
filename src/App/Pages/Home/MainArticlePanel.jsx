import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { articles } from './articleData.js';

/* Components ---------------------------*/
import MainArticle from './MainArticle.jsx';

const MainArticlePanel = () => {

    const renderMainArticle = () => {
        return articles.packages.map((article, idx) => {
            return <MainArticle 
                        key={ idx }
                        article={ article }
                    />;
        });
    }

    return (
        <MainArticlePanelStyled className='MainArticlePanel'>
            {renderMainArticle() }
        </MainArticlePanelStyled>
    );
}

export default MainArticlePanel;

const MainArticlePanelStyled = styled.div`
    
`;