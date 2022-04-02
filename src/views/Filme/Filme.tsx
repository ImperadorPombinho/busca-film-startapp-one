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

const Filme =() => {
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
                <BoxInformaFilme>
                    <InformaFilme />
                </BoxInformaFilme>
                <BoxTagLineFilme>
                    <TagLineFilme />
                </BoxTagLineFilme>
                <BoxOverviewFilme>
                    <OverViewFilme />
                </BoxOverviewFilme>
                <BoxListCompanies>
                    <ListProductions />
                </BoxListCompanies>
            </DivScroll>
        </View>
    );
}

export default observer(Filme);