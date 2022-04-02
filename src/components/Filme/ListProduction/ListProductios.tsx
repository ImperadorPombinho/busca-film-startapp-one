import React from "react";
import { LinhaBranca } from "../styledComponentsFilme";
import { BoxList, ListaTexto, Texto, TituloBox } from "./styledListProduction";

type listaNomes = {
    nome: string
}

const array: listaNomes[] = [
    {
        nome: "usa"
    },
    {
        nome: "usa"
    },
    {
        nome: "usa"
    },
    {
        nome: "usa"
    },
    {
        nome: "usa"
    },
    {
        nome: "usa"
    },
    {
        nome: "usa"
    },
    {
        nome: "usa"
    },
]


const ListProductions = () => {
    return(
        <>
        <BoxList>
            <TituloBox>Generos</TituloBox>
            <LinhaBranca />
            <ListaTexto>
                {
                    array.map((resposta) => (
                        <Texto>{resposta.nome}</Texto>
                    ))
                }
            </ListaTexto>
        </BoxList>
        <BoxList>
            <TituloBox>Empresas</TituloBox>
            <LinhaBranca />
            <ListaTexto>
                {
                    array.map((resposta) => (
                        <Texto>{resposta.nome}</Texto>
                    ))
                }
            </ListaTexto>
        </BoxList>
        <BoxList>
            <TituloBox>Países Produtores</TituloBox>
            <LinhaBranca />
            <ListaTexto>
                {
                    array.map((resposta) => (
                        <Texto>{resposta.nome}</Texto>
                    ))
                }
            </ListaTexto>
        </BoxList>
        </>
    );
}

export default ListProductions;