import { styled } from 'styled-components'

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1% 5%;

    .img-pokeball{
        width: 3em;
        transition: 0.3s ease-in-out;
        cursor: pointer;

        &:hover{
            scale: 1.1;
        }
    }

    .logo-pokemon{
        width: 30%;
    }
`