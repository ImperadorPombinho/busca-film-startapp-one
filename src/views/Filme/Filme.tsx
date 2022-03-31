import React from "react"  
import { useParams } from "react-router-dom";
import InformaFilme from "../../components/Filme/InformaFilme/InformaFilme";
import OverViewFilme from "../../components/Filme/OverviewFilme/OverviewFilme";
import TagLineFilme from "../../components/Filme/TagLineFilme/TagLineFilme";
import NavBar from "../../components/NavBar/NavBar";
import { View } from "../styledGlobal";
import { BoxInformaFilme, BoxOverviewFilme, BoxTagLineFilme } from "./styledFilme";

type Param = {
    id: string
}

const Filme =() => {
    const {id} = useParams<Param>();
    
    return(
        <View>
            <NavBar />
            <BoxInformaFilme>
                <InformaFilme />
            </BoxInformaFilme>
            <BoxTagLineFilme>
                <TagLineFilme />
            </BoxTagLineFilme>
            <BoxOverviewFilme>
                <OverViewFilme />
            </BoxOverviewFilme>
        </View>
    );
}

export default Filme;