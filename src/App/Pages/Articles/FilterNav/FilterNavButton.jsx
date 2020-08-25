import React from 'react';
import styled from 'styled-components';

const FilterNavButton = ({name, currCategory, currCategorySet}) => {

    console.log('FilterNavButton currCategory', currCategory);

const changeCategory = () => {
    currCategorySet(name);
}

const theClassName = (name === currCategory) ? 'FilterNavButton active': 'FilterNavButton';

    return (
        <FilterNavButtonStyled 
            className={ theClassName }
                onClick={ changeCategory }
            >
            { name } 
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`
    display: inline-block;
    padding: 10px 20px;
    background-color: #F8E6FF;
    color: #000000;
    margin: 10px;
    border-radius: 26px;

    cursor: pointer;

    &:hover {
        background-color: #B8F1F4;
    }

    &.active {
        background-color: #CEF7DF;
    }
`;