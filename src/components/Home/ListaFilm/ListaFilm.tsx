import React, { useState } from "react";
import { BoxLista, CardFilme, PosterFilme, TituloFilme } from "./styledListFilm";
import { Resultados } from "../../../types/listaFilme";
import Teste from "../../../assets/teste.svg"


type Param = {
    results: Resultados[]
}
const ListaFilm = ({results}: Param) => {
    const urlBasicImage = "https://image.tmdb.org/t/p/w500"
    const urlPaginaFilme = "/filmes/"
    const [mouseFoco, setMouseFoco] = useState<boolean>(false);
    const [indice, setIndice] = useState<number>(-1);
    return(
        <BoxLista>
            {
                results.map((resposta) => (
                    <CardFilme 
                    to={urlPaginaFilme + resposta.id} 
                    key={resposta.id}
                    color={mouseFoco && indice === resposta.id  ? "#000": "#4D7388"}
                    >
                        <PosterFilme 
                        onMouseOver={()=> {
                            setMouseFoco(true);
                            setIndice(resposta.id);
                        }}
                        onMouseOut={() => {
                            setMouseFoco(false);
                            setIndice(-1);
                        }}
                        src={
                            
                            resposta.poster_path === null ?
                            Teste:
                            urlBasicImage + resposta.poster_path
                            } 
                            alt={resposta.title}/> 
                        <TituloFilme
                        color={mouseFoco && indice === resposta.id ? "white" : "#4D7388"}
                        >
                            {resposta.title}
                        </TituloFilme>
                    </CardFilme>
                ))
            }
        </BoxLista>
    );
}
export default ListaFilm;