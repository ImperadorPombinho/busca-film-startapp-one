import React from "react";
import { BoxLista, CardFilme, PosterFilme, TituloFilme } from "./styledListFilm";
import Teste from '../../../assets/teste.svg'

interface teste{
    nomeFilme: string,
    imagem: typeof Teste
}


const array: teste[] = [
    {
        nomeFilme: "ele sim",
        imagem: Teste
    },
    {
        nomeFilme: "ele nao casou",
        imagem: Teste
    },
    {
        nomeFilme: "ele ja",
        imagem: Teste
    },
    {
        nomeFilme: "ele ssss",
        imagem: Teste
    },
    {
        nomeFilme: "ele siaaam",
        imagem: Teste
    },
    {
        nomeFilme: "ele ssssim",
        imagem: Teste
    },

]


const ListaFilm = () => {
    return(
        <BoxLista>
            {
                array.map((resposta) => (
                    <CardFilme key={resposta.nomeFilme}>
                        <PosterFilme src={resposta.imagem} alt="alou"/> 
                        <TituloFilme>{resposta.nomeFilme}</TituloFilme>
                    </CardFilme>
                ))
            }
        </BoxLista>
    );
}
export default ListaFilm;