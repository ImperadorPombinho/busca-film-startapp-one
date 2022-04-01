import { observer, useLocalObservable } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import Busca from "../../components/Home/Busca/Busca";
import ListaFilm from "../../components/Home/ListaFilm/ListaFilm";
import Pagination from "../../components/Home/Pagination/Pagination";
import NavBar from "../../components/NavBar/NavBar";
import { View } from "../styledGlobal";
import { Store } from "./StoreHome";
import {  ConfigView } from "./styledHome";

const Home: React.FC = () => {
    const[page, setPage] = useState(1)
    const store = useLocalObservable(() => new Store());
    const [estaDigitando, setEstaDigitando] = useState<boolean>(false);
    const [textoBusca, setTextoBusca] = useState<string>("");
    useEffect(() =>{
        console.log(page)
        if(!estaDigitando && (textoBusca !== "" || textoBusca === null)){
            let id_time  = setTimeout(() => {
                console.log("pog")
            }, 10)  
            clearTimeout(id_time)
            id_time = setTimeout(() => {
                store.buscarFilmesPesquisados(textoBusca, page)
            }, 2000)  
        }else{
            store.buscarFilmes(page);
        }
        console.log(store.listaFilme)
        
    }, [page, store, estaDigitando, textoBusca]);

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
                    setEstaDigitando={setEstaDigitando} 
                    estaDigitando={estaDigitando} 
                    setTextoBusca={setTextoBusca}
                    textoBusca={textoBusca}
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