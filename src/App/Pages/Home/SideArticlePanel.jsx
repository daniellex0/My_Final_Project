import React from 'react';
import styled from 'styled-components';

// /* Scripts ---------------------------*/
// import { sidearticles } from './sidearticleData.js';

/* Components ---------------------------*/
// import SideArticles from './SideArticles.jsx';
import Party from '../../Pages/Party.png';
const SideArticlePanel = () => {

    // const renderSideArticles = () => {
    //     return sidearticles.packages.map((sidearticles, idx) => {
    //         return <SideArticles 
    //                     key={ idx }
    //                     sidearticles={ sidearticles }
    //                 />;
    //     });
    // }

    return (
        <SideArticlePanelStyled className='SideArticlePanel'>
            {/* {renderSideArticles() }         */}
            <img src = { Party } alt = "People partying together"/>
            <div className="text">
                <h3><span class="highlight">Partying after Coronavirus</span></h3>
                <div className="description">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, totam. Assumenda saepe fugit qui officiis.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, totam. Assumenda saepe fugit qui officiis.</p>
                </div>
            </div>
        </SideArticlePanelStyled>
    );
}

export default SideArticlePanel;

const SideArticlePanelStyled = styled.div`
    img {
        width: 100%;
        height: auto;
    }

    .text {
        background-color: #FCF6ED;
    }

    h3 {
        font-family: 'Abril Fatface', cursive;
        font-size: 20px;
    }

    .highlight {
        background: linear-gradient(180deg, rgba(255,255,255,0) 60%, #9DEEF2 60%);
    }

    .description {
        font-size: 16px
    }
`;