import React from 'react';
import styled from 'styled-components';

import Input from './Input.jsx';
import Textarea from './Textarea.jsx';

const FormGroup = ({formField, onChange}) => {

    const Control = (formField.inputType === 'textarea') ? Textarea : Input;

    return (
        <FormGroupStyled className='FormGroup'>
            <label htmlFor={ formField.id }>{formField.label}:</label>
            {
                (formField.validate.message) &&
                <div className={ formField.id }>{ formField.validate.message }</div>
            }
            <Control formField={ formField } onChange={ onChange }/>
        </FormGroupStyled>
    );
}

export default FormGroup;

const FormGroupStyled = styled.div`
    label {
        font-weight: bold;
    }
    .feedback {
        color: red;
        margin: 5px 0px;
    }

    .Control {
        input, textarea {
            width: 100%;
            font-size: 18px;
            padding: 5px;
        }

        textarea {
            height: 200px;
        }
    }
`;