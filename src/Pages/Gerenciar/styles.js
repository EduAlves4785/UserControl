import styled from "styled-components";

export const Body=styled.div`
    width:100%;
    height: auto;
    display:flex;
    flex-direction: column;
    padding: 1rem;

`

export const DeletePanel=styled.div`
    width: 18rem;
    text-align:center;
    height: 10rem;
    margin:0rem 1.2rem;
    border-radius: 4px;
    color: white;
    background-color: black;
    opacity:.85;
    padding: 1rem;

    & *{
        margin:.5rem;
    }

    & input{
        border: none;
        width: 6rem;
        height: 2rem;
        font-size:15px;
        outline-color: RGB(78 88 188);
    }

    & button{
        width: 4rem;
        height: 2rem;
        border-radius: 4px;
        background-color: RGB(239 79 79);
        cursor: pointer;
        transition:.5s;
    }

    & button:hover{
        transition:.5s;
        background-color: red;
    }
`