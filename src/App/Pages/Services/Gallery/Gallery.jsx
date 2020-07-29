import React from 'react';
import styled from 'styled-components';

/* Comment H3 ---------------------------*/
import GalleryItem from './GalleryItem.jsx';

const Gallery = ({ services, currCategory}) => {

    console.log('FilterNav: ', services, currCategory);

    const renderGallery = () => {
        return services.packages.map((item, idx) => {
            return <GalleryItem key={ idx } item={item}/>;
        });
    }

    return (
        <GalleryStyled className='Gallery'>
            {renderGallery() }
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    
`;