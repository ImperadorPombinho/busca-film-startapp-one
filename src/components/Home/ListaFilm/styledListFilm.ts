
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BoxLista = styled.div`
    height: 50%;
    width:70%;
    background-color: inherit;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const CardFilme = styled(Link)`
    width: 25.3%;
    height: 90%;
    background-color: #C29613;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 5%;
    margin-top: 2%;
    :hover{
        transition: 0.74s;
        background-color: #755B0C;
    }


`;
export const TituloFilme = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: white;
    text-align: center;
    margin-top: 2px;

`;
export const PosterFilme = styled.img`
    width: 100%;
    height: 70%;
`;