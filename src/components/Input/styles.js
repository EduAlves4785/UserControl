import styled from 'styled-components'

export const InputUser=styled.input`
    width: 13rem;
    height: 1.5rem;
    color: white;
    background-color:rgb(88,101,242);
    border:0;
    margin: .5rem;
    border-radius: 5px;
    outline: none;
    transition:.3s;

    &:hover{
        margin-left:1rem;
    }
`

export const Label=styled.label`
    font-size:15px;
    color: white;
`

export const Perror=styled.p`
    color:red;
`