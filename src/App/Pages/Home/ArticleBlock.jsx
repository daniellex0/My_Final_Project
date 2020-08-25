import React from 'react';
import styled from 'styled-components';

import MainArticlePanel from './MainArticlePanel.jsx';
import SideArticlePanel from './SideArticlePanel.jsx';

const ArticleBlock = () => {

    return (
        <ArticleBlockStyled className='ArticleBlock'>
        <div className="nested-wrapper">
            <div className="column column1">
                <SideArticlePanel />
            </div>
            <div className="column column2">
                <MainArticlePanel/>
            </div> 
        </div>
        </ArticleBlockStyled>
    );
}

export default ArticleBlock;

const ArticleBlockStyled = styled.div`
    .nested-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .column {
            padding: 20px;
        }

        .column1 {
            width: 55%;
        }
        .column2 {
            width: 45%;
        }

    }
`;