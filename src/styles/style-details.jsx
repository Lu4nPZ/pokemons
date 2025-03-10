import { styled } from 'styled-components'

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .image-pokemon{
        width: 80%;
    }

    .card-details{
        background-color: #fff;
        display: flex;
        align-items: center;
        gap: 3em;
        justify-content: center;
        flex-direction: column;
        width: 60%;
        height: 20em;
        padding: 1em;
        border-radius: 1em;

        .titulo-descricao{
            font-size: 1.2em;
            text-align: center;
        }

        .descricao{
            font-size: 1.1em;
            text-align: center;
        }
    }
`