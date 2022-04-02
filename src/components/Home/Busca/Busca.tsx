import React, { useEffect } from "react";
import { BoxBusca, ConfigTextField, Titulo, Search } from "./styledBusca";

type Param = {
    setEstaDigitando: Function,
    setTextoBusca: Function,
    intervalo: number
}
const Busca = ({setTextoBusca, intervalo, setEstaDigitando}: Param) => {
    

    return(
        <BoxBusca>
            <Titulo>Busque Aqui!</Titulo>
                <Search 
                variant="outlined"
                fullWidth
                size="small"
                margin="normal"
                style={{
                    height: "23%",
                    width: "80%"
                }}

                onChange={(event) => {
                    event.preventDefault();
                    setTextoBusca(event.target.value);
                    
                    
                }}
                onKeyUp={() => {
                    clearTimeout(intervalo)
                    setEstaDigitando(false)
                }}
                onKeyDown={()=> {
                    setEstaDigitando(true)
                }}

                />
        </BoxBusca>
    )
}

export default Busca;