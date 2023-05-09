import styled, {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    font-family: 'Inter', sans-serif; 
    list-style: none;
}

body{
    padding-top: 80px;
    

    @media (max-width:768px){
        padding-top: 16px;
    }
}
`
export default GlobalStyle;


//container principal
export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 128px auto;
    column-gap: 56px;

    img{
        max-width: 100%;
    }

    @media (max-width:768px) {
        display: block;
        max-width: 80%;

    }
`