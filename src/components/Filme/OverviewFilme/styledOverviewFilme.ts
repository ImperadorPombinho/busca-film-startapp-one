import styled from "styled-components";


export const BoxOverview = styled.div`
    background-color: #C29613;
    height: 70%;
    width: 40%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;
export const TituloOverview = styled.h2`
    color: white;
    font-size: 30px;
`;

export const Overview = styled.p`
    color: white;
    font-size: 20px;

`;
export const LinhaBranca = styled.div`
    height: 1%;
    width: 100%;
    border: 1px solid white;
`;
export const BoxNota = styled.div`
    background-color: #C29613;
    border-radius: 30px;
    height: 70%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const TituloNota = styled.h2`
    color: white;
    font-size: 25px;
`;
export const Nota = styled.p`
    color: ${a => a.color};
    font-size: 50px;
`;