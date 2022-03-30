import React from "react"  
import { useParams } from "react-router-dom";
import InformaFilme from "../../components/Filme/InformaFilme/InformaFilme";
import NavBar from "../../components/NavBar/NavBar";
import { View } from "../styledGlobal";
import { BoxInformaFilme } from "./styledFilme";

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
        </View>
    );
}

export default Filme;