import styled from "styled-components";

export const BoxImagem = styled.div`
    background-color: #C29613;
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
    background-color: #C29613;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const TituloDoFilme = styled.h1`
    color: white;
    font-size: 35px;
`
export const InformacoesFilme = styled.p`
    color: white;
    font-size: 22px;
`