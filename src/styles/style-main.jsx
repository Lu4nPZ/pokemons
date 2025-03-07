import { styled } from 'styled-components'

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .titulo{
        width: 60%;
        color: #fff;
        font-size: 1.2em;
        text-align: center;
        margin-bottom: 1em;
    }

    .cards{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1em;
        width: 60%;
        margin-bottom: 1em;
    }

    .card{
        width: 12em;
        height: 15em;
        border-radius: 1em;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        padding: 1em;
        transition: 0.3s ease-in-out;
        cursor: pointer;

        &:hover{
            scale: 1.1;
        }
        
        img{
            width: 90%;
        }

        p{
            font-size: 1.3em;
        }
    }

    .btn-carregar{
        padding: 1em 2em;
        border-radius: 0.5em;
        border: none;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        font-size: 1em;

        &:hover{
            opacity: 0.5;
        }
    }
`