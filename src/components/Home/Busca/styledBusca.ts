import { TextField } from "@mui/material";
import styled from "styled-components";

export const BoxBusca = styled.div`
    width: 60%;
    height: 25%;
    margin-top: 7.5%;
    border-radius: 25px;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid white;
    @media only screen and (max-width: 700px ){
        margin-top: 15%;
        
    }
    @media only screen and (max-width: 400px){
        margin-top: 25%;
        
    }
    @media only screen and (max-height: 600px){
        height: 30%;
        width: 50%;
        margin-top: 5.5%;

    }
    @media only screen and (max-height: 460px){
        margin-top: 3.5%;
        justify-content: flex-start;
    }
    @media only screen and (max-height: 320px){
        margin-top: 4.5%;
        justify-content: flex-start;
        height: 50%;
    }
`
export const Titulo = styled.h3`
    font-size: 26px;
    color: white;
    @media only screen and (max-width: 700px ){
        font-size: 18px;
        
    }
    @media only screen and (max-width: 400px){
        font-size: 14px;
        
    }
    @media only screen and (max-height: 460px){
        font-size: 14px;
    }

`
export const Search = styled(TextField)`
    background-color: #C4C4C4;
    
    
`