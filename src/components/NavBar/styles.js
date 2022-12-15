import styled from 'styled-components'

export const Navbar=styled.header`
    width: 100%;
    height: 4rem;
    background-color:RGB(52 58 130);
    padding: 0.5rem;
    grid-template-columns:6fr .5fr 1fr;
    display:grid;
    color: white;

    & button{
        background-color: transparent;
        color: white;
        width: 5rem;
        height: 2rem;
        border-radius: 3px;
        border: none;
        cursor:pointer;
        transition:.5s;
        margin:.4rem 1rem;
        font-size: 16px;
    }

    & button:hover{
        background-color: rgb(88,92,124);
        width: 6rem;
        margin:.5rem 1rem;
    }

    & p{
        margin: 0rem 1rem;
    }
`