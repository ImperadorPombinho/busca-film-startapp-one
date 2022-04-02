import { action, makeObservable, observable } from "mobx";
import api from "../../api";
import {ListaFilmes} from "../../types/listaFilme";

export class StoreHome{
    constructor(){

        makeObservable(
            
            this,
            {
                listaFilme: observable,
                carregando: observable,
                buscarFilmes: action,
                buscarFilmesPesquisados: action
            }
            
            );
    }
    public listaFilme: ListaFilmes = {
        page: 1,
        results: [],
        total_results: 1,
        total_pages: 1
    }
    public carregando: boolean = false

    public buscarFilmes = async (page: number) => {
        this.listaFilme = await api.getFilmes(page);   
    }
    public buscarFilmesPesquisados = async (termoPesquisado: string, page: number) => {
        this.listaFilme = await api.getFilmeBuscado(termoPesquisado, page);
    }

}


