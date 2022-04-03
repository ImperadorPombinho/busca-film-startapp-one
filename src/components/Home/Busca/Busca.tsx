import React from "react";
import { BoxBusca, Titulo, Search } from "./styledBusca";

type Param = {
    setEstaDigitando: Function,
    setTextoBusca: Function,
}
const Busca = ({setTextoBusca, setEstaDigitando}: Param) => {
    

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