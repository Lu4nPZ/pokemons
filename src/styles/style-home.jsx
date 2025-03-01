import { styled } from 'styled-components'

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 5em;

    .img-pokeball{
        width: 3em;
        transition: 0.3s ease-in-out;
        cursor: pointer;

        &:hover{
            scale: 1.1;
        }
    }

    .logo-pokemon{
        width: 20em;
    }

    .btn-theme{
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
    }
`