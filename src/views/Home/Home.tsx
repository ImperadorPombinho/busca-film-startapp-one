import { CircularProgress } from "@mui/material";
import { observer, useLocalObservable } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import Busca from "../../components/Home/Busca/Busca";
import ListaFilm from "../../components/Home/ListaFilm/ListaFilm";
import Pagination from "../../components/Home/Pagination/Pagination";
import NavBar from "../../components/NavBar/NavBar";
import { View } from "../styledGlobal";
import { StoreHome } from "./StoreHome";
import {  ConfigView } from "./styledHome";

const Home: React.FC = () => {
    const [page, setPage] = useState<number>(1)
    const storeHome = useLocalObservable(() => new StoreHome());
    const [estaDigitando, setEstaDigitando] = useState<boolean>(true);
    const [textoBusca, setTextoBusca] = useState<string>("");
    const [textoAntigo, setTextoAntigo] = useState<string>("");
    let [intervalo, setIntervalo] = useState<number>(0)
    useEffect(() =>{
        if(!estaDigitando){
            setIntervalo(intervalo + 1);
        }else{
            setIntervalo(0);
        }
        if((intervalo >= 300 && (textoBusca !== "" || textoBusca !== null)) || (textoAntigo === textoBusca && textoAntigo !== "")){
            storeHome.buscarFilmesPesquisados(textoBusca, page);
            setIntervalo(0);
            setEstaDigitando(true);
            setTextoAntigo(textoBusca);

        }else if((textoBusca === "" || textoBusca === null)){
            storeHome.buscarFilmes(page);
            setIntervalo(0);
            setEstaDigitando(true);
            setTextoAntigo("");
        }
        
    }, [page, 
        storeHome, 
        estaDigitando, 
        textoBusca, 
        intervalo, 
        textoAntigo]
    );

    const proximaPagina = () => {
        if(page < storeHome.listaFilme.total_pages){
            setPage(page + 1);
        }
        

    }
    const anteriorPagina = () => {
        if(page > 1){
            setPage(page - 1)
        }
        
    }

    
    return(
        <View>
            <NavBar /> 
                <ConfigView>
                    {
                        storeHome.carregando ?
                        <CircularProgress 
                        variant="indeterminate" 
                        color="secondary"
                        style={{
                            height: "10%",
                            width: "10%"
                        }}
                        />
                        :
                        <>
                            <Busca 
                            setTextoBusca={setTextoBusca}
                            setEstaDigitando={setEstaDigitando}
                            textoBusca={textoBusca}
                            />
                            <Pagination 
                            page={page} 
                            totalPage={storeHome.listaFilme.total_pages} 
                            anteriorPagina={anteriorPagina}
                            proximaPagina={proximaPagina}
                            />
                            <ListaFilm 
                            results={ 
                            storeHome.listaFilme.results
                            } 
                            
                            />
                    </>
                    }
                    
                </ConfigView>
        </View>
    );
}

export default observer(Home);