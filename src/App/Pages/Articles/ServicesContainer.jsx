import React, { useState} from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { stories } from './storiesData.js';

/* Components ---------------------------*/
import FilterNav from './FilterNav/FilterNav.jsx';
import Gallery from './Gallery/Gallery.jsx';

const ServicesContainer = () => {

    const [currCategory, currCategorySet ] = useState(stories.categories[0]);

    console.log('currCategory', currCategory);

    return (
        <ServicesContainerStyled className='ServicesContainer'>
            <FilterNav 
                stories={ stories } 
                currCategory={ currCategory }
                currCategorySet={ currCategorySet }
            />
            <Gallery stories={ stories } currCategory={ currCategory }/>
        </ServicesContainerStyled>
    );
}

export default ServicesContainer;

const ServicesContainerStyled = styled.div`
    
`;