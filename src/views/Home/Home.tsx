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
    const[page, setPage] = useState(1)
    const store = useLocalObservable(() => new StoreHome());
    const [estaDigitando, setEstaDigitando] = useState<boolean>(true);
    const [textoBusca, setTextoBusca] = useState<string>("");
    let [intervalo, setIntervalo] = useState<number>(0)
    useEffect(() =>{
        console.log(page)
        console.log(textoBusca)
        if(!estaDigitando){
            setIntervalo(intervalo + 1);
        }else{
            setIntervalo(0);
        }
        console.log("esperando: " + intervalo)
        if(intervalo >= 200 &&(textoBusca !== "" || textoBusca === null || page > 1)){
            store.buscarFilmesPesquisados(textoBusca, page);
            setIntervalo(200)
            setEstaDigitando(true)
        }else if(textoBusca === "" || textoBusca === null){
            store.buscarFilmes(page);
            setIntervalo(0)
            setEstaDigitando(true)
        }
        
    }, [page, store, estaDigitando, textoBusca, intervalo]);

    const proximaPagina = () => {
        if(page < store.listaFilme.total_pages){
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
                    <Busca 
                    setTextoBusca={setTextoBusca}
                    intervalo={intervalo}
                    setEstaDigitando={setEstaDigitando}
                    />
                    <Pagination 
                    page={page} 
                    totalPage={store.listaFilme.total_pages} 
                    anteriorPagina={anteriorPagina}
                    proximaPagina={proximaPagina}
                    />
                    <ListaFilm 
                    results={ 
                    store.listaFilme.results
                } 
                    
                    />
                </ConfigView>
        </View>
    );
}

export default observer(Home);