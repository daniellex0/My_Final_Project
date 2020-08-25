import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Youtube from './Favorites/Youtube.jsx';
import LinksContainer from './Favorites/LinksContainer.jsx';

const Favorites = () => {

    return (
        <FavoritesStyled className='Favorites'>
            <h3 className='video-headline'>This Week’s Best Video</h3>
                <div className='Youtube'>
                    <Youtube/>
                </div> 
            <hr />
            <h3 className='links-headline'>This Week’s Best Links</h3>
            <div className='links-container'>
                    <LinksContainer />
            </div>
        </FavoritesStyled>
    );
}

export default Favorites;

const FavoritesStyled = styled.div`
    h3 {
        text-align: center;
        margin: 30px;
    }

    hr {
        margin: 20px;
    }
`;