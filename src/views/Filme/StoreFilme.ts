import { makeAutoObservable } from "mobx";
import api from "../../api";
import Filme from "../../types/filme";


export class StoreFilme {
    constructor(){
        makeAutoObservable(this);
    }
    public carregando: boolean = false;
    public filme: Filme = {
        adult: false,
        backdrop_path: undefined,
        belongs_to_collection: null,
        budget: 0,
        genres: [],
        homepage: null,
        id: 0,
        imdb_id: null,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: null,
        production_companies: [],
        production_countries: [],
        release_date: "",
        revenue: 0,
        runtime: null,
        spoken_languages: [],
        status: "",
        tagline: null,
        title: "",
        video: false,
        vote_average: 0,
        vote_counter:0

    }
    public setFilme(filme: Filme){
        this.filme = filme;
    }
    public setCarregando(carregando: boolean){
        this.carregando = carregando;
    }
    public buscarFilme = async (id: string) => {
        if(this.carregando){
            return;
        }
        this.setCarregando(true);
        
        try {
            const filme = await api.getFilme(id);
            this.setFilme(filme);
        }catch (error) {
            console.error(error)
        }finally{
            this.setCarregando(false);
        }
    }

}