import React from "react";
import { SButton } from "./style";
import propTypes from 'prop-types'

const Button = ({ButtonLabel, SButtonBackgroundColor, SButtonColor}) => {
    return (
        <SButton SButtonBackgroundColor={SButtonBackgroundColor} SButtonColor={SButtonColor}>{ButtonLabel}</SButton>
    );
}


Button.propTypes = {
    ButtonLabel: propTypes.string,
    SButtonBackgroundColor: propTypes.string, 
    SButtonColor:propTypes.string
}

export default Button;