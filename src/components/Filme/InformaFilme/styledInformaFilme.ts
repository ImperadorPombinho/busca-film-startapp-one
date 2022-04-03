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
    @media only screen and (max-width: 735px) {
        height: 70%;
        width: 30%;
    }
    @media only screen and (max-width: 400px) {
        height: 174px;
        width: 174px;
        margin-bottom: 3%;
    }

`;
export const ImagemFilme =    styled.img`
    height: 80%;
    width: 80%;
`;

export const InformaBox = styled.div`
    width: 50%;
    border-radius: 20px;
    height: 90%;
    display: flex;
    background-color: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media only screen and (max-width: 735px) {
        height: 70%;
    }
    @media only screen and (max-width: 400px) {
        height: 70%;
        width: 80%;
    }

`

export const TituloDoFilme = styled.h1`
    color: white;
    font-size: 30px;
    text-align: center;
    @media only screen and (max-width: 735px) {
        font-size: 20px;
        text-decoration: underline;
    }
`
export const InformacoesFilme = styled.p`
    color: ${props => props.color};
    font-size: 13px;
    @media only screen and (max-width: 735px) {
        font-size: 10px;
        
    }
    
    
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