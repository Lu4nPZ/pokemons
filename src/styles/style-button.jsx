import { styled } from 'styled-components'

export const ButtonTheme = styled.button`
    background: none;
    border: none;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover{
        scale: 1.1;
    }
    
    .img-moon{
        width: 3em;
    }
`