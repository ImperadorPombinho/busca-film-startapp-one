import React from "react";
import { LinhaBranca } from "../styledComponentsFilme";
import {  BoxOverview, Nota, Overview, TituloNota, TituloOverview } from "./styledOverviewFilme";


const OverViewFilme = () => {
    return(
        <>
        <BoxOverview>
            <TituloOverview>Sinopse</TituloOverview>
            <LinhaBranca />
            <Overview>ahsgdjadgsdjfsdfsfsfjsfsdfscb jbchdsdshgshdfsdf</Overview>
        </BoxOverview>
        <BoxOverview>
            <TituloNota>Notas</TituloNota>
            <LinhaBranca />
            <Nota color="white" >7.9</Nota>
        </BoxOverview>
        </>
    );
}

export default OverViewFilme;