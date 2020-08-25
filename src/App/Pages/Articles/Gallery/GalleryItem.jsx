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

    /* border: solid 1px purple; */

    margin: 20px;
    img { 
        display: block; 
        width: 200px;
        height: auto;
    }

    .category {
        position: absolute;
        top: 0; right: 0; left: 0;
        background-color: rgba(255,255,255, .5);
        padding: 10px;
        font-size: 14px;

        text-align: right;
    }
    .title {
        background-color: #FCF6ED;
        color: #000000;
        padding: 5px;
        font-family: 'Abril Fatface', cursive;
        font-weight: 500px;
    }

    .Lightbox {
        img {
            border: solid 20px red;
            max-width: 100%;
        }
        h3 {
            font-size: 30px;
            margin: 0px;
        }
        .description {
            color: #333;
            background-color: gray;
        }
    }
`;