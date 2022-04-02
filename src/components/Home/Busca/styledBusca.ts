import { TextField } from "@mui/material";
import styled from "styled-components";

export const BoxBusca = styled.div`
    width: 60%;
    height: 25%;
    margin-top: 5%;
    border-radius: 25px;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid white;
    
`
export const Titulo = styled.h3`
    font-size: 26px;
    color: white;

`
export const ConfigTextField = styled.div`
    width: 80%;
    height: 60%;
    background-color: inherit;
`
export const Search = styled(TextField)`
    background-color: #C4C4C4;
    
`