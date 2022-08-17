import styled from "styled-components";

export const BgHeader = styled.div`
width: 100vw;
//so funciona se for padding: 100px.
//essa props retorna uma string e nao funciona
padding: ${props=> props.BgPadding};  
background-color: ${props=> props.BgColor};
display: flex;
align-items: center;
justify-content: space-between;
`

export const ContainerNameEmpresa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


export const NameEmpresa = styled.h1`
font-size: ${props=> props.NameEmpresaFontSize};
color: ${props=> props.NameEmpresaColor};
`

export const ContainerButtons = styled.div`
display: flex;
width: ${props=> props.ContainerBotoesWidth};
align-items: center;
justify-content: space-between;
`



