import React from "react";
import { BoxLista, CardFilme, PosterFilme, TituloFilme } from "./styledListFilm";
import { Resultados } from "../../../types/listaFilme";



type Param = {
    results: Resultados[]
}
const ListaFilm = ({results}: Param) => {
    const urlBasicImage = "https://image.tmdb.org/t/p/w500"
    const urlPaginaFilme = "/filmes/"
    return(
        <BoxLista>
            {
                results.map((resposta) => (
                    <CardFilme to={urlPaginaFilme + resposta.id} key={resposta.id}>
                        <PosterFilme src={urlBasicImage + resposta.poster_path} alt={resposta.title}/> 
                        <TituloFilme>{resposta.title}</TituloFilme>
                    </CardFilme>
                ))
            }
        </BoxLista>
    );
}
export default ListaFilm;