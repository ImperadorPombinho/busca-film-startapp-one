import styled from "styled-components";

export const BoxPagination = styled.nav`
    width: 60%;
    height: 13.6%;
    background-color: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 700px){
       margin-top: 4%;
       height: 20%;
       width: 70%;
    }
    @media only screen and (max-width: 400px){
       width: 90%;
    }
    @media only screen and (max-height: 600px){
       width: 100%;
       
    }
`;

export const TextPagina = styled.p`
    font-size: 20px;
    color: white;
    font-weight: 900;
`;