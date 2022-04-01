import React, { useEffect } from "react";
import { BoxBusca, ConfigTextField, Titulo, Search } from "./styledBusca";

type Param = {
    setEstaDigitando: Function,
    estaDigitando: boolean,
    setTextoBusca: Function,
    textoBusca: string
}
const Busca = ({setEstaDigitando, estaDigitando, setTextoBusca, textoBusca}: Param) => {
    
    
    useEffect(() => {
        console.log("estaDigitando: " + estaDigitando + "\no que foi digitado: " + textoBusca);
    }, [estaDigitando, textoBusca])
    return(
        <BoxBusca>
            <Titulo>Busque Aqui!</Titulo>
            <ConfigTextField>
                <Search 
                variant="outlined"
                fullWidth
                size="medium"
                margin="normal"
                onChange={(event) => {
                    event.preventDefault();
                    setTextoBusca(event.target.value);
                    
                    
                }}
                onKeyUp={() => {
                    setEstaDigitando(false);
                }}
                onKeyDown={() => {
                    setEstaDigitando(true);
                }}
                />
            </ConfigTextField>
        </BoxBusca>
    )
}

export default Busca;