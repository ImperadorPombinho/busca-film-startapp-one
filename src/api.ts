import axios from "axios";


class API {
    private base;
    constructor() {
        this.base = axios.create({
            baseURL: "" //link generico da api de filmes
        });
    }
}


const api = new API();


export default api;