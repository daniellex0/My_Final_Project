import React from 'react';
import styled from 'styled-components';

const Deets = () => {

    return (
        <DeetsStyled className='Deets'>
            <div className="contactintro">
                <h3>Contact Us</h3> 
                <p>Reach out with any tips, media inquiries, or just to say hi!</p>
            </div>
        </DeetsStyled>
    );
}

export default Deets;

const DeetsStyled = styled.div`
    .contactintro {
        max-width: 250px;
        margin-left: 40px;
    }

`;