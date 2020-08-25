import React from 'react';
import styled from 'styled-components';

const MainArticle = ({article}) => {

    return (
        <MainArticleStyled className='MainArticle'>
            <img 
                key={ 1 }
                src={ article.image } 
                alt ={ article.title }
            />
            <span className="title">{ article.title }</span>
        </MainArticleStyled>
    );
}

export default MainArticle;

const MainArticleStyled = styled.div`
    margin: 20px;
    margin-top: 0px;
    
    img {
        width: 40%;
        height: auto;
    }

    .title {
        vertical-align: top;
        margin-left: 10px;
        background-color: #FCF6ED;
        font-family: 'Abril Fatface', cursive;
    }
`;