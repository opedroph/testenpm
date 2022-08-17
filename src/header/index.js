import React from "react";
import Button from "../button";
import { BgHeader, ContainerButtons, ContainerNameEmpresa, NameEmpresa } from "./style";
import propTypes from 'prop-types'

const Header = ({BgPadding,BgColor,NameEmpresaColor, NameEmpresaFontSize, ContainerBotoesWidth}) => {
    return (
        <BgHeader BgColor={BgColor} BgPadding={BgPadding}>
            <ContainerNameEmpresa>
                <NameEmpresa NameEmpresaColor={NameEmpresaColor} NameEmpresaFontSize={NameEmpresaFontSize}>Fluxo</NameEmpresa>
            </ContainerNameEmpresa>
            <ContainerButtons ContainerBotoesWidth={ContainerBotoesWidth}>
                {/* da forma que esta sendo passadas as informaçoes para os botoes, nao será possivel mudar
                 no storybook e em uma futura biblioteca, encontrar uma maneira inteligente de passar isso na props
                 do componente header
                 */}
                <Button ButtonLabel={'ENTRAR'} SButtonBackgroundColor = {'#F58332'} SButtonColor= {'white'} ></Button>
                <Button ButtonLabel={'CRIAR CONTA'} SButtonBackgroundColor = {'#F58332'} SButtonColor= {'white'} ></Button>
            </ContainerButtons>
        </BgHeader>
    );
}


Header.propTypes={
    BgPadding:propTypes.string,
    BgColor:propTypes.string,
    NameEmpresaColor: propTypes.string, 
    NameEmpresaFontSize: propTypes.string, 
    ContainerBotoesWidth: propTypes.string
}

export default Header;