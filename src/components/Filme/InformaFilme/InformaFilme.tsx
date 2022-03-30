import React from "react";
import { BoxImagem, ImagemFilme, InformaBox, InformacoesFilme, TituloDoFilme } from "./styledInformaFilme";
import Teste from '../../../assets/teste.svg'

const InformaFilme = () => {
    return(
        <>
        <BoxImagem>
            <ImagemFilme src={Teste} alt="Teste" />
        </BoxImagem>
        <InformaBox>
            <TituloDoFilme>Titulo do Filme!</TituloDoFilme>
            <InformacoesFilme>Data de lançamento</InformacoesFilme>
            <InformacoesFilme>Genero</InformacoesFilme>
            <InformacoesFilme>Creditos</InformacoesFilme>
        </InformaBox>
        
        </>
    );
}

export default InformaFilme;