import { CircularProgress } from "@mui/material";
import { observer, useLocalObservable } from "mobx-react-lite";
import React, { useEffect } from "react"  
import { useParams } from "react-router-dom";
import InformaFilme from "../../components/Filme/InformaFilme/InformaFilme";
import ListProductions from "../../components/Filme/ListProduction/ListProductios";
import OverViewFilme from "../../components/Filme/OverviewFilme/OverviewFilme";
import TagLineFilme from "../../components/Filme/TagLineFilme/TagLineFilme";
import NavBar from "../../components/NavBar/NavBar";
import { DivScroll, View } from "../styledGlobal";
import { StoreFilme } from "./StoreFilme";
import { BoxInformaFilme, BoxListCompanies, BoxOverviewFilme, BoxTagLineFilme } from "./styledFilme";

type Param = {
    id: string
}

const Filme: React.FC =() => {
    const {id} = useParams<Param>();
    const storeFilme = useLocalObservable(() => new StoreFilme());
    useEffect(() => {
        if(typeof id === "string"){
            storeFilme.buscarFilme(id)
        }
    }, [storeFilme, id]);
    return(
        <View>
            <NavBar />
            <DivScroll>
                {
                    storeFilme.carregando ?
                    <CircularProgress 
                    variant="indeterminate"
                    color="secondary"
                    />
                    :
                    <>
                        <BoxInformaFilme>
                            <InformaFilme  
                            posterPath={storeFilme.filme.poster_path}
                            title={storeFilme.filme.title}
                            realeseDate={storeFilme.filme.release_date}
                            spokenLanguages={storeFilme.filme.spoken_languages} 
                            
                            />
                        </BoxInformaFilme>
                        <BoxTagLineFilme>
                            <TagLineFilme 
                            tagline={storeFilme.filme.tagline} 
                            />
                        </BoxTagLineFilme>
                        <BoxOverviewFilme>
                            <OverViewFilme  
                            overview={storeFilme.filme.overview}
                            voteAverage={storeFilme.filme.vote_average}
                            />
                        </BoxOverviewFilme>
                        <BoxListCompanies>
                            <ListProductions
                            genero={storeFilme.filme.genres}
                            productionCompanies={storeFilme.filme.production_companies}
                            productionCountries={storeFilme.filme.production_countries}
                            />
                        </BoxListCompanies>
                    
                    </>
                }
                
            </DivScroll>
        </View>
    );
}

export default observer(Filme);