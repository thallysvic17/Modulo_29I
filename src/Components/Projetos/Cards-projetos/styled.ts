import  styled  from 'styled-components'

 export const StyleCard = styled.div`

    border: 1px solid ${(props) => props.theme.Border};
    padding: 16px;

`
export const LinkButton = styled.a`


    color: ${(props)=> props.theme.background};
    font-size: 14px;
    background-color:${(props)=> props.theme.ButtonColor};
    text-decoration: none;
    padding: 8px;
    cursor: pointer;
    display: inline-block;
    margin-top: 24px;
    
`