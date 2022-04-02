import React from "react";
import {  BoxImagem, BoxLinguagem, ImagemFilme, InformaBox, InformacoesFilme, TituloDoFilme } from "./styledInformaFilme";
import Teste from '../../../assets/teste.svg'
import { LinhaBranca } from "../styledComponentsFilme";
import { SpokenLanguages } from "../../../types/filme";


type Param = {
    posterPath: string | null,
    title: string,
    realeseDate: string
    spokenLanguages: SpokenLanguages[]
}

const InformaFilme = ({posterPath, title, realeseDate, spokenLanguages}:Param) => {
    const urlBasicImage = "https://image.tmdb.org/t/p/w500"
    return(
        <>
        <BoxImagem>
            <ImagemFilme src={
                posterPath === null ?
                Teste :
                urlBasicImage + posterPath
            } 
            alt={title} />
        </BoxImagem>
        <InformaBox>
            <TituloDoFilme>{title}</TituloDoFilme>
            <LinhaBranca />
            <InformacoesFilme>{realeseDate}</InformacoesFilme>
            <BoxLinguagem> 
                {
                    spokenLanguages.map(linguas => (
                            <>                 
                                <InformacoesFilme 
                                key={linguas.name}
                                color="white" 
                                
                                >
                                    {linguas.name}
                                </InformacoesFilme>
                                <InformacoesFilme
                                color="green"
                                >
                                    /
                                </InformacoesFilme>
                                
                            </>
                    ))
                }
            </BoxLinguagem>

        </InformaBox>
        
        </>
    );
}

export default InformaFilme;