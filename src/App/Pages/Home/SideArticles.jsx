import React from 'react';
import styled from 'styled-components';

const SideArticles = (sidearticles) => {

    return (
        <SideArticlesStyled className='SideArticles'>
            <img 
                key={ 1 }
                src={ sidearticles.image } 
                alt ={ sidearticles.title }
            /> 
            <div className="title">{ sidearticles.title }</div>
        </SideArticlesStyled>
    );
}

export default SideArticles;

const SideArticlesStyled = styled.div`
    img {
        width: 100px;
        height: auto;
    }
`;