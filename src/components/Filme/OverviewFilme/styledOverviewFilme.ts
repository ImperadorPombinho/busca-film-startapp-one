import styled from "styled-components";


export const BoxOverview = styled.div`
    background-color: #444444;
    height: 70%;
    width: 30%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: inset 10px 10px 20px rgba(255, 255, 255, 0.15);
`;
export const TituloOverview = styled.h2`
    
    color: white;
    font-size: 25px;
`;

export const Overview = styled.p`
    width: 80%;
    text-align: center;
    color: white;
    font-size: 19px;

`;

export const TituloNota = styled.h2`
    color: white;
    font-size: 25px;
`;
export const Nota = styled.p`
    color: ${a => a.color};
    font-size: 50px;
`;