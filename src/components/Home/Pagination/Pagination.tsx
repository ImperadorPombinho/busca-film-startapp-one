import React from "react";
import {  BoxPagination, TextPagina } from "./styledPagination";
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material";
import { brown } from "@mui/material/colors";

const Pagination = () => {
    const Botao = styled(Button)<ButtonProps>(({theme}) => ({
        color: theme.palette.getContrastText(brown[800]),
        backgroundColor: brown[500],
        height: "40%",
        width: "20%",
        '&:hover':{
            backgroundColor: brown[900]
        }
    }))


    return(
        <BoxPagination>
            <Botao
            size="medium"
            variant="contained"
            >
                Anterior
            </Botao>
            <TextPagina>1 de ???</TextPagina>
            <Botao 
            size="medium"
            variant="contained"
            >
                Próximo
            </Botao>
        </BoxPagination>
    );
}

export default Pagination;