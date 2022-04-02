import styled from "styled-components";


export const BoxOverview = styled.div`
    background-color: #C29613;
    height: 60%;
    width: 30%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;
export const TituloOverview = styled.h2`
    color: white;
    font-size: 25px;
`;

export const Overview = styled.p`
    color: white;
    font-size: 25px;

`;

export const TituloNota = styled.h2`
    color: white;
    font-size: 25px;
`;
export const Nota = styled.p`
    color: ${a => a.color};
    font-size: 50px;
`;