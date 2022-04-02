import React from "react";
import { Genero, ProductionCompanies, ProductionCountries } from "../../../types/filme";
import { LinhaBranca } from "../styledComponentsFilme";
import { BoxList, ListaTexto, Texto, TituloBox } from "./styledListProduction";

type Param = {
    genero: Genero[],
    productionCompanies: ProductionCompanies[],
    productionCountries: ProductionCountries[]
}


const ListProductions = ({genero, productionCompanies, productionCountries}: Param) => {
    return(
        <>
        <BoxList>
            <TituloBox>Generos</TituloBox>
            <LinhaBranca />
            <ListaTexto>
                {
                    genero.map((resposta) => (
                        <Texto key={resposta.id} >
                            {resposta.name}
                        </Texto>
                    ))
                }
            </ListaTexto>
        </BoxList>
        <BoxList>
            <TituloBox>Empresas</TituloBox>
            <LinhaBranca />
            <ListaTexto>
                {
                    productionCompanies.map((resposta) => (
                        <Texto key={resposta.id}>
                            {resposta.name}
                        </Texto>
                    ))
                }
            </ListaTexto>
        </BoxList>
        <BoxList>
            <TituloBox>Países Produtores</TituloBox>
            <LinhaBranca />
            <ListaTexto>
                {
                    productionCountries.map((resposta) => (
                        <Texto key={resposta.name}>
                            {resposta.name}
                        </Texto>
                    ))
                }
            </ListaTexto>
        </BoxList>
        </>
    );
}

export default ListProductions;