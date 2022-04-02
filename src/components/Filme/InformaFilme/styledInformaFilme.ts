import { Chip } from "@mui/material";
import styled from "styled-components";

export const BoxImagem = styled.div`
    background-color: #000;
    height: 300px;
    width: 300px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`;
export const ImagemFilme =    styled.img`
    height: 80%;
    width: 80%;
`;

export const InformaBox = styled.div`
    width: 40%;
    border-radius: 20px;
    height: 82%;
    display: flex;
    background-color: #000;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const TituloDoFilme = styled.h1`
    color: white;
    font-size: 35px;
`
export const InformacoesFilme = styled.p`
    color: ${props => props.color};
    font-size: 22px;
    
`
export const BoxLinguagem = styled.div`
    width: 80%;
    height: 30%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;