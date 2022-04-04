import {  makeAutoObservable } from "mobx";
import api from "../../api";
import {ListaFilmes} from "../../types/listaFilme";

export class StoreHome{
    constructor(){

        makeAutoObservable(this);
    }
    public listaFilme: ListaFilmes = {
        page: 1,
        results: [],
        total_results: 1,
        total_pages: 1
    };
    public carregando: boolean = false;

    public setListaFilme(listaFilme: ListaFilmes){
        this.listaFilme = listaFilme;
    }
    public setCarregando(carregando: boolean){
        this.carregando = carregando;
    }
    


    public buscarFilmes = async (page: number) => {
        if(this.carregando){
            return;
        }
        this.setCarregando(true);
        try {
            const listaFilme =  await api.getFilmes(page);
            this.setListaFilme(listaFilme);
        } catch (error) {
            console.error(error);
        }finally{
            this.setCarregando(false);
        }
           
    }
    public buscarFilmesPesquisados = async (termoPesquisado: string, page: number) => {
        if(this.carregando){
            return;
        }
        this.setCarregando(true);
        try {
            let listaFilmePesquisado =  await api.getFilmeBuscado(termoPesquisado, page);
            if(listaFilmePesquisado.total_pages < page){
                listaFilmePesquisado =  await api.getFilmeBuscado(termoPesquisado, 1);
            }
            this.setListaFilme(listaFilmePesquisado);
        }catch (error) {
            console.error(error);
        }finally{
            this.setCarregando(false);
        }
        
    }

}


