import styled from "styled-components";

export const Card=styled.div`
    background-color:black;
    color: white;
    opacity: .8;
    width: 25rem;
    border-radius: 5px;
    height:9.5rem;
    margin: 1rem;
    padding: .5rem;

    & *{
        margin:.2rem;
    }

    & .Online{
        margin-top:-17px ;
        margin-left:3rem ;
        color: green;
    }

    & .Offline{
        margin-top:-17px ;
        margin-left:3rem ;
        color: red;
    }
`