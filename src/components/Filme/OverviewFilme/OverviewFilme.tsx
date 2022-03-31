import React from "react";
import { BoxNota, BoxOverview, LinhaBranca, Nota, Overview, TituloNota, TituloOverview } from "./styledOverviewFilme";


const OverViewFilme = () => {
    return(
        <>
        <BoxOverview>
            <TituloOverview>Sinopse</TituloOverview>
            <LinhaBranca />
            <Overview>ahsgdjadgsdjfsdfsfsfjsfsdfscb jbchdsdshgshdfsdf</Overview>

        </BoxOverview>
        <BoxNota>
            <TituloNota>Nota</TituloNota>
            <LinhaBranca />
            <Nota color="white" >7.9</Nota>
        </BoxNota>
        </>
    );
}

export default OverViewFilme;