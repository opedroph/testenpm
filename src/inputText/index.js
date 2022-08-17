import React from "react";
import SInputText from "./style";
import propTypes from 'prop-types'

const InputText = ({variant, texto}) => {
    return (
        <SInputText variant={variant} placeholder={texto}></SInputText>
    );
}



InputText.propTypes = {
    variant:propTypes.oneOf(['primary', 'secundary']),
    texto:propTypes.string

}

InputText.defaultProps = {
    variant:'primary',
    texto:'ENTRAR'
}

export default InputText;




