import React from "react";
import { BoxBusca, ConfigTextField, Titulo, Search } from "./styledBusca";


const Busca = () => {
    return(
        <BoxBusca>
            <Titulo>Busque Aqui!</Titulo>
            <ConfigTextField>
                <Search 
                variant="outlined"
                fullWidth
                size="medium"
                margin="normal"
                />
            </ConfigTextField>
        </BoxBusca>
    )
}

export default Busca;