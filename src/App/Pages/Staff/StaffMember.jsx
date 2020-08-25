import React, { useState } from 'react';
import styled from 'styled-components';

import { mq } from '../../../common/mediaQueries.js';

import Lightbox from '../../../common/Lightbox.jsx';

const StaffMember = ({member}) => {

    const [ showLBox, showLBoxUpdate ] = useState(false);

    const turnOn = () => {
        showLBoxUpdate(true);
    }

    const turnOff = () => {
        showLBoxUpdate(false);
    }

    return (
        <StaffMemberStyled className='StaffMember'>
            <img 
                src={ member.image } 
                alt={ member.title }
                onClick={ turnOn } 
            />
            <div className="title">{ member.title }</div>
            <div className="description">{ member.description }</div>
            <Lightbox show= {showLBox } hideAction={ turnOff }>
            <img src={ member.image } alt={ member.title } />
            <h3>{ member.title }</h3>
            </Lightbox>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`
    outline: solid 5px white;

    margin: 20px;

    width: 200px;
    @media ${mq.tablet} {
        width: 130px;
    }
    @media ${mq.desktop} {
        width: 250px;
    }

    img {
        max-width: 100%;
        display: block;
    }

    .title {
        background-color: #FCF6ED;
        color: #000000;
        padding: 5px;
        font-family: 'Abril Fatface', cursive;

    }

    .description {
        background-color: #FCF6ED;
        color: #404040;
        padding: 5px;
    }
`;