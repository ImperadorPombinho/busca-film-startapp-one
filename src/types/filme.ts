export interface Genero{
    id: number;
    name: string;
}
export interface ProductionCompanies{
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;

}
export interface ProductionCountries{
    iso_3611_1: string;
    name: string;
}
export interface SpokenLanguages{
    iso_639_1: string;
    name: string;
}

interface Filme {
    adult: boolean;
    backdrop_path: string | undefined;
    belongs_to_collection: null | object;
    budget: number;
    genres: Genero[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompanies[];
    production_countries: ProductionCountries[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: SpokenLanguages[]
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_counter: number;

}
export default Filme;