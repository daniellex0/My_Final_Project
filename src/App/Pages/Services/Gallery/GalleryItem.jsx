import React from 'react';
import styled from 'styled-components';

const GalleryItem = ({item}) => {

    return (
        <GalleryItemStyled className='GalleryItem'>
            <div className="category">{ item.category }</div>
            <img src={ item.image } alt ={ item.title } />
            <div className="title">{ item.title }</div>
        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
    position: relative;

    border: solid 1px purple;

    margin: 20px;
    img { display: block; }

    .category {
        position: absolute;
        top: 0; right: 0; left: 0;
        background-color: rgba(255,255,255, .5);
        padding: 10px;
        font-size: 14px;

        text-align: right;
    }
    .title {
        position: absolute;
        bottom: 0; right: 0; left: 0;
        background-color: rgba(255,255,255, .5);
        padding: 10px;
        font-size: 20px;
    }
`;