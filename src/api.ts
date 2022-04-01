import axios from "axios";
import Filme from "./types/filme";

import {ListaFilmes} from "./types/listaFilme";

class API {
    private base;
    private apiKey: string;
    constructor() {
        this.base = axios.create({
            baseURL: "https://api.themoviedb.org/3" //link generico da api de filmes
        });
        this.apiKey = "api_key=45eb858eef4393990a83b95485543080"
    }

    public async getFilmes(pagina: number): Promise<ListaFilmes>{
        const aSerBuscado: string = "/movie/popular?" + 
        this.apiKey + 
        "&language=pt-BR&page="+
        pagina;
        console.log(pagina)
        console.log(aSerBuscado)
        console.log(this.base.get(aSerBuscado));
        return this.base.get(aSerBuscado).then(response => response.data);
    }
    public async getFilme(id: string): Promise<Filme>{
        const aSerBuscado: string = "/movie/"+id+"?"+this.apiKey+"&language=pt-BR"
        return this.base.get(aSerBuscado);
    }


}


const api = new API();

export default api;