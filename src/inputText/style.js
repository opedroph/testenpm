import styled, { css }from "styled-components";

const SInputText = styled.input`
    padding: 10px 30px;
    border-radius: 10px;
     background-color: white;
     color: black;
    
    ${(props)=>{
        if( props.variant === 'primary')
        {
            return css`
                background-color: black;
                color: white;
            `
        }
        else if( props.variant === 'secundary')
        {
            return css`
                background-color: yellow;
                color: black;
            `
        }
    }}
`
export default SInputText;