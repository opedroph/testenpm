import Header from '../header'

export default {
    title:'components/Header',
    component:Header
}

const template = (props) => <Header {...props} />

export const HeaderTwo = ()=>{return <Header 
BgColor="#010101" 
BgPadding="10px 30px"
ContainerBotoesWidth="250px"
NameEmpresaColor="white"
NameEmpresaFontSize="3em"/>}

export const HeaderOne = template.bind({    
BgColor:"#010101",
BgPadding:"10px 30px",
ContainerBotoesWidth:"250px",
NameEmpresaColor:"white",
NameEmpresaFontSize:"3em",})

