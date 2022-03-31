import React from "react";
import { BoxImagem, ImagemFilme, InformaBox, InformacoesFilme, TituloDoFilme, LinhaBranca } from "./styledInformaFilme";
import Teste from '../../../assets/teste.svg'

const InformaFilme = () => {
    return(
        <>
        <BoxImagem>
            <ImagemFilme src={Teste} alt="Teste" />
        </BoxImagem>
        <InformaBox>
            <TituloDoFilme>Titulo do Filme!</TituloDoFilme>
            <LinhaBranca />
            <InformacoesFilme>Data de lançamento</InformacoesFilme>
            <InformacoesFilme>Genero</InformacoesFilme>
        </InformaBox>
        
        </>
    );
}

export default InformaFilme;