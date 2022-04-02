import { action, makeObservable, observable } from "mobx";
import api from "../../api";
import Filme from "../../types/filme";



export class StoreFilme {
    constructor(){
        makeObservable(
            this,
            {
                carregando: observable,
                filme: observable,
                buscarFilme: action
            }
        );
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
    public buscarFilme = async (id: string) => {
        if(this.carregando){
            return;
        }
        this.carregando = true
        
        try {
            this.filme = await api.getFilme(id);
        } catch (e) {
            console.error(e)
        }finally{
            this.carregando= false
        }
    }

}