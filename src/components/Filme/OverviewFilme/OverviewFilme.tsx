import React from "react";
import { LinhaBranca } from "../styledComponentsFilme";
import {  BoxOverview, Nota, Overview, TituloNota, TituloOverview } from "./styledOverviewFilme";

type Param = {
    overview: string,
    voteAverage: number
}
const OverViewFilme = ({overview, voteAverage}: Param) => {
    function saberCorNota(nota: number): string{
        if(nota >= 7.0){
            return "#3FD74F";
        }else if(nota >= 5.0 && nota < 7.0){
            return "white";
        }else{
            return "#CE0404"
        }
    }



    return(
        <>
        <BoxOverview>
            <TituloOverview>Sinopse</TituloOverview>
            <LinhaBranca defaultValue={80} />
            <Overview>{overview}</Overview>
        </BoxOverview>
        <BoxOverview>
            <TituloNota>Notas</TituloNota>
            <LinhaBranca defaultValue={80} />
            <Nota color={saberCorNota(voteAverage)} >{voteAverage}</Nota>
        </BoxOverview>
        </>
    );
}

export default OverViewFilme;