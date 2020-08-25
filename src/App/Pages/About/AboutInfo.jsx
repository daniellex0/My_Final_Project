import React from 'react';
import styled from 'styled-components';

const AboutInfo = () => {

    return (
        <AboutInfoStyled className='AboutInfo'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis risus fermentum, faucibus risus eu, rhoncus ex. Praesent at elit maximus, rutrum velit finibus, posuere nisi. Donec lacinia vel mauris eget pulvinar. Vivamus interdum orci ante, at vestibulum nisi ornare eget. Vestibulum maximus nunc tellus, et convallis ipsum lobortis vel. Curabitur eget nisl lacinia, mattis elit efficitur, sollicitudin ipsum. Aenean lorem turpis, maximus ut hendrerit quis, tristique at ipsum. Integer suscipit quam eu interdum tincidunt.</p>
        </AboutInfoStyled>
    );
}

export default AboutInfo;

const AboutInfoStyled = styled.div`
    background-color: #f7f1f7;
    max-width: 800px;
    height: 180px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px;

    p {
        max-width: 650px;
        margin-right: auto;
        margin-left: auto;
    }
`;