import styled from "styled-components";


export const BoxOverview = styled.div`
    background-color: #000;
    height: 90%;
    width: 30%;
    margin-bottom: 2.5%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: inset 10px 10px 20px rgba(255, 255, 255, 0.15);
    @media only screen and (max-width: 740px){
        width: 40%;
    }
    @media only screen and (max-width: 600px){
        width: 60%;
        height: 40%;
    }
    @media only screen and (max-width: 400px){
        width: 80%;
        height: 45%;
    }
    @media only screen and (max-height: 550px){
        width: 40%;
        height: 75%;
        
    }
    @media only screen and (max-height: 400px){
        width: 70%;
        margin-top: 5%;
    }
`;
export const TituloOverview = styled.h2`
    
    color: white;
    font-size: 25px;
    @media only screen and (max-height: 550px){
        font-size: 19px;
        font-weight: 500;
    }
    @media only screen and (max-width: 300px){
        font-size: 16px;
        font-weight: 500;
    }
`;

export const Overview = styled.p`
    width: 80%;
    text-align: center;
    color: white;
    font-size: 15px;
    @media only screen and (max-height: 550px){
        font-size: 13px;
        font-weight: 500;
    }
    @media only screen and (max-width: 300px){
        font-size: 10px;
        font-weight: 500;
    }

`;

export const TituloNota = styled.h2`
    color: white;
    font-size: 25px;
    @media only screen and (max-height: 550px){
        font-size: 19px;
        font-weight: 500;
    }
`;
export const Nota = styled.p`
    color: ${a => a.color};
    font-size: 50px;
    @media only screen and (max-height: 550px){
        font-size: 30px;
        font-weight: 500;
    }
`;