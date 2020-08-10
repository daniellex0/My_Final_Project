import React, { useState } from 'react';
import styled from 'styled-components';

import Lightbox from '../../../../common/Lightbox.jsx';

const GalleryItem = ({item}) => {

    const [ showLBox, showLBoxUpdate ] = useState(false);

    const turnOn = () => {
        showLBoxUpdate(true);
    }
    const turnOff = () => {
        showLBoxUpdate(false);
    }

    return (
        <GalleryItemStyled className='GalleryItem'>
            <div className="category">{ item.category }</div>
            <img 
                src={ item.image } 
                alt ={ item.title }
                onClick={ turnOn } 
            />
            <div className="title">{ item.title }</div>
            <Lightbox show= { showLBox } hideAction={ turnOff }>
            <img src={ item.image } alt ={ item.title } />
            <h3>{ item.title }</h3>
                <div className="description"> 
                { item.description }
                </div>
                <div className="cost">${ item.cost }</div>
            </Lightbox>
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