import React from "react"  
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { View } from "../styledGlobal";

type Param = {
    id: string
}

const Filme =() => {
    const {id} = useParams<Param>();
    
    return(
        <View>
            <NavBar />
            
        </View>
    );
}

export default Filme;