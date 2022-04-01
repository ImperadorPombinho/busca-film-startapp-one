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
    
    useEffect(() =>{
        store.fetch(page);
    }, [page, store]);
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
                    <Busca />
                    <Pagination 
                    page={page} 
                    totalPage={store.listaFilme.total_pages} 
                    anteriorPagina={anteriorPagina}
                    proximaPagina={proximaPagina}
                    />
                    <ListaFilm results={store.listaFilme.results} />
                </ConfigView>
            

        </View>
    );
}

export default observer(Home);