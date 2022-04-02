import React from "react";
import {  BoxPagination, TextPagina } from "./styledPagination";
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material";
import { brown, indigo } from "@mui/material/colors";

type Param = {
    page: number,
    totalPage: number,
    anteriorPagina: Function,
    proximaPagina: Function
}

const Pagination = ({page, totalPage, anteriorPagina, proximaPagina}: Param) => {
    const Botao = styled(Button)<ButtonProps>(({theme}) => ({
        color: theme.palette.getContrastText(brown[800]),
        backgroundColor: "black",
        height: "40%",
        width: "20%",
        '&:hover':{
            backgroundColor: indigo[900]
        }
    }))


    return(
        <BoxPagination>
            {
                page === 1 ? null:
                <Botao
                size="medium"
                variant="contained"
                onClick={() => {anteriorPagina()}}
                >
                    Anterior
                </Botao>
            }
            
            <TextPagina>{page} de {totalPage}</TextPagina>
            {
                page === totalPage ? null:
                <Botao 
                size="medium"
                variant="contained"
                onClick={() => {proximaPagina()}}
                >
                    Próximo
                </Botao>
            }

        </BoxPagination>
    );
}

export default Pagination;