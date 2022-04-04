import { Link } from "react-router-dom";
import styled from "styled-components";

export const BoxLista = styled.div`
    height: 60%;
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
    @media only screen and (max-width: 700px) {
        height: 100%;
        width: 100%;
        background-color: inherit;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        
        justify-content: flex-start;
        align-items: center;
        overflow-y: scroll;
        ::-webkit-scrollbar{
        display: none;
        }
        margin-top: 2.5%;
    }
    @media only screen and (max-height: 420px) {
        height: 100%;
        width: 100%;
        background-color: inherit;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        
        justify-content: flex-start;
        align-items: center;
        overflow-y: scroll;
        ::-webkit-scrollbar{
        display: none;
        }
        margin-top: 2.5%;
    }
`;

export const CardFilme = styled(Link)`
    
    width: 25.3%;
    height: 90%;
    background-color: ${props => props.color};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 5%;
    margin-top: 2%;
    text-decoration: none;
    :hover{
        transition: 0.74s;
    }
    @media only screen and (max-width: 700px) {
        height: 100%;
        width: 29%;
        background-color: #000;
    }
    @media only screen and (max-height: 420px){
        height: 100%;
        width: 29%;
        background-color: #000;
    }
    


`;
export const TituloFilme = styled.h2`
    font-size: 23px;
    font-weight: 600;
    color: ${props => props.color};
    text-align: center;
    margin-top: 2px;
    @media only screen and (max-width: 700px){
        color: white;
        font-size: 20px;
    }
    @media only screen and (max-height: 420px){
        color: white;
        font-size: 16px;
    }
    @media only screen and (max-width: 300px){
        color: white;
        font-size: 13px;
    }

`;
export const PosterFilme = styled.img`
    width: 100%;
    height: 90%;
    border-radius: 20px;

`;