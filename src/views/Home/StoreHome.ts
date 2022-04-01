import { action, makeObservable, observable } from "mobx";
import api from "../../api";
import {ListaFilmes} from "../../types/listaFilme";

export class Store{
    constructor(){

        makeObservable(
            
            this,
            {
                listaFilme: observable,
                carregando: observable,
                fetch: action
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

    public fetch = async (page: number) => {
        this.listaFilme = await api.getFilmes(page);
        console.log(this.listaFilme)    
    }

}


