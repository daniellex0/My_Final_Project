import React from 'react';
import styled from 'styled-components';

import { mq } from '../common/mediaQueries.js';

const Footer = () => {
    return (
        <FooterStyled>
            <div className='nested-wrapper'>
                <p>The Dandelion © All Rights Reserved</p>
            </div>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: #EFFAFC;

p {
    text-align: center;
    padding: 15px;
}

@media ${mq.tablet} {
    /* background-color: green; */
}
@media ${mq.desktop} {
    /* background-color: #EFFAFC; */
}

`;